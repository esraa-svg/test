let scrollicon = document.getElementById("scroll-icon");
window.onscroll = function() {sFunction()};

function sFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollicon.style.display = "block";
  } else {
    scrollicon.style.display = "none";
  }
}


function Scroll() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}