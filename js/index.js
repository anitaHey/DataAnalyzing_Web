particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
count_particles = document.querySelector('.js-count-particles');
update = function() { stats.begin();
    stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); };
requestAnimationFrame(update);;



$(document).ready(function() {
    $("#fir_down").click(function() {
        TweenMax.to(window, 2.5, { scrollTo: { y: $('.second').offset().top }, ease: Bounce.easeOut });
    });
    $("#sec_down").click(function() {
        TweenMax.to(window, 2.5, { scrollTo: { y: $('.third').offset().top }, ease: Bounce.easeOut });
    });
    $("#thi_down").click(function() {
        TweenMax.to(window, 2.5, { scrollTo: { y: $('.four').offset().top }, ease: Bounce.easeOut });
    });

    $(".button_up").click(function() {
        TweenMax.to(window, 2.5, { scrollTo: { y: $('.navbar').offset().top }, ease: Expo.easeOut, y: -500 });
    });

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll >= $('.second').offset().top) {
            $(".nav_color").css('color', '#393E46');
            $(".navbar").addClass('nav_bgc');
        } else {
            $(".nav_color").css('color', '#ebedec');
            $(".navbar").removeClass('nav_bgc');
        }
    });

    var t1 = new TimelineLite({
        paused: true
    });
    var t2 = new TimelineLite({
        paused: true
    });

    t1.fromTo(".anim-typewriter1", 6, {
        width: "0",
    }, {
        width: $(".title1").width(),
        ease: SteppedEase.config(37),
        onComplete: function() {
            TweenMax.set(".anim-typewriter1", { className: "-=border_right" });
            TweenMax.set(".anim-typewriter2", { className: "+=border_right" });
            t2.play();
        }
    }, 0);

    t1.fromTo(".anim-typewriter1", 0.5, {
        "border-right-color": "rgba(255,255,255,0.75)"

    }, {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(37)
    }, 0);


    t2.fromTo(".anim-typewriter2", 6, {
        width: "0"
    }, {
        width: $(".title2").width(),
        ease: SteppedEase.config(37),
        onComplete: function() {
            TweenMax.set(".anim-typewriter2", { className: "-=border_right" });
        }
    }, 0);

    t2.fromTo(".anim-typewriter2", 0.5, {
        "border-right-color": "rgba(255,255,255,0.75)"
    }, {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(37)
    }, 0);

    t1.play();
});