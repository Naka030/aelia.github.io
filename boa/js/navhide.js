function getElementDistanceToTop(element) {
  var rect = element.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}

window.addEventListener('scroll', function() {
  var elementToHide1 = document.getElementById('colorlib-aside');
  var elementToHide2 = document.getElementById('navbutton');
  var triggerElement = document.getElementById('hidestart');
  var triggerDistanceToTop = getElementDistanceToTop(triggerElement);
  var scrollPosition = window.scrollY;

  if (scrollPosition > triggerDistanceToTop) {
    elementToHide1.classList.add('hidden');
    elementToHide2.classList.add('hidden');
  } else {
    elementToHide1.classList.remove('hidden');
    elementToHide2.classList.remove('hidden');
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });

  $('#toTopBtn').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});