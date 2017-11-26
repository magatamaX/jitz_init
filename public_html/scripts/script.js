'use strict';

(function () {
  var elm = document.querySelector('.slides');
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

  window.onload = function () {
    elm.classList.add('sld0');
  };
})();