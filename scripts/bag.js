const db = firebase.firestore();
const bagRef = db.collection('bag');
var storageRef = firebase.storage().ref();

const productsBagList = document.querySelector('.purchases__container');

function renderBagProducts(list) {
  productsBagList.innerHTML = '';
  list.forEach(function (elem, i) {
    const newBagProduct = document.createElement('section');
    newBagProduct.classList.add('purchases__item');

    newBagProduct.innerHTML = `
            <div class="purchases__imageC">
                <img src="" alt="" class="purchases__image">
            </div>
            <div class="purchases__info">
                <p class="purchases__name">${elem.nameProduct}</p>
                <p class="purchases__price"><strong>Price:</strong> $${elem.price}</p>
                <p class="purchases__remove">Remove</p>
            </div>
            `;

    //Mostrar imagen
    storageRef.child(elem.image).getDownloadURL().then(function (url) {
      var img = newBagProduct.querySelector('img');
      img.src = url;
    }).catch(function (error) {
      // Handle any errors
    });

    //Prueba
    bagRef.doc(userInfo.uid).get().then((doc) => {
      if (doc.exists) {
        //console.log(doc.data().products);
        var val = doc.data().products.reduce(function (previousValue, currentValue) {
          return {
            price: previousValue.price + currentValue.price,
          }
        });

        document.querySelector('.purchases__total').innerHTML = `<strong>Total: </strong>$${val.price}`;
      }
    });

    //Delete
    const deleteButton = newBagProduct.querySelector('.purchases__remove');
    deleteButton.addEventListener('click', function () {
      /*bagRef.doc(userInfo.uid).delete().then(function () {
        console.log("Document successfully deleted!");
        getBagProducts();
      })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });*/

      bagRef.doc(userInfo.uid).get().then((doc) => {
        if (doc.exists) {
          doc.data().products.then(function () {
            console.log("Document successfully deleted!");
            getBagProducts();
          });
        }
      });
    });

    productsBagList.appendChild(newBagProduct);
    const loader = document.querySelector('.loader');
    loader.classList.remove('loader--show');
  });
}

let bagList = [];
function getBagProducts() {
  bagRef.doc(userInfo.uid).get().then((doc) => {
    bagList = [];
    if (doc.exists) {
      doc.data().products.forEach(function (item) {
        bagList.push(item);
      });
    }

    renderBagProducts(bagList);
  });
}

function getNumberItems() {
  bagRef.doc(userInfo.uid).get().then((doc) => {
    if (doc.exists) {
      numberBag.innerHTML = `<strong>Products on the bag: </strong>${doc.data().products.length}`;
      localStorage.setItem('quantity', doc.data().products.length);
    }

  });
}
