const db = firebase.firestore();
const ordersRef = db.collection('orders');

const ordersList = document.querySelector('.orders__container');

function renderOrders(list) {
    ordersList.innerHTML = '';
    list.forEach(function (elem, i) {
        const newOrderItem = document.createElement('section');
        newOrderItem.classList.add('orders__item');

        newOrderItem.innerHTML = `
            <div class="orders__info">
                <h4>Order by:</h4>
                <p class="orders__buyersName">${elem.fullName}</p>
            </div>
            <div class="orders__info">
                <p class="orders__numberP"><strong>Purchases:</strong> ${elem.purchases}</p>
                <p class="orders__totalP"><strong>Total:</strong> $${elem.totalPrice}</p>
            </div>
            <div class="orders__info">
                <h4>Address:</h4>
                <p class="orders__theAdress">${elem.address}</p>
            </div>
              `;

        ordersList.appendChild(newOrderItem);
    });
}

let orderList = [];
function getOrdersInfo() {
    ordersRef.get().then((querySnapshot) => {
        orderList = [];
        querySnapshot.forEach((doc) => {
            const obj = doc.data().ordersInfo;
            orderList.push(obj);
            console.log(`${doc.id} => ${doc.data().ordersInfo}`);
        });
        renderOrders(orderList);
    });
}

getOrdersInfo();