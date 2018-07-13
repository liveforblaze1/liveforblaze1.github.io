window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (document.documentElement.scrollTop == 0) {
    document.getElementById('navbar').style.background = "#1d232c"
  } else {
    document.getElementById('navbar').style.background = "rgba(29,35,44, 0.5)"
  }
}
