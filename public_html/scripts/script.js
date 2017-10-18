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

  elm.addEventListener("transitionend", function (e) {
    console.log(e);
    // alert('animation--End!');
    // elm.classList.add('trs01');
    elm.classList.add('sld02');
  });

  window.onload = function () {
    elm.classList.add('sld01');
  };
})();