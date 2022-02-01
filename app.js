if (matchMedia("screen and (min-width: 1500px)").matches) {
    const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic
    .Scene(
        {duration: 5000, triggerElement: intro, triggerHook: 0}
    )
    .setPin(intro)
    .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1500;
});

setInterval(() => {
    delay += (scrollpos - delay)*accelamount;

    video.currentTime = delay;
}, 33.3);
(function (document) {
    const markers = [...document.querySelectorAll('mark')];

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0});

    markers.forEach(mark => {
        observer.observe(mark);
    });
})(document);
}


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
let innerSlider = document.querySelector(".innerslider");
function middlego(){
    innerSlider.style.left = '-840px';
}
function leftgo(){
    innerSlider.style.left = '0px';
}
function rightgo(){
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