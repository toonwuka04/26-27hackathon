window.addEventListener('load', () => {
    var contrast = $(".contrast");
    var body = $("body");
    var nav = $("nav");
    var bttn = $(".bttn");
    var sBody = $(".sBody")
    var cSoon = $(".soon");
    function swapMode() {
        body.toggleClass("whitePage");
        nav.toggleClass("whiteNav");
        contrast.toggleClass("blackContrast");
        bttn.toggleClass("navBttn");
        sBody.toggleClass("bodyContrast")
        console.log("mode swaped");
        cSoon.toggleClass("soonBlack");
    }
    contrast.on("click", swapMode);
    
    
});


var firebaseConfig = {
    apiKey: "AIzaSyDf6tFHX8jPB-iTcfXNT_ZxpB2JMntOgOw",
    authDomain: "gameportalform.firebaseapp.com",
    projectId: "gameportalform",
    storageBucket: "gameportalform.appspot.com",
    messagingSenderId: "854470042025",
    appId: "1:854470042025:web:d029e1820910f56aae24b8",
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var email = "test@gmail.com";
var pass = "secure";


const auth = firebase.auth();
function signIn() {
    
  console.log(auth)
  var email = "test@gmail.com";
  var pass = "secure";
  auth.signInWithEmailAndPassword(email, pass)
  .then(<h1>hi</h1>)
  .catch(error => {
   <p>error</p>
  });
  const promise = auth.signInWithEmailandPassowrd(email, pass);
  alert("Signed in "+ email);
}
