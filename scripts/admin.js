//Show modal to edit or add a product
const modal = document.querySelector('.edit-add');
const close = document.querySelector('.edit-add__close');
const btnAdd = document.querySelector('.options-up__actions button');
const opacity = document.querySelector('.opacity');

function openHandle() {
    modal.classList.add('edit-add--show');
    opacity.classList.add('opacity--show');
}
btnAdd.addEventListener('click', openHandle);

function closeHandle() {
    modal.classList.remove('edit-add--show');
    opacity.classList.remove('opacity--show');
}
close.addEventListener('click', closeHandle);




//BASE DE DATOS
const db = firebase.firestore();
const productsRef = db.collection('products');

const productsList = document.querySelector('.products');

function renderProducts (list) {
    productsList.innerHTML = '';
    list.forEach(function (elem) {
      const newProduct = document.createElement('div');
      newProduct.classList.add('products__glasses');
  
      newProduct.innerHTML = `
      <p class="products__remove">Remove</p>
      <div class="products__container">
        <img class="products__imgGlasses" src="${elem.imgUrl}" alt="" >
        <h4 class="products__title">${elem.nameProduct}</h4>
        <p class="products__price">$${elem.price}</p>
        <button class="button button--secondary">EDIT</button>
      </div>
      `;
  
      //Eliminar
      const deleteBtn = newProduct.querySelector('.products__remove');
      deleteBtn.addEventListener('click',function(){
        productsRef.doc(elem.id).delete() .then(function() {
          console.log("Document successfully deleted!");
          getProducts(); 
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
      });
  
      //Editar
      /*const editBtn = newProduct.querySelector('.product__edit');
      editBtn.addEventListener('click', function() {
        form.title.value = elem.title;
      });*/
  
      productsList.appendChild(newProduct);
    });
  }


  function getProducts(){
    productsRef.get().then((querySnapshot) => {
      const objects = [];
      querySnapshot.forEach((doc) => {
          const obj = doc.data();
          obj.id = doc.id;
          objects.push(obj);
          console.log(`${doc.id} => ${doc.data()}`);
      });
      renderProducts(objects);
    });
  }

  getProducts();


  //Agregar producto
const form = document.querySelector('.edit-add__form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const newProduct = {
    nameProduct: form.nameProduct.value,
    price: form.price.value,
    descrip: form.descrip.value,
    imgUrl: form.imgUrl.value,
    shape: form.shape.value,
    gender: form.gender.value,
    type: form.type.value,
  };

  productsRef.add(newProduct) .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      getProducts();
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
});


