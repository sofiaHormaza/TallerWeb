const auth = document.querySelector('.header__user');
const bag = document.querySelector('.header__shop');
const authSignout = document.querySelector('.profile__container button');
const authBurger = document.querySelector('.burger-menu__profile');
const numberBag = document.querySelector('.purchases__quantity');
userName = document.querySelector('.profile__usernameB');
userName2 = document.querySelector('.profile__username');
emailP = document.querySelector('.profile__email');

var userInfo;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        const loader = document.querySelector('.loader');
        if (window.location.href.indexOf("Html") > -1) {
            auth.href = './profile.html';
            authBurger.href = './profile.html';
            bag.href = './bag.html';
            loader.classList.add('loader--show');
        } else {
            auth.href = './Html/profile.html';
            authBurger.href = './Html/profile.html';
            bag.href = './Html/bag.html';
        }

        const db = firebase.firestore();
        const usersRef = db.collection('users');
        usersRef.doc(user.uid).get().then(function (doc) {
            if (doc.exists) {
                const data = doc.data();
                userInfo = data;
                userInfo.uid = user.uid;

                  if(window.getBagProducts){
                    getBagProducts ();
                    getNumberItems();
                  }
                  
                  if(window.getOrders){
                    getOrders();
                  }

                  if(window.getTotals){
                    getTotals();
                  }

                  if(window.getDelete){
                    const checkBtn = document.querySelector('.checkBtn');
                    const success = document.querySelector('.success');
                    const checkEnd = document.querySelector('.success');
                    checkBtn.addEventListener('click', function(){
                        getDelete();
                        success.classList.add('success--showS');
                    });
                    checkEnd.addEventListener('click', function(){
                        success.classList.remove('success--showS');
                      })
                  }

                //Mostrar las opciones del admin
                if (data.admin) {
                    const showAdmin = document.querySelectorAll('.showAdmin');
                    const hideAdmin = document.querySelectorAll('.hideAdmin');
                    showAdmin.forEach(function (elem) {
                        elem.classList.remove('hidden');
                    })
                    hideAdmin.forEach(function (elem) {
                        elem.classList.add('hidden');
                    })
                }

                //Mostrar info del perfil
                if (userName) {
                    userName.innerText = data.username + '!';
                    userName2.innerText = data.username;
                    emailP.innerText = data.email;
                    loader.classList.remove('loader--show');
                }
            }
        });

    } else {
        if (window.location.href.indexOf("Html") > -1) {
            auth.href = './login.html';
            authBurger.href = './login.html';
            bag.href = './login.html';
        } else {
            auth.href = './Html/login.html';
            authBurger.href = './Html/login.html';
            bag.href = './Html/login.html';
        }
    }
});

// cerrar sesión
if (authSignout) {
    authSignout.addEventListener('click', function (event) {
        event.preventDefault();
        firebase.auth().signOut();
        window.location.href = '../index.html';
    });
}
