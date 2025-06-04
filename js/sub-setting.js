document.addEventListener('DOMContentLoaded', () => {
  // GSAP ScrollTrigger 플러그인 등록
  gsap.registerPlugin(ScrollTrigger);

  // 모든 섹션에 애니메이션 적용
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    const rel = section.querySelector('.rel > *');
    if (rel) {
      gsap.from(section.querySelectorAll('.rel > *'), {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2, // 요소 간의 애니메이션 간격
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section, // 섹션이 뷰포트에 들어올 때 트리거
          start: 'top 80%', // 트리거 시작 위치
          toggleActions: 'play none none none', // 애니메이션 동작
        },
      });
    }
  });
});



// 아코디언 설정
$(".accordion .title").click(function () {
  const $item = $(this).closest(".accordion-item");

  // 열려 있던 것들 닫기
  $(".accordion-item").not($item).find(".desc").slideUp();
  $(".accordion-item").not($item).find(".title").removeClass("active");

  // 현재 클릭한 거 토글
  $(this).toggleClass("active");
  $item.find(".desc").stop().slideToggle();
});


$(document).ready(function () {
  let showCount = window.innerWidth >= 1200 ? 3 : 2;

  // 1. 처음엔 2개 또는 3개만 보임
  $(".news li").hide().slice(0, showCount).show();

  // 2. 버튼 누를 때마다 2개 또는 3개씩 보여줌
  $(".news_btn").click(function (e) {
    e.preventDefault();

    const hiddenItems = $(".news li:hidden");

    hiddenItems.slice(0, showCount).fadeIn();

    // 남은 게 현재 보여줄 수 있는 개수보다 적으면 버튼 숨김
    if (hiddenItems.length <= showCount) {
      $(this).hide();
    }
  });
});

$(".set_tab .tab").click(function (e) {

  $(".set_tab .tab").removeClass("active");
  $(this).addClass("active");
});