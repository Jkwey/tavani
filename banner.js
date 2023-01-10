
$(function () {

  var winW = $(".mainviewcont").outerWidth(),
    target = $('.main_visual .visual'),
    target2 = $('.main_visual .visual_view'),
    textBox = target.find('.text_wrap'),
    length = 4,//박스 갯수
    idx = 0,
    css = [],
    ease = "easeInOutQuint",
    time = 1000;

  target2.find('.viewbg_wrap').each(function (e) {
    css.push({ 'width': 100 / length + '%', 'left': e * (100 / length) + '%', 'left2': -e * 100 + '%' });
    $(this).css({ 'width': css[e].width, 'left': css[e].left })
      .find('.viewbg').css({ 'width': winW, 'left': css[e].left2 });
  });

  target.find('>a').on("mouseenter", function () {
    idx = $(this).index();
    $(this).addClass('on').siblings().addClass('off');
    $('.main_visual .visual_view .viewbg_wrap').eq(idx).addClass('hover')
      .stop().animate({ 'left': '0', 'width': '100%' }, time, ease)
      .find('.viewbg').stop().animate({ 'left': 0 }, time, ease);
  });

  target.find('>a').on("mouseleave", function () {
    idx = $(this).index();
    $(this).removeClass('on').siblings().removeClass('off');
    $('.main_visual .visual_view .viewbg_wrap').eq(idx).removeClass('hover').stop().css({ 'width': css[idx].width, 'left': css[idx].left })
      .find('.viewbg').stop().css({ 'left': css[idx].left2 });
  });

});