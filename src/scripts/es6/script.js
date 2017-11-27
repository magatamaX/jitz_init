// トップスライダー
(function(){

if( document.getElementById('top-page')){

  const elm = document.getElementById('main-slide').querySelector('.slides');
  const elm1 = elm.firstElementChild;
  const elm1Clone = elm1.cloneNode(true);
  const elm5 = elm.lastElementChild;
  const ul = document.createElement('ul');
  ul.classList.add('absbox');
  const absbox = elm5.appendChild(ul);
  absbox.appendChild(elm1Clone);

  const slides = elm.children;
  console.log(slides);
  console.log(slides.length);

  let n = 0;

  elm.addEventListener("transitionend", function(e){


    console.log('アニメーション終わりました');
    console.log(n);
    console.log(slides.length);



    if ( n < slides.length-1 ){
      n++;
    } else {
      elm.classList.remove('sld0');
      elm.classList.remove('sld1');
      elm.classList.remove('sld2');
      elm.classList.remove('sld3');
      elm.classList.remove('sld4');
      n = 0;
    }

    elm.classList.add('sld'+n);


  });

  window.addEventListener('load', () => {
    elm.classList.add('sld0');
  });


}
})();
// スティッキーヘッダ
(function(){

const targetElement = document.querySelector('.header-contents');
const hHeight = targetElement.clientHeight;
const raisingHeight = document.getElementById('header').querySelector('.top').clientHeight;
const toFixedPoint = targetElement.getBoundingClientRect().top + window.pageYOffset;
const pageNaviInner = document.getElementById('page-navi').querySelectorAll('.page-navi-inner-wrap');
const staticScrollTop = document.documentElement.scrollTop;
window.addEventListener('load', () => {

  for ( let i=0; i<pageNaviInner.length; i++ ){
    pageNaviInner[i].style.top = hHeight + (raisingHeight - staticScrollTop) + 'px';
  }

});
window.addEventListener('scroll', () => {

  const scrollTop = document.documentElement.scrollTop;

  if ( scrollTop >= toFixedPoint ){
    // ヘッダーコンテンツがFixedになるとき
    targetElement.classList.add('fixed');
    document.getElementById('contents').style.paddingTop = hHeight + 'px';
    for ( let i=0; i<pageNaviInner.length; i++ ){
      pageNaviInner[i].style.top = hHeight + 'px';
    }

  } else {
    // ヘッダーコンテンツがStaticなとき
    targetElement.classList.remove('fixed');
    document.getElementById('contents').style.paddingTop = '0px';
    for ( let i=0; i<pageNaviInner.length; i++ ){
      pageNaviInner[i].style.top = hHeight + (raisingHeight - scrollTop) + 'px';
    }
  }

});

})();
// ヘッダメニューのホバー表示
(function(){

const targetElement = document.getElementById('page-navi');
const hoveringTargets = targetElement.querySelectorAll(':scope > ul > li');

console.log(hoveringTargets);

for ( let i=0; i < hoveringTargets.length; i++ ){
  hoveringTargets[i].addEventListener('mouseover', function(){
    this.classList.add('hover');
  });
  hoveringTargets[i].addEventListener('mouseout', function(){
    this.classList.remove('hover');
  });

}

})();
