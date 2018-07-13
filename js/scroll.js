//Navbar scroll
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (document.documentElement.scrollTop == 0) {
    document.getElementById('navbar').style.background = "#1d232c"
  } else {
    document.getElementById('navbar').style.background = "rgba(29,35,44, 0.5)"
  }
}


//Hide block onkeypress
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "Escape":
      var block = document.getElementById('block');
      console.log("HideBlock");
      block.className = "block";
      setTimeout(function() { block.style.display = "flex"}, 300);
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

//Hide block onClick outside
window.onload = function () {
    document.body.onclick = function (e) {
        e = e || event;
        target = e.target || e.srcElement;
        if (target.id == "block" || target.id == "block-child" || target.id == "block-child2") {

        } else {
              var block = document.getElementById('block');
              console.log("HideBlock");
              block.className = "block";
              setTimeout(function() { block.style.display = "flex"}, 300);
        }
    }
}

function showBlock() {
  var block = document.getElementById('block');
  console.log("ShowBlock");
  block.style.display = "flex";
  setTimeout(function() { block.className += " animatedBlock" }, 300);
}

function hideBlock() {
  var block = document.getElementById('block');
  console.log("HideBlock");
  block.className = "block";
  setTimeout(function() { block.style.display = "flex"}, 300);
}
