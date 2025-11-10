document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-menu ul li");
    const c1 = document.querySelector(".c1");
    const c2 = document.querySelector(".c2");

    // 초기 상태: 공지사항 보이기
    c1.classList.add("active");
    c2.classList.remove("active");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function() {
            // 탭 버튼 스타일(선택된 탭 클래스 토글) — 필요하면 CSS 추가
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // 내용 전환
            if (index === 0) {
                c1.classList.add("active");
                c2.classList.remove("active");
            } else {
                c2.classList.add("active");
                c1.classList.remove("active");
            }
        });
    });
});
