var facebook_min = "../data/png/facebook_min.png";
var facebook_pre = "../data/png/facebook_pre.png";
var facebook_res = "../data/png/facebook_res.png";
var google_min = "../data/png/google_min.png";
var google_pre = "../data/png/google_pre.png";
var google_res = "../data/png/google_res.png";
var apple_min = "../data/png/apple_min.png";
var apple_pre = "../data/png/apple_pre.png";
var apple_res = "../data/png/apple_res.png";

var facebookObj = document.getElementById("facebook_image");
var googleObj = document.getElementById("google_image");
var appleObj = document.getElementById("apple_image");
var facebookTitle = document.getElementById("facebook_title");
var googleTitle = document.getElementById("google_title");
var appleTitle = document.getElementById("apple_title");

$("#option-three").click(function(){
    facebookObj.src = facebook_res;
    googleObj.src = google_res;
    appleObj.src = apple_res;
    facebookTitle.innerHTML = "Responsibilities";
    googleTitle.innerHTML = "Responsibilities";
    appleTitle.innerHTML = "Responsibilities";
})
$("#option-two").click(function(){
    facebookObj.src = facebook_pre;
    googleObj.src = google_pre;
    appleObj.src = apple_pre;
    facebookTitle.innerHTML = "Preferred Quality";
    googleTitle.innerHTML = "Preferred Quality";
    appleTitle.innerHTML = "Preferred Quality";
})
$("#option-one").click(function(){
    facebookObj.src = facebook_min;
    googleObj.src = google_min;
    appleObj.src = apple_min;
    facebookTitle.innerHTML = "Minimum Quality";
    googleTitle.innerHTML = "Minimum Quality";
    appleTitle.innerHTML = "Minimum Quality";
})