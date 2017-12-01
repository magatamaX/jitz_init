// トップスライダー
(function(){

if( document.getElementById('top-page')){

      const slides = document.getElementById('slides');
      const slidesBtn = document.getElementById('main-slide-btn');
      const clonedList = slides.querySelector('[data-clonedlist]');
      let timerID;

      // 最後のスライドを一番前に移動する
      slides.insertBefore(clonedList, slides.firstElementChild);

    let currentSlideOrder;
    let clickableFlag = true;

    function slideNext(){
      currentSlideOrder = slides.querySelectorAll('li');
      console.log(currentSlideOrder);
      slides.classList.add('sliding-next');
    }
    function slidePrev(){
      currentSlideOrder = slides.querySelectorAll('li');
      console.log(currentSlideOrder);
      slides.classList.add('sliding-prev');
    }


    slidesBtn.addEventListener('click', (e) => {
    // 前後送りボタンを押したとき
    if(clickableFlag){

      clearTimeout(timerID);

        if( e.target.className === 'slide-next'){
          console.log('NEXTボタンをクリックしました。');

            slideNext();


        } else if ( e.target.className === 'slide-prev'){
          console.log('PREVボタンをクリックしました');

            slidePrev();

        }

      timerID = setTimeout(() => {
        autoPlay( 5000 );
        },
        8000
      );
      return false;

    }

    });
    // アニメーションスタート時
    slides.addEventListener('animationstart', () => {
      console.log('アニメーション開始！');
      clickableFlag = false;

    });
    // アニメーション終了時（送り種類で分ける）
    slides.addEventListener('animationend', (animation) => {
      console.log('アニメーション終了！');
      clickableFlag = true;

      if (animation.animationName === 'slidenext'){
        console.log('送りアニメーションです。');

            slides.appendChild(currentSlideOrder[0]);
            slides.classList.remove('sliding-next');
            currentSlideOrder;

      } else if (animation.animationName === 'slideprev'){
        console.log('戻りアニメーションです。');

            slides.insertBefore(currentSlideOrder[currentSlideOrder.length-1], slides.firstElementChild);
            slides.classList.remove('sliding-prev');
            currentSlideOrder;

      }

    });

    // 自動スライド送り
    function autoPlay( interval ){
      console.log('autoplayによってslidenextされました。');
      slideNext();
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        autoPlay( interval );
        },
        interval
      );
    }

    timerID = setTimeout(() => {
      autoPlay( 5000 );
      },
      5000
    );

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

  let scrollTopPoint = document.scrollingElement.scrollTop;

  if ( scrollTopPoint >= toFixedPoint ){
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
      pageNaviInner[i].style.top = hHeight + (raisingHeight - scrollTopPoint) + 'px';
    }
  }

});

})();
// ヘッダメニューのホバー表示
(function(){

const targetElement = document.getElementById('page-navi');
const hoveringTargets = document.querySelectorAll('#page-navi > ul > li');

// console.log(hoveringTargets);

for ( let i=0; i < hoveringTargets.length; i++ ){
  hoveringTargets[i].addEventListener('mouseover', () => {
    hoveringTargets[i].classList.add('hover');
  });
  hoveringTargets[i].addEventListener('mouseout', () => {
    hoveringTargets[i].classList.remove('hover');
  });

}

})();
// ヘッダメニューボタンで表示切替（SP）
(function(){

  const toggleBtn = document.getElementById('navi-toggle-btn').querySelector('a');
  console.log(toggleBtn);
  const toggleTarget = document.getElementById('page-navi');

  toggleBtn.addEventListener('click', function(e){

    e.preventDefault();

    if ( toggleTarget.classList.contains('active')){

      toggleTarget.classList.remove('active');

      return false;

    } else {

      toggleTarget.classList.add('active');

return false;
    }

  });

})();
