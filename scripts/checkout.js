const db = firebase.firestore();
const bagRef = db.collection('bag');
const checkRef = db.collection('orders');

const formCheck = document.querySelector('.checkout__pay');
const checkBtn = document.querySelector('.checkBtn');

checkList = [];
let arrayOrders;
formCheck.addEventListener('submit', function(event){
    event.preventDefault();

    const newOrder = {
        cardType: formCheck.cardType.value,
        cardNumber: Number(formCheck.number.value),
        fullName: formCheck.fullName.value,
        idNumber: formCheck.idNumber.value,
        address: formCheck.address.value,
      };

      
      checkList2 = {
        ordersInfo: newOrder,
        orders: arrayOrders,
      }
      
      //arrayOrders.push();
      checkRef.add(checkList2).then().catch(function (error) {
        console.error("Error adding document: ", error);
      });
})

function getBagCheck() {
    checkRef
      .doc(userInfo.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          checkList = doc.data().orders;
        }
      }).catch(function (error) {
        console.log("Error: ", error);
      });
  }

function getOrders(){
    bagRef.doc(userInfo.uid).get().then((doc) => {
        if(doc.exists){
            doc.data().products.forEach (function (item) {
                arrayOrders=doc.data();//console.log(doc.data().products);
            });
        }
      });
}
