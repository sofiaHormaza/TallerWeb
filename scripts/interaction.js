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
        start: "bottom bottom",
    },
});

tl.from(".panel__text--green", {
    opacity: 0,
    duration: 1,
    width: "0%",
    scrollTrigger: {
        trigger: ".panel__text--green",
        start: "top bottom",
    }
});

tl.from(".textGreen", {
    scrollTrigger: {
        trigger: ".panel__text--green",
        start: "top bottom",
    },
    duration: 1,
    opacity: 0,
    y: "random(-200,200)",
    stagger: 0.25,
})

tl.from(".buttonGreen", {
    scrollTrigger: {
        trigger: ".panel__text--green",
        start: "top bottom",
    },
    duration: 1,
    scale: 0,
})

//Panel green
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel__text--yellow",
        toggleActions: "play restart restart reset",
        start: "bottom bottom",
    },
});

tl2.from(".panel__text--yellow", {
    opacity: 0,
    duration: 1,
    width: "0%",
    scrollTrigger: {
        trigger: ".panel__text--yellow",
        start: "top bottom",
    }
});

tl2.from(".textYellow", {
    scrollTrigger: {
        trigger: ".panel__text--yellow",
        start: "top bottom",
    },
    duration: 1,
    opacity: 0,
    y: "random(-200,200)",
    stagger: 0.25,
})

tl2.from(".buttonYellow", {
    scrollTrigger: {
        trigger: ".panel__text--yellow",
        start: "top bottom",
    },
    duration: 1,
    scale: 0,
})