gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

gsap.to(".panel", {
    duration: 60,
    repeat: -1,
    yoyo: true,
    backgroundPosition: "0% 100%",
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel__text--green",
        toggleActions: "play restart restart reset",
        start: "top bottom",
    },
});

tl.from(".panel__text--green", {
    duration: 1,
    width: "0%",
});

tl.from(".textGreen", {
    duration: 1,
    opacity: 0,
    y: "random(-200,200)",
    stagger: 0.25,
})

tl.from(".buttonGreen", {
    duration: 1,
    scale: 0,
})

//Panel green
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel__text--yellow",
        toggleActions: "play restart restart reset",
        start: "top bottom",
    },
});

tl2.from(".panel__text--yellow", {
    duration: 1,
    width: "0%",
});

tl2.from(".textYellow", {
    duration: 1,
    opacity: 0,
    y: "random(-200,200)",
    stagger: 0.25,
})

tl2.from(".buttonYellow", {
    duration: 1,
    scale: 0,
})