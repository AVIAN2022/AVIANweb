    (function (document) {
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

    function scrolldown() {
      const offset = $("#AVIAN_2022___").offset();
      $('html, body').animate({
          scrollTop: offset.top - 80
      }, 1000);
    }
    function hello() {
      
  }
  ScrollReveal().reveal('.button_', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
  });

    function scrolldown() {
        const offset = $("#AVIAN_2022___").offset();
        $('html, body').animate({
            scrollTop: offset.top - 80
        }, 1000);
    }
    $("n__2").click(hello);
    function hello() {
        alert("안녕?");
    }
