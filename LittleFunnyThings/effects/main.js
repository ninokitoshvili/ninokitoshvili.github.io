$(document).ready(function() {
  $("img").each(function(i) {
    $(this).attr("id", "img-" + (i + 1));
  });

  $("#animate-out").click(function() {
    $("#img-1").animate(
      {
        width: "70%",
        height: "70%",
        opacity: 0.4
      },
      1500
    );
  });

  $("#animate-in").click(function() {
    $("#img-1").animate(
      {
        width: "100%",
        height: "100%",
        opacity: 1.0
      },
      1500
    );
  });

  $("#fade-in").click(function() {
    $("#img-2").fadeIn("slow", function() {
      $(".log").text("Fade In Transition Complete");
    });
  });

  $("#fade-out").click(function() {
    $("#img-2").fadeOut("slow", function() {
      $(".log").text("Fade Out Transition Complete");
    });
  });

  $("#show").click(function() {
    $("#img-3").show(100);
  });

  $("#hide").click(function() {
    $("#img-3").hide(100);
  });

  $("#down").click(function() {
    $("#img-4").slideDown("slow", function() {
      $(".log").text("Slide Down Transition Complete");
    });
  });

  $("#up").click(function() {
    $("#img-4").slideUp("slow", function() {
      $(".log").text("Slide Up Transition Complete");
    });
  });

  $("#toggle").click(function() {
    $("#img-4").slideToggle("slow", function() {
      $(".log").text("Toggle Transition Complete");
    });
  });

  $("#go").click(function() {
    $("#img-5").animate({ width: "+=50px" }, 1000);
  });

  $("#stop").click(function() {
    $("#img-5").stop();
  });

  $("#back").click(function() {
    $("#img-5").animate({ width: "-=50px" }, 1000);
  });

  $("#false").click(function() {
    $("#img-6").toggle(false);
  });

  $("#true").click(function() {
    $("#img-6").toggle(true);
  });

  $("#enable").click(function() {
    jQuery.fx.off = false;
  });

  $("#disable").click(function() {
    jQuery.fx.off = true;
  });

  $("#go-animation").click(function() {
    $("#img-7").animate({ width: "+=30px" }, 1000);
  });

  $("#back-animation").click(function() {
    $("#img-7").animate({ width: "-=30px" }, 1000);
  });

  $("#hide-blind").click(function() {
    $("#img-8").hide("blind", { direction: "horizontal" }, 1000);
  });

  $("#show-blind").click(function() {
    $("#img-8").show("blind", { direction: "horizontal" }, 1000);
  });

  $("#bounce").click(function() {
    $("#img-9").effect("bounce", { times: 3 }, 300);
  });

  $("#hide-central").click(function() {
    $("#img-10").hide("clip", { direction: "horizontal" }, 1000);
  });

  $("#show-central").click(function() {
    $("#img-10").show("clip", { direction: "vertical" }, 1000);
  });

  $("#hide-drop").click(function() {
    $("#img-11").hide("drop", { direction: "up" }, 1000);
  });

  $("#show-drop").click(function() {
    $("#img-11").show("drop", { direction: "down" }, 1000);
  });

  $("#hide-explode").click(function() {
    $("#img-12").hide("explode", { pieces: 16 }, 2000);
  });

  $("#show-explode").click(function() {
    $("#img-12").show("explode", { pieces: 16 }, 2000);
  });

  $("#hide-fold").click(function() {
    $("#img-13").hide("fold", { horizFirst: true }, 2000);
  });

  $("#show-fold").click(function() {
    $("#img-13").show("fold", { horizFirst: true }, 2000);
  });

  $("#highlight").click(function() {
    $("#img-14").effect("highlight", { color: "#669966" }, 3000);
  });

  $("#hide-puff").click(function() {
    $("#img-15").hide("puff", { percent: 100 }, 2000);
  });

  $("#show-puff").click(function() {
    $("#img-15").show("puff", { percent: 100 }, 2000);
  });

  $("#pulsate").click(function() {
    $("#img-16").effect("pulsate", { times: 5 }, 3000);
  });

  $("#scale-hide").click(function() {
    $("#img-17").hide("scale", { percent: 200, direction: "horizontal" }, 2000);
  });

  $("#scale-show").click(function() {
    $("#img-17").show("scale", { percent: 200, direction: "vertical" }, 2000);
  });

  $("#shake").click(function() {
    $("#img-18").effect("shake", { times: 4 }, 1000);
  });

  $("#big").click(function() {
    $("#img-19").effect("size", { to: { width: 200, height: 200 } }, 1000);
  });

  $("#small").click(function() {
    $("#img-19").effect("size", { to: { width: 10, height: 10 } }, 1000);
  });

  $("#slide-hide").click(function() {
    $("#img-20").hide("slide", { direction: "down" }, 2000);
  });

  $("#slide-show").click(function() {
    $("#img-20").show("slide", { direction: "up" }, 2000);
  });

  var lgn = $("div[name='transfordiv']").length;

  $("div[name='transfordiv']").click(function() {
    var i = 1 - $("div[name='transfordiv']").index(this);
    $(this).effect("transfer", { to: $("div[name='transfordiv']").eq(i) }, 500);
  });

  $("div[name='transfordiv1']").click(function() {
    console.log("div 1");
    $("div[name='transfordiv1']").effect(
      "transfer",
      { to: $("div[name='transfordiv2']") },
      1000
    );
  });
  $("div[name='transfordiv2']").click(function() {
    console.log("div 2");
    $("div[name='transfordiv2']").effect(
      "transfer",
      { to: $("div[name='transfordiv1']") },
      1000
    );
  });
});
