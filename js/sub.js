$(document).ready(function(){
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

  //탭메뉴
  $("#floor .floor-img ul li").not(":first").hide();
  $("#floor .floor-name ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let aa = $(this).index();
    $("#floor .floor-img ul li").eq(aa).fadeIn().siblings().hide();

  });

  const ex_swiper = new Swiper('.ex-swiper', {
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
    slidesPerView: 4.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    breakpoints: {
    1400: {
      slidesPerView: 6.5,
    },
  },
});

// 
const rsw = new Swiper('.rsw', {
  slidesPerView: 3.5, 
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4.5,
    },
  },
});

//go-top
$(function () {
    $('.go-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});

});