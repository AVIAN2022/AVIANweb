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

    document
        .getElementById("AVIan")
        .addEventListener('click', hello);
    function hello() {
        alert("안녕?");
    }

    ScrollReveal().reveal('.button', {
        distance: '100%',
        origin: 'bottom',
        duraiton: 500
    });

    document
        .getElementById("n_-_")
        .addEventListener('click', scrolldown);
    function scrolldown() {
        const offset = $("#AVIAN_2022___").offset();
        $('html, body').animate({
            scrollTop: offset.top - 80
        }, 1000);
    }

    ScrollReveal().reveal('.button_', {
        distance: '100%',
        origin: 'bottom',
        duraiton: 500
    });



    $("#n_-_b").addEventListener('click', scrolldown);
    function scrolldown() {
        const offset = $("#AVIAN_2022___").offset();
        $('html, body').animate({
            scrollTop: offset.top - 80
        }, 1000);
    }

    document
        .getElementById("n__2")
        .addEventListener('click', hello);
    function hello() {
        alert("안녕?");
    }
