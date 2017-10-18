(function(){
  const elm = document.querySelector('.slides');
  const elm1 = elm.firstElementChild;
  const elm1Clone = elm1.cloneNode(true);
  const elm5 = elm.lastElementChild;
  const ul = document.createElement('ul');
  ul.classList.add('absbox');
  const absbox = elm5.appendChild(ul);
  absbox.appendChild(elm1Clone);

  elm.addEventListener("transitionend", function(e){
    console.log(e);
    // alert('animation--End!');
    // elm.classList.add('trs01');
    elm.classList.add('sld02'); 
  });

  window.onload = function(){
    elm.classList.add('sld01');
  };



})();
