window.addEventListener('load', function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            /*const bagButton = document.querySelectorAll('.product__addShop');
            const userID = user.uid;
            console.log(userID);

            const db = firebase.firestore();
            const bagRef = db.collection('bag');
            
            const productsRef = db.collection('products');
            var storageRef = firebase.storage().ref();

            //newProduct tiene que ser un arreglo
            //bagRef.doc(userID).set(newProduct);
            //product__addShop 

            bagButton.forEach(function(item, index){
                item.addEventListener('click', function(){
                    alert('hola');
                })
            })

            productsRef.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  console.log(`${doc.id} => ${doc.data()}`);
                });
              });*/
        }
    });
});