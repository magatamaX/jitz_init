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
})();