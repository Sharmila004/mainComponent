// about section
$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});

// rest section
function isVisible(el, plus, wrapper = window) {
  var winFromTop = jQuery(wrapper).scrollTop();
  var currentPosition = winFromTop + jQuery(wrapper).height();

  var el = jQuery(`${el}`);
  var elFromTop = el.length
    ? jQuery(el[0]).offset().top
    : jQuery(el).offset().top;

  return currentPosition + plus > elFromTop;
}

jQuery(window).scroll(function (e) {
  var idElement = ".anime";
  const visible = isVisible(idElement, -20);
  if (visible) {
    console.log("=> ", idElement);
    jQuery(idElement).addClass("resetX");
  } else {
    jQuery(idElement).removeClass("resetX");
  }
});
