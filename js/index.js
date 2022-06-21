const CIRCULATION_INTERVAL = 4000;

let splashImages = window.document.body.querySelectorAll(':scope > section.splash > div');
for (let i = 0; i < splashImages.length; i++) {
    splashImages[i].style.backgroundImage = `url("../stylesheets/images/index-${i + 1}.jpg")`;
    // 요소.style : 요소의 CSS 속성에 접근할 수 있게 한다.
    splashImages[i].style.objectFit = 'cover';
    splashImages[i].style.width = '100vw';
    splashImages[i].style.height = '100vh';
}

// 재귀호출 (Recursive call) : 
function circulateSplash(currentSplashIndex) {
    setTimeout(() => {
        splashImages[currentSplashIndex++].classList.remove('visible');
        if (currentSplashIndex === splashImages.length) {
            currentSplashIndex = 0;
        }
        splashImages[currentSplashIndex].classList.add('visible');
        circulateSplash(currentSplashIndex);
    }, CIRCULATION_INTERVAL);
}
circulateSplash(0);

$('.enter').on('click', function () {
    location.href = "main.html";
});