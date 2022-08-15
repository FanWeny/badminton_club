let minWidth = window.innerWidth

if(minWidth > 768){
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".pic_court", {
        scrollTrigger: ".pic_court",
        x: -500,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".court_first_content", {
        scrollTrigger: ".court_first_content",
        x: 500,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".rese_left", {
        scrollTrigger: ".rese_left",
        x: 300,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".rese_center", {
        scrollTrigger: ".rese_center",
        x: 600,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".rese_right", {
        scrollTrigger: ".rese_right",
        x: 900,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".maptext", {
        scrollTrigger: ".map",
        y: -300,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".child_scroll", {
        scrollTrigger: ".child_scroll",
        x: -600,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".high_scroll", {
        scrollTrigger: ".high_scroll",
        x: -600,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".low_scroll", {
        scrollTrigger: ".low_scroll",
        x: 600,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".left_scroll",{
        scrollTrigger: ".coach_title",
        x: 500,
        y: -500,
        rotate: 0,
        opacity: 1,
        duration: 2,
    });
    gsap.to(".center_scroll",{
        scrollTrigger: ".coach_title",
        y: -500,
        opacity: 1,
        duration: 2,
        delay: 0.5,
    });
    gsap.to(".right_scroll",{
        scrollTrigger: ".coach_title",
        x: -500,
        y: -500,
        rotate: 0,
        opacity: 1,
        duration: 2,
        delay: 1,
    });
    gsap.to(".maptext", {
        scrollTrigger: ".map",
        y: -300,
        opacity: 1,
        duration: 2,
    });
};