////////////////////////////////////////////////////////////////
// 주메뉴 마우스오버 탭포커스
$(document).ready(function(){  
  $(".item").bind('mouseenter focusin', function(){
    $(this).children(".item__contents").stop().show();
    $(this).addClass("on").siblings().removeClass("on");
  });
  $(".item").on('mouseleave', function(){
    $(this).children(".item__contents").stop().hide();
    $(this).removeClass("on");
  });
  $(".item").on('focusout', function(){
    $(this).children(".item__contents").stop().fadeOut();
    $(this).removeClass("on");
  });
});
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//badge 영역
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .3, {
      opacity : 0,
      display : 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x : 0
    });
    
  } else {
    gsap.to(badgeEl, .3, {
      opacity : 1,
      display : 'block'
    });    
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x : 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo : 0
  });
});
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
//fade-in 영역
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){ //index=0;
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, .1, {
    delay: (index + 1 ) * 0.7, // 0.7, 1.4, 2.1, 2.7
    opacity:1
  })
});
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
//new Swiper(선택자, 옵션)
//swiper 공지사항
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay:true,
  loop:true
});

//swiper 슬라이드
new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, //한번에 보여줄 슬라이드 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides : true, // 1번 슬라이드가 가운데 보이기
  loop : true,
  // autoplay:{
  //   delay:5000
  // },
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true //사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

//awards 슬라이드
new Swiper('.awards .swiper-container', {
	autoplay:true,
	loop:true,
	spaceBetween:30,
	slidesPerView:5,
	centeredSlides:true,
	
	navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'		
	}
});
////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// togglePromotion
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion  //!false = true
  if(isHidePromotion){
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// floating
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), // selector(class명), delay(random(최소시간, 최대시간), size(y축))
    {
      y : size, // transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat : -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복
      yoyo : true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease :  Power1.easeInOut, // Easing 함수 적용.
      delay : random(0, delay) //얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
    }
  );
}

// floatingObject 함수 실행(selector, delay, size)
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
// scroll magic을 이용한 스크롤 트리거
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement : spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook : .8 // // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
////////////////////////////////////////////////////////////////

