window.addEventListener('load', () => {
  $(window).scroll(function () {
    $(this).scrollTop()>350?$('#LogoBar').addClass('fixed bg-gray-900 top-0 z-50') : $('#LogoBar').removeClass('fixed bg-gray-900 top-0 z-50')
  });
  $.each($(document.querySelectorAll('svg')), function (index, element) {
    $(element).mouseover(function () {
      let percent = $(this).attr('percent')
      let dashoffset = 346
      $(element.firstElementChild.nextElementSibling).animate({
        strokeDashoffset: dashoffset - (percent * dashoffset / 100),
      }, {
        duration: 1000,
        queue: false
      })
      let i = 0;
      let count = setInterval(() => {
        if (i <= percent) {
          $(element.lastElementChild.previousElementSibling).text(i + "%");
          i++
        } else {
          clearInterval(count)
          $(element.lastElementChild.previousElementSibling).text(percent + "%");
        }
      }, Math.round(1000 / percent));
    });
  });
}) 