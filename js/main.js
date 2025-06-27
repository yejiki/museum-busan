$(document).ready(function () {

  //gnb
  $(".gnb li").on("mouseenter", function(){
     $(this).siblings().css('opacity', '0.2');
  });

  $(".gnb li").on("mouseleave", function(){
     $(".gnb li").css('opacity', '1');
  });

  //mgnb
  $(".mgnb-bg").hide();

  $(".close").click(function(){
    const isOpen = $(".mgnb").css("left") === "0px";

    if (isOpen) {
      $(".mgnb").animate({"left":"-600px"});
      $(".mgnb-bg").fadeOut();
    } else {
      $(".mgnb").animate({"left":"0"});
      $(".mgnb-bg").fadeIn(); 
    }

    $(".mgnb-bg").click(function(){
      $(".mgnb").animate({"left":"-600px"});
      $(".mgnb-bg").fadeOut();
    });
    
  });

  

  // mb

  // 마우스 숨기기
  const element = document.querySelector('#mb');

  element.addEventListener('mouseenter', () => {
    element.style.cursor = 'none';
  });

  element.addEventListener('mouseleave', () => {
    element.style.cursor = 'auto';
  });
  
  const $bone = $('#bone');
  const $mb = $('#mb');

  let targetX = -100, targetY = -100; // 목표 위치
  let currentX = -100, currentY = -100; // 현재 위치

  const maskOffset = 75;

  let lastMoveTime = 0;
  const throttleDelay = 33; // 약 30fps

  $mb.on('mousemove', function (e) {
    const now = Date.now();
    if (now - lastMoveTime < throttleDelay) return;
    lastMoveTime = now;

    const rect = $mb[0].getBoundingClientRect();
    const inBounds =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (inBounds) {
      targetX = e.pageX - maskOffset;
      targetY = e.pageY - maskOffset;

      $bone.css('opacity', 1);
    } else {
      $bone.css('opacity', 0);
    }
  });

  $mb.on('mouseleave', function () {
    $bone.css('opacity', 0);
  });

  // 좌표 이동 천천히
  function animate() {
    const lerp = 0.1;

    const dx = targetX - currentX;
    const dy = targetY - currentY;

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      currentX += dx * lerp;
      currentY += dy * lerp;

      const pos = `${currentX}px ${currentY}px`;
      $bone.css({
        '-webkit-mask-position': pos,
        'mask-position': pos
      });
    }

    requestAnimationFrame(animate);
  }

  animate();


//exhibit

// 슬라이드 개수 계산
const slideCount = document.querySelectorAll('.exhibit-swiper .swiper-slide').length;
const loopedSlidesCount = slideCount;

// exhibit-swiper
const exhibit_swiper = new Swiper('.exhibit-swiper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  loopedSlides: loopedSlidesCount,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
// exhibit-right-swiper (썸네일)
const exhibit_right_swiper = new Swiper('.exhibit-right-swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  loop: true,
  loopedSlides: loopedSlidesCount,
  slidesPerView: 2,
  spaceBetween: 40,
  touchRatio: 0,
});
// 수동 동기화
let syncing = false;

exhibit_swiper.on('slideChangeTransitionEnd', function () {
  if (syncing) return;
  syncing = true;
  exhibit_right_swiper.slideToLoop(exhibit_swiper.realIndex, 500, false);
  syncing = false;
});

exhibit_right_swiper.on('slideChangeTransitionEnd', function () {
  if (syncing) return;
  syncing = true;
  exhibit_swiper.slideToLoop(exhibit_right_swiper.realIndex, 500, false);
  syncing = false;
});


//collect
  const collect_swiper = new Swiper('.collect-swiper', {
    // 옵션(parameter) 추가
    effect: "fade",
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  });


  
  //탭메뉴
  $('.notice-name ul li a').click(function(e)
  {
    e.preventDefault();   
  });

  $(".notice-list ul").not(":first").hide();
  $(".notice-name ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let aa = $(this).index();
    $(".notice-list ul").eq(aa).fadeIn().siblings().hide();

  });


  const news_swiper = new Swiper('.news-swiper', {
  // 옵션(parameter) 추가
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination", 
    type: "fraction", 
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});

//go-top
$(function () {
    $('.go-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

});

//끝
});


