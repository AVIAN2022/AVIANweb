$(function() {
    const html = document.documentElement;
    const canvas = document.getElementById("intro"); //캔버스 id 불러와야함
    const context = canvas.getContext("2d");
    const intro = document.getElementById("intro1").documentElement;

    const frameCount = 94; //프레임 숫자 교정하세요

    const currentFrame = index => (
        `프레임셋/${index.toString().padStart(4, '0')}.png` //경로 수정 , $구문은 남겨야함.

    )

    const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i)
        }
    };
    // Create, load and draw the image
    const img = new Image()
    img.src = currentFrame(1); // we'll make this dynamic in the next step, for now we'll just load image 1 of our sequence
    // Set canvas dimensions
    canvas.width = 1920;
    canvas.height = 1080;

    img.onload = function() {
        context.drawImage(img, 0, 0);
    }

    const updateImage = index => {
        img.src = currentFrame(index);
        context.drawImage(img, 0, 0);
    }


    window.addEventListener('scroll', () => {
        const scrollTop = html.scrollTop; //scrollTop은 현재 수직위치
        const maxScrollTop = $("#n_1920__2").offset().top + 80; //문서 스크롤 높이 - 창 높이
        const scrollFraction = scrollTop / maxScrollTop; //현재 수직위치가 약 몇 %인지?
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        ) - Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        ) % 2;


        requestAnimationFrame(() => updateImage(frameIndex))
    });

    preloadImages();
});
(function(document) {
    const markers = [...document.querySelectorAll('mark')];

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.8
    });

    markers.forEach(mark => {
        observer.observe(mark);
    });
})(document);
ScrollReveal().reveal('.n_15_', {
    distance: '40%',
    origin: 'bottom',
    duraiton: 500
});

ScrollReveal().reveal('.text', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
});

ScrollReveal().reveal('.button', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
});

ScrollReveal().reveal('.button_', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
});

ScrollReveal().reveal('.innerslider', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
});

$.fn.hasScrollBar = function() {
    return (this.prop("scrollWidth") == 0 && this.prop("clientWidth") == 0) ||
        (this.prop("scrollWidth") > this.prop("clientWidth"));
}; // 좌우 스크롤이 있는지 없는지 여부 검사
function wheel(name) {
    $(name).on('mousewheel', function(e) {
        var hasScroll = $(this).hasScrollBar();
        if (!hasScroll) { //스크롤이 없으면 그냥 일반 스크롤
        } else { //있으면 아래 스크롤 받는값을 없애고 좌우스크롤
            e.preventDefault();
            var wheelDelta = e.originalEvent.wheelDelta;
            if (wheelDelta > 0) {
                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
            } else {
                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
            }
        }
    });
}
$(function() {
    wheel('.slider');
});

function middlego() {}

function leftgo() {}

function rightgo() {}
let innerSlider = document.querySelector(".innerslider");

function middlego() {
    innerSlider.style.left = '-840px';
}

function leftgo() {
    innerSlider.style.left = '0px';
}

function rightgo() {
    innerSlider.style.left = '-1800px';
}

function checkboundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};