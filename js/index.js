
(function () {
  const $lis = $('.content .content-right ul>li')
  $lis.on('mouseover',function () {
    $(this).children('ul').addClass('on').css('top', $(this).index() * -42)
  }).on('mouseout',function () {
    $(this).children('ul').removeClass('on')
  })
})()