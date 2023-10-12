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

  })

  $(".notice-btn-autoplay").click(function(){
    if($(this).hasClass('pause')){
      bottomSlide.autoplay.stop();
    }else{
      bottomSlide.autoplay.start();
    }
    $(this).toggleClass('pause')
  })


  // li 에 클릭이벤트 주는건 이상하다.
  $(".related-btn").click(function(){
    // 이미 on 이 있는지 없는지 확인해서, 
    // 이미 있으면 
    if($(this).hasClass("on")){
      // .related-btn 전체에 on을 다 지워라(전체 닫히는거)
      $(".related-btn").removeClass("on")
      // 모든 .sub-area는 접어라.
      $(".sub-area").stop().slideUp()
    }else{
      // 없으면 
      // .related-btn 전체에 on을 다 지우되(전체 닫히는거)
      $(".related-btn").removeClass("on")
      // 클릭한 .related-btn 에는 on 을 붙여라. (==> 네이버커리어에서 전체 foreach 돌린거 재확인하기)
      $(this).addClass("on")
      // 모든 .sub-area는 접되,
      $(".sub-area").stop().slideUp()
      // 클릭한 .related-btn의 형제인 sub-area 는 펼쳐라.
      $(this).siblings(".sub-area").stop().slideDown()
    }
  })


  // 서브리스트를 접는 기능(문서를 클릭햇을때)
  $(document).click(function(e){

    // 문서내의 어떠한 요소를 클릭했을때
    // 클릭한 타겟이 section-related 안에 존재하는 요소냐?
    
    // 존재하지 않는다면
    if(!$(".section-related").has(e.target).length){
      // .related-btn 전체에 on을 다 지워라(전체 닫히는거)
      $(".related-btn").removeClass("on")
      // 모든 .sub-area는 접어라.
      $(".sub-area").stop().slideUp()
    }
  })


  // 키보드 이벤트(탭키)
  // keydown :도달시키고 누를때 ??? (키보드 누를때)
  // keyup: 연관검색어 할때???(키보드에서 손 뗄때)
  // 탭키: 앞으로 진행(keycode = 9)
  // 시프트+텝 : 뒤로 진행
  // e.shiftKey : 쉬프트를 눌렀냐 안 눌렀냐를 판단
  $(".section-related .sub-area li:first-child").keydown(function(e){
    console.log('keydown');
    // 탭을 눌렀고, 쉬프트도 눌렀냐? 그렇다면(탭만 누르면 아래는 실행이 안되고, 쉬프트탭히면 아래가 실행된다. 고로, 반드시 && 뒤에가 트루여야 실행되는 코드이다.)
    if(e.keyCode === 9 && e.shiftKey){
      // .related-btn 전체에 on을 다 지워라(전체 닫히는거)
      $('.related-btn').removeClass('on') 
      // 모든 .sub-area는 접어라.
      $('.sub-area').stop().slideUp()
    }
  })

  // 탭을 눌렀고, 쉬프트도 눌렀냐? 그렇다면(탭만 누르면 아래는 실행이 안되고, 쉬프트탭히면 아래가 실행된다. 고로, 반드시 && 뒤에가 트루여야 실행되는 코드이다.)
  $(".section-related .sub-area li:last-child").keydown(function(e){
    console.log('keydown');
    // 탭을 눌렀고, 쉬프트는 안눌렀냐? (탭만 눌렀냐?)그렇다면(탭만 누르면 아래는 실행이 안되고, 쉬프트탭히면 아래가 실행된다. 고로, 반드시 && 뒤에가 트루여야 실행되는 코드이다.)
    if(e.keyCode === 9 && !e.shiftKey){
      // .related-btn 전체에 on을 다 지워라(전체 닫히는거)
      $('.related-btn').removeClass('on') 
      // 모든 .sub-area는 접어라.
      $('.sub-area').stop().slideUp()
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