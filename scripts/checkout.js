const db = firebase.firestore();
const bagRef = db.collection('bag');
const checkRef = db.collection('orders');

const formCheck = document.querySelector('.checkout__pay');
const checkBtn = document.querySelector('.checkBtn');

let arrayOrders;
formCheck.addEventListener('submit', function (event) {
  event.preventDefault();

  const newOrder = {
    cardType: formCheck.cardType.value,
    cardNumber: Number(formCheck.number.value),
    fullName: formCheck.fullName.value,
    idNumber: formCheck.idNumber.value,
    address: formCheck.address.value,
    totalPrice: val.price,
    purchases: quan,
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


function getOrders() {
  bagRef.doc(userInfo.uid).get().then((doc) => {
    if (doc.exists) {
      arrayOrders = doc.data();//console.log(doc.data().products);
    }
  });
}


var val;
var quan = localStorage.getItem('quantity');


function getTotals() {
  bagRef.doc(userInfo.uid).get().then((doc) => {
    if (doc.exists) {
      val = doc.data().products.reduce(function (previousValue, currentValue) {
        return {
          price: previousValue.price + currentValue.price,
        }
      });

      quan = doc.data().products.length;
    }
  });
}
