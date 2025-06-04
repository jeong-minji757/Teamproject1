document.addEventListener('DOMContentLoaded', function() {
  function checkScroll() {
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();

    $(".ani").each(function () {
        const elementTop = $(this).offset().top;

        if (elementTop < scrollPosition + windowHeight * 0.8) {
            $(this).addClass("moving");
        }
    });
  }

    $(window).on("scroll", checkScroll);
    checkScroll();

  const agreeAllCheckbox = document.getElementById('agreeAll');
  const termsOfUseCheckbox = document.getElementById('termsOfUse');
  const privacyPolicyCheckbox = document.getElementById('privacyPolicy');
  const marketingSmsCheckbox = document.getElementById('marketingSms');
  const marketingEmailCheckbox = document.getElementById('marketingEmail');체크박스

  const allIndividualCheckboxes = [
      termsOfUseCheckbox,
      privacyPolicyCheckbox,
      marketingSmsCheckbox,
      marketingEmailCheckbox
  ];

  agreeAllCheckbox.addEventListener('change', function() {
      const isChecked = this.checked;

      allIndividualCheckboxes.forEach(checkbox => {
          checkbox.checked = isChecked;
      });
  });

  // 개별 약관 체크박스에 이벤트 리스너 추가 (옵션: "전체 동의" 상태 역방향 업데이트)
  allIndividualCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const allChecked = allIndividualCheckboxes.every(cb => cb.checked);
        agreeAllCheckbox.checked = allChecked;
    });
  });

  //폼 제출 시 필수 약관 동의 여부 확인 (클라이언트 측 유효성 검사)
  const joinForm = document.querySelector('form');

  joinForm.addEventListener('submit', function(event) {
    const essentialCheckboxes = [termsOfUseCheckbox, privacyPolicyCheckbox];
    let essentialAgreed = true;

    essentialCheckboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            essentialAgreed = false;
        }
    });

    if (!essentialAgreed) {
        alert('필수 약관에 모두 동의해야 회원가입을 진행할 수 있습니다.');
        event.preventDefault();
    }
  });
});