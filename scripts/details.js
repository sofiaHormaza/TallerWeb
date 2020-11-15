let bagProducts = [];

window.addEventListener('load', function () {

    const parts = location.search.split('-');

    const uid = parts[0].replace('?', '');

    const db = firebase.firestore();

    const productsRef = db.collection('products');
    const bagRef = db.collection('bag');
    var storageRef = firebase.storage().ref();
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--show');

    productsRef.doc(uid).get().then(function (snapshot) {

        const product = snapshot.data();
        const img1 = document.querySelector('.details__thumb1');
        const img2 = document.querySelector('.details__thumb2');
        const img3 = document.querySelector('.details__thumb3');
        const mainImage = document.querySelector('.details__image');
        const thumbs = document.querySelectorAll('.details__thumbs img');

        if (product.storageImgs && product.storageImgs.length > 0) {
            storageRef.child(product.storageImgs[0]).getDownloadURL().then(function (url) {
                img1.src = url;
                mainImage.src = url;
                loader.classList.remove('loader--show');
            }).catch(function (error) {
                // Handle any errors
            });

            storageRef.child(product.storageImgs[1]).getDownloadURL().then(function (url) {
                img2.src = url;
            }).catch(function (error) {
                // Handle any errors
            });

            storageRef.child(product.storageImgs[2]).getDownloadURL().then(function (url) {
                img3.src = url;
            }).catch(function (error) {
                // Handle any errors
            });
        }

        function galleryHandle(event) {
            const src = event.target.getAttribute('src');
            mainImage.setAttribute('src', src);
        }

        thumbs.forEach(function (elem, index) {
            elem.addEventListener('click', galleryHandle);
        });

        document.querySelector('.details__title').innerText = product.nameProduct;
        document.querySelector('.details__price').innerText = '$' + product.price;
        document.querySelector('.details__text').innerText = product.descrip;

        const shopDetailsBtn = document.querySelector('.detailsBag');

        shopDetailsBtn.addEventListener('click', function () {
            if (userInfo) {
                getBag();
            }
        });

        function bagList(aList) {
            let bagProductsArray = aList;
            if (userInfo) {
              const newBagProducts = {
                nameProduct: product.nameProduct,
                price: Number(product.price),
                image: product.storageImgs[0],
              }
      
              bagProductsArray.push(newBagProducts);
      
              aList2 = {
                products: bagProductsArray,
              }
      
              bagRef.doc(userInfo.uid).set(aList2).catch(function (error) {
                console.error("Error adding document: ", error);
              });
            }
          }

          function getBag() {
            bagRef
              .doc(userInfo.uid)
              .get()
              .then((doc) => {
                if (doc.exists && doc.data().products != undefined) {
                  bagProducts = doc.data().products;
                  aList2= doc.data().products;
                  bagList(bagProducts);
                }else if(doc.exists && doc.data().products ==undefined){
                  bagList(bagProducts);
                }else if(!doc.exists){
                  bagList(bagProducts);
                }
              }).catch(function (error) {
                console.log("Error: ", error);
              });
          }
    })

});
