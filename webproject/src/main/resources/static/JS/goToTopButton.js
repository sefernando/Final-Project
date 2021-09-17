//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 340px from the top of the document, show the button
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (/*document.body.scrollTop > 20 ||*/ document.documentElement.scrollTop > 340) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  //document.body.scrollTop = 0;
  document.documentElement.scrollTop = 120;
}