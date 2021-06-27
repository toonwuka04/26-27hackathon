window.addEventListener('load', () => {
    var contrast = $(".contrast");
    var body = $("body");
    var nav = $("nav");
    var bttn = $(".bttn");
    var sBody = $(".sBody");
    var cSoon = $(".soon");
    var accHdr = $(".hdr");
    var cardBtn = $(".card-btn");
    var accInfo = $(".account-info");
    var sHdr = $(".hdr1");

    function swapMode() {
        body.toggleClass("whitePage");
        nav.toggleClass("whiteNav");
        contrast.toggleClass("blackContrast");
        bttn.toggleClass("navBttn");
        sBody.toggleClass("bodyContrast");
        accHdr.toggleClass("hdrBlack");
        cardBtn.toggleClass("cardBtnWhite");
        console.log("mode swaped");
        cSoon.toggleClass("soonBlack");
        accInfo.toggleClass("accInfoB");
        sHdr.toggleClass("hdrBlack");
    }
    contrast.on("click", swapMode);
    
    
});

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};


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

