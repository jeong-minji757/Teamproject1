$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  //(2)Mobile Menu
  mobBtn.on("click", function () {
    BODY.toggleClass("mOpen");
  });

  //(1)scroll-header
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    //console.log(scroll);
    if (scroll > 60) {
      // BODY.addClass("scrolling");
      scrollTopBtn.addClass('On');
    }else{
      // BODY.removeClass("scrolling");
      scrollTopBtn.removeClass('On')
    }
  });

  //(3)Top Button scroll
  scrollTopBtn.on('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });

  //footer
  const ftrBtn = $('.family_wrap>a');
  const ftrWrap = $('.family_wrap');

  ftrBtn.on('click',function(e){
    e.preventDefault();
    ftrWrap.toggleClass('active');
  });

  // //  브라우저 크기가 변경되었을때 초기화
  // $(window).on('load resize',function(){
  //   let w = $(window).innerWidth();
  //   if(w < 1200) {
  //     hNav_reset();
  //     sch_reset();
  //     subNav.removeAttr('style'); 
  //   };
  // });
  //Mobile Navigation____________________________
  const mobSubBtn = $('.subNav .sub_menu .depth1>li');

  mobSubBtn.click(function(){
    $(this).siblings().find(".depth2").slideUp(300);
    $(this).siblings().removeClass("active");

    $(this).find(".depth2").slideToggle(200);
    $(this).toggleClass("active");
  });
});


$(document).ready(function () {
  let showCount = window.innerWidth >= 1200 ? 3 : 2;

  // 1. 처음엔 2개 또는 3개만 보임
  $(".news li").hide().slice(0, showCount).show();

  // 2. 버튼 누를 때마다 2개 또는 3개씩 보여줌
  $(".con_btn").click(function (e) {
    e.preventDefault();

    const hiddenItems = $(".news li:hidden");

    hiddenItems.slice(0, showCount).fadeIn();

    // 남은 게 현재 보여줄 수 있는 개수보다 적으면 버튼 숨김
    if (hiddenItems.length <= showCount) {
      $(this).hide();
    }
  });
});
