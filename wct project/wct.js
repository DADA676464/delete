window.onscroll = function() {
  handleNavbar();
};

function handleNavbar() {
  var navbar = document.getElementById("navbar");
  var section1 = document.getElementById("section1");
  var distance = section1.getBoundingClientRect().bottom;

  if (distance < 0) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
}
