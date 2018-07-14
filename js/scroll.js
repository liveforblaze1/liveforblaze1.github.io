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
      var block1= document.getElementById('block1');
      block1.className = "block";
      var block2= document.getElementById('block2');
      block2.className = "block";
    //  setTimeout(function() { block.style.display = "flex"}, 300);
      var b1 = document.getElementById('b1');
      var b2 = document.getElementById('b2');
      var b3 = document.getElementById('b3');
      b1.className = "first-block";
      b2.className = "first-block";
      b3.className = "first-block";
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
        if (target.id == "block1" || target.id == "block2" || target.id == "block-child" || target.id == "block-child2") {

        } else {
              var block1 = document.getElementById('block1');
              block1.className = "block";
              var block2 = document.getElementById('block2');
              block2.className = "block";
              var b1 = document.getElementById('b1');
              var b2 = document.getElementById('b2');
              var b3 = document.getElementById('b3');
              b1.className = "first-block";
              b2.className = "first-block";
              b3.className = "first-block";
        }
    }
}

//onClick show block
function showBlock(a) {
  var block = document.getElementById(`block${a}`);
  console.log(block);
  block.style.display = "flex";
  setTimeout(function() { block.className += " animatedBlock" }, 300);

  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  setTimeout(function() {
    b1.className += " firstScreen-hide";
    b2.className += " firstScreen-hide";
    b3.className += " firstScreen-hide";
  }, 300);
}
