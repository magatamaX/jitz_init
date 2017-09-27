(function(){
  const elm = document.querySelector('.slides');
  const elm1 = elm.firstElementChild;
  const elm1Clone = elm1.cloneNode(true);
  const elm5 = elm.lastElementChild;
  const div = document.createElement('div');
  div.classList.add('absbox');
  const absbox = elm5.appendChild(div);
  absbox.appendChild(elm1Clone);
})();
