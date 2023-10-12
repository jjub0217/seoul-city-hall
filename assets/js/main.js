// 브라우저가 로드 되면 바로 시작해줘러.
$(function () {

  /**
   * @swiper기능
   * 
   */
  const mainSlide = new Swiper('.issue-visual .swiper',{
    autoplay:{
    delay: 2000,
    },
    loop: true,
    navigation: {
      nextEl: ".issue-visual .btn-next",
      prevEl: ".issue-visual .btn-prev"
    },
    pagination: {
    el: ".pagination",
    type: "fraction",
  },
  })


  /**
   * @슬라이드의index가4부터일경우와그게아닐경우디자인변경
   * 
   */
  mainSlide.on('transitionEnd', function() {
    if(mainSlide.realIndex >= 3){
      $('.btn-citizen').addClass('on').siblings().removeClass('on')
    }else{
      $('.btn-news').addClass('on').siblings().removeClass('on')
    }
  });


  /**
   * @주요뉴스나시민참여버튼눌렀을경우슬라이드이동및디자인변경
   * 
   */
  $(".issue-area-control button").click(function(){
    // 클릭한 button 에 부여한 attribute 인 data-idx의 값을 활용하자.
    idx = $(this).data('idx')
    // loop 가 되는 슬라이드에서는 slideTo 가 아니라 slideToLoop 를 사용해야 한다. 
    // mainSlide.slideTo(idx, 1000)
    mainSlide.slideToLoop(idx, 1000)
    $(this).addClass('on').siblings().removeClass('on')
  })


  // button 을 클릭햇을때 그 button은 이미 일시정지 상태였나요? -> 아니요 : 계속 자동재생
  // button 을 클릭햇을때 그 button은 이미 일시정지 상태였나요? -> 네 : 일시정지. 그리고 일시정지버튼 디자인 추가
  $(".btn-autoplay").click(function(){
    if($(this).hasClass("pause")){
      mainSlide.autoplay.start();
    }else{
      mainSlide.autoplay.stop();
    }
    $(this).toggleClass('pause')
  })



  $(".notice-btn-autoplay").click(function(){
      if($(this).hasClass('notice-btn-autoplay')){
        $(this).removeClass('notice-btn-autoplay')
        $(this).addClass('pause')
        bottomSlide.autoplay.stop();
      }else{
        $(this).addClass('notice-btn-autoplay')
        $(this).removeClass('pause')
        bottomSlide.autoplay.start();
      }
  })

  $(".organization-item").click(function(){
    if(!$($(this)
      .children('button').children('span')).hasClass('on')){
        $(this)
        .children('button').children('span').addClass('on').siblings().removeClass('on')
      }else{
        $(this)
        .children('button').children('span').removeClass('on')
      }
  })

  const bottomSlide =  new Swiper('.notice-slide .swiper',{
    slidesPerView: 3,
    spaceBetween: 43,
    autoplay:{
    delay: 5000,
    },
    loop: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev"
    },
    pagination: {
    el: ".pagination",
    type: "fraction",
  },
  })
  })