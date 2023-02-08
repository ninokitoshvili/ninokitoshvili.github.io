$("#show > div:gt(0)").hide();

setInterval(function() {
  $("#show > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#show");
}, 3000);
