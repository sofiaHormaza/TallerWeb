const db = firebase.firestore();
const usersRef = db.collection('users');

const register = document.querySelector('.register__info');

register.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = register.email.value;
    const password = register.password.value;
    const passwordC = register.passwordC.value;
    const username = register.username.value;

    if (password === passwordC){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (credentials) {

            const uid = credentials.user.uid;

            usersRef.doc(uid).set({
                username: username,
                email: email,
            })
                .then(function () {
                    window.location.href = '../index.html';
                });

        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
        });
    } else {
        alert ("Passwords don't match");
    }
});