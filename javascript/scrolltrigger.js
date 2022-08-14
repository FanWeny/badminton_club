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

    // gsap.to(".card", {
    //     scrollTrigger: ".card",
    //     x: 400,
    //     opacity: 1,
    //     transform: rotate(0,deg),
    //     duration: 2,
    // });
}