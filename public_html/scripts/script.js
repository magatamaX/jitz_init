'use strict';

// トップスライダー
(function () {

  if (document.getElementById('top-page')) {

    var elm = document.getElementById('main-slide').querySelector('.slides');
    var elm1 = elm.firstElementChild;
    var elm1Clone = elm1.cloneNode(true);
    var elm5 = elm.lastElementChild;
    var ul = document.createElement('ul');
    ul.classList.add('absbox');
    var absbox = elm5.appendChild(ul);
    absbox.appendChild(elm1Clone);

    var slides = elm.children;
    console.log(slides);
    console.log(slides.length);

    var n = 0;

    elm.addEventListener("transitionend", function (e) {

      console.log('アニメーション終わりました');
      console.log(n);
      console.log(slides.length);

      if (n < slides.length - 1) {
        n++;
      } else {
        elm.classList.remove('sld0');
        elm.classList.remove('sld1');
        elm.classList.remove('sld2');
        elm.classList.remove('sld3');
        elm.classList.remove('sld4');
        n = 0;
      }

      elm.classList.add('sld' + n);
    });

    window.addEventListener('load', function () {
      elm.classList.add('sld0');
    });
  }
})();
// スティッキーヘッダ
(function () {

  var targetElement = document.querySelector('.header-contents');
  var hHeight = targetElement.clientHeight;
  var raisingHeight = document.getElementById('header').querySelector('.top').clientHeight;
  var toFixedPoint = targetElement.getBoundingClientRect().top + window.pageYOffset;
  var pageNaviInner = document.getElementById('page-navi').querySelectorAll('.page-navi-inner-wrap');
  var staticScrollTop = document.documentElement.scrollTop;
  window.addEventListener('load', function () {

    for (var i = 0; i < pageNaviInner.length; i++) {
      pageNaviInner[i].style.top = hHeight + (raisingHeight - staticScrollTop) + 'px';
    }
  });
  window.addEventListener('scroll', function () {

    var scrollTop = document.documentElement.scrollTop;

    if (scrollTop >= toFixedPoint) {
      // ヘッダーコンテンツがFixedになるとき
      targetElement.classList.add('fixed');
      document.getElementById('contents').style.paddingTop = hHeight + 'px';
      for (var i = 0; i < pageNaviInner.length; i++) {
        pageNaviInner[i].style.top = hHeight + 'px';
      }
    } else {
      // ヘッダーコンテンツがStaticなとき
      targetElement.classList.remove('fixed');
      document.getElementById('contents').style.paddingTop = '0px';
      for (var _i = 0; _i < pageNaviInner.length; _i++) {
        pageNaviInner[_i].style.top = hHeight + (raisingHeight - scrollTop) + 'px';
      }
    }
  });
})();
// ヘッダメニューのホバー表示
(function () {

  var targetElement = document.getElementById('page-navi');
  var hoveringTargets = targetElement.querySelectorAll(':scope > ul > li');

  console.log(hoveringTargets);

  for (var i = 0; i < hoveringTargets.length; i++) {
    hoveringTargets[i].addEventListener('mouseover', function () {
      this.classList.add('hover');
    });
    hoveringTargets[i].addEventListener('mouseout', function () {
      this.classList.remove('hover');
    });
  }
})();