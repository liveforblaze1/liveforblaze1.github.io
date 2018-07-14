//Navbar scroll
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (document.documentElement.scrollTop == 0) {
    document.getElementById('navbar').style.background = "#1d232c"
  } else {
    document.getElementById('navbar').style.background = "rgba(29,35,44, 0.5)"
  }
}



//onClick show block
function removeBlock(a) {
  switch (a) {
    case 2:
      var block = document.getElementById(`b1`);
      var block2 = document.getElementById(`b2`);
      block.className += " box-remove";
      block2.style.display = "flex";
      setTimeout(function() {block2.className = "firstScreen-box-apear"; }, 500);
      setTimeout(function() {block.style.display = "none" }, 500);

      var but = document.getElementById(`but1`);
      but.className = "first-block";
      var but2 = document.getElementById(`but2`);
      but2.className += " selected";

      break;
    case 1:
      var block = document.getElementById(`b2`);
      var block2 = document.getElementById(`b1`);
      block.className += " box-remove";
      block2.style.display = "flex";
      setTimeout(function() {block2.className = "firstScreen-box-apear"; }, 500);
      setTimeout(function() {block.style.display = "none" }, 500);

      var but = document.getElementById(`but2`);
      but.className = "first-block";
      var but2 = document.getElementById(`but1`);
      but2.className += " selected";

      break;
    default:

  }
}
