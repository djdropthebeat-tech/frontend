(function (d) {
    var config = {
        kitId: 'lah1npm',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a;
    h.className += " wf-loading";
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || a && a != "complete" && a != "loaded") return;
        f = true;
        clearTimeout(t);
        try { Typekit.load(config) } catch (e) { }
    };
    s.parentNode.insertBefore(tk, s)
})(document);


// ⭐ 텍스트 글자 단위 스팬 생성 (ScrollReveal보다 먼저 실행)
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".intro-title");  // 여러 개 대응

    titles.forEach(title => {
        const text = title.innerText.trim();
        title.innerHTML = "";

        [...text].forEach(char => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char; // 공백 유지
            span.style.display = "inline-block"; // 글자 애니메이션 가능하도록
            title.appendChild(span);
        });
    });
});


// ⭐ ScrollReveal 애니메이션
document.addEventListener('DOMContentLoaded', function () {

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1500,
        delay: 200,
        reset: false
    });

    // 글자 하나씩 순차적으로 올라오게
    sr.reveal('.intro-title span', {
        interval: 70,
        duration:1000,
        delay: 200,
        distance: '40px',
        easing: 'ease-out'
    });

    sr.reveal('h2', {
        duration: 700,
        distance: '40px',
        delay: 100
    });

    sr.reveal('.float-txt', {
        duration: 900,
        distance: '60px',
        delay: 300
    });

    // info-section 순차 등장
    sr.reveal('.info-section', {
        interval: 300,
        duration: 1200,
        distance: '50px'
    });

    // work 목록 순차 등장
    sr.reveal('.work', {
        interval: 400,
        duration: 1500,
        distance: '80px'
    });
});
