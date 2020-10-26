var tl = new TimelineLite(); 
tl.staggerFrom(".topics", 3, {
  css:{transform:"scale(0)",top:"60%",left:"50%"},ease:Elastic.easeOut
}, 0.3);

var js = document.getElementById("js");
var sass = document.getElementById("sass");
var php = document.getElementById("php");
var css3 = document.getElementById("css3");
var hmtl5 = document.getElementById("html5");
var topics = document.getElementsByClassName("topics");