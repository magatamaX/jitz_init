'use strict';

(function () {
  var elm = document.querySelector('.slides');
  var elm1 = elm.firstElementChild;
  var elm1Clone = elm1.cloneNode(true);
  var elm5 = elm.lastElementChild;
  var div = document.createElement('div');
  div.classList.add('absbox');
  var absbox = elm5.appendChild(div);
  absbox.appendChild(elm1Clone);
})();