var firebaseConfig = {
  apiKey: "AIzaSyDAi0Opay4_rqusVyQ8b1fpO4NbunSVGZk",
  authDomain: "multi-currency-wallet-6bdae.firebaseapp.com",
  databaseURL: "https://multi-currency-wallet-6bdae.firebaseio.com",
  projectId: "multi-currency-wallet-6bdae",
  storageBucket: "multi-currency-wallet-6bdae.appspot.com",
  messagingSenderId: "515387257159",
  appId: "1:515387257159:web:443822f8fe6d2235db9c62",
  measurementId: "G-BRT0RL7TYG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



//firebase.auth.Auth.Persistence.LOCAL;

$("#btn-logout").click(function() {
  firebase.auth().signOut();
});


//------------------------------------------------------------------Disable submitting form---------------------------------------------------------------------------//
$("form").submit(function(e){
  e.preventDefault();
});





//------------------------------------------------------------------User Login Authentication---------------------------------------------------------------------------//
$("#btn-login").click(function() {
  var email = $("#email").val();
  var password = $("#password").val();

  if (email != "" && password != "") {
    var result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(function(error) {
      if (!error) {
        window.location.href = "../mcw-user/dashboard.html";
      }
      else {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        window.alert("Message : " + errorMessage);
      }
    });
  } else {
    window.alert("Please fill out all fields.");
  }
});




//------------------------------------------------------------------User Signup detalis database---------------------------------------------------------------------------//
$("#btn-signup").click(function() {
  var name = $("#fName").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var confirmPassword = $("#confirm-password").val();

  if (name != "" && email != "" && password != "" && confirmPassword != "") {
    if (password === confirmPassword) {
      var result = firebase.auth().createUserWithEmailAndPassword(email, password);

      result.catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        window.alert("Message :" + error);
      });
    } else {
      window.alert("Password do not match!");
    }
  } else {
    window.alert("Please fill out all filelds!");
  }
});


//------------------------------------------------------------------User personal data save into database after sign up---------------------------------------------------------------------------//






//------------------------------------------------------------------User Password reset---------------------------------------------------------------------------//
$("#btn-resetPassword").click(function() {
  var auth = firebase.auth();
  var email = $("#email").val();

  if (email != "") {
      auth.sendPasswordResetEmail(email).then(function() {
        window.alert("Emaiil has been sent to you, Please check and verify.");
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        window.alert("Message :" + errorMessage);
      });
} else {
  window.alert("Please write your email first.");
}
});
