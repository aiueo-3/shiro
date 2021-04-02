function menu_toggle(){
  var button = document.getElementById('hamburger');
  var close = document.getElementsByClassName('hamburger_line');
  var menu = document.getElementById('menu');

  button.addEventListener('click',function(){
    for(var i=0; i<close.length; i++){
      close[i].classList.toggle('close');
    }
    menu.classList.toggle('close');
  });
}menu_toggle();

$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});