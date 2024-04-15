// アコーディオン
$(".question").on("click", function () {
  var findElm = $(this).next(".answer_box");
  $(findElm).slideToggle();
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

$(".button").click(function (event) {
  event.stopPropagation(); // イベントのバブリングを停止し、.button 要素以外のクリックイベントが発生しないようにします
  $(this).toggleClass("buttonopen");
  $(".nav").toggleClass("view_menu");
  $("html").removeClass("view_menu");
});

$(document).click(function (event) {
  var $target = $(event.target);
  if (!$target.closest(".nav").length && !$target.closest(".button").length) {
    // クリックされた要素が .nav 要素や .button 要素の子孫でない場合にのみ実行します
    $(".nav").removeClass("view_menu");
    $(".buttonopen").removeClass("buttonopen");
    $("html").removeClass("view_menu");
    $("html").removeClass("no-scroll");
  }
});

$(function () {
  $(".nav__list").click(function () {
    $(".view_menu").removeClass("view_menu");
    $(".buttonopen").removeClass("buttonopen");
    $("html").removeClass("no-scroll");
  });
});

const headerBtn = document.querySelector('.button_pcNav')
const headerNav = document.querySelector('.nav_pcTop')
const headerNavElements = document.querySelectorAll('.nav_pcTop li')
const body = document.body;

if (headerBtn ) {
headerBtn.addEventListener('click', function () {
  headerBtn.classList.toggle('button_pcNavopen')
  headerNav.classList.toggle('view_menu')
  body.classList.toggle('fixed')
})

for (let i = 0; i < headerNavElements.length; i++) {
  headerNavElements[i].addEventListener('click', function () {
    headerBtn.classList.remove('button_pcNavopen')
    headerNav.classList.remove('view_menu')
    body.classList.remove('fixed')
  })
}
}

$('.ac-pc').on({
  'mouseenter':function(){
      $('.ac-pc').not(this).removeClass("hover");
      //マウスカーソルが重なった時の処理
      $(this).addClass("hover");
      clearTimeout(sethover);

  },
  'mouseleave':function(){
      $object = this;
      sethover = setTimeout($.proxy(function(){
          $(this).removeClass("hover");
      } ,$object),500);
  }
});