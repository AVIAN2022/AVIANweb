const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

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
  }, {threshold: 0.8});
  
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


  
  let slider = document.querySelector(".slider");
  let innerSlider = document.querySelector(".innerslider");
  let pressed = false;
  let startx;
  let x;
slider.addEventListener("mousedown", e => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", e => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX;

  innerSlider.style.left = `${x - *startx}px`;
  checkboundary();
});

function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
};