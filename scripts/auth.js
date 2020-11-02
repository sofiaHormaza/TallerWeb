const auth = document.querySelector('.header__user');
const authSignout = document.querySelector('.profile__container button');
userName = document.querySelector('.profile__usernameB');
userName2 = document.querySelector('.profile__username');
emailP = document.querySelector('.profile__email');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        const loader = document.querySelector('.loader');
        if (window.location.href.indexOf("index") > -1) {
            auth.href = './Html/profile.html';
        } else {
            auth.href = './profile.html';
            loader.classList.add('loader--show');
        }

        if (userName) {
            const db = firebase.firestore();
            const usersRef = db.collection('users');
            usersRef.doc(user.uid).get().then(function (doc) {
              if(doc.exists) {
                const data = doc.data();
                userName.innerText = data.username + '!';
                userName2.innerText = data.username;
                emailP.innerText = data.email;
                loader.classList.remove('loader--show');
              }
            });
        }
    } else {
        if (window.location.href.indexOf("index") > -1) {
            auth.href = './Html/login.html';
        } else {
            auth.href = './login.html';
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
