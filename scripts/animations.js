gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

/*let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".bannerA",
        toggleActions: "restart play resume reset",
        start: "top center",
    },
});*/

ScrollTrigger.defaults({
    toggleActions: "play restart restart reset"
});


//Animación textos del banner
gsap.from(".bannerA", {
    scrollTrigger: {
        trigger: ".bannerA",
        start: "top bottom",
    },
    duration: 1,
    opacity: 0,
    y: "random(-200,200)",
    stagger: 0.25,
})

//Animación productos de la galería
gsap.from(".gallery__product", {
    scrollTrigger: {
        trigger: ".gallery__product",
        start: "top bottom",
    },
    duration: 1,
    opacity: 0,
    y: 150,
    stagger: 0.25,
})

//Animación nombre colección Steve McQueen
gsap.from(".ad__name", {
    scrollTrigger: {
        trigger: ".ad__name",
        start: "bottom bottom",
    },
    duration: 1.5,
    text: ""
})

//Animación info de anuncio
gsap.from(".ad__info", {
    scrollTrigger: {
        trigger: ".ad__info",
        start: "top bottom",
    },
    duration: 1.5,
    opacity: 0,
    y: 150,
})



//Animación info de características
gsap.from(".fromLeft", {
    scrollTrigger: {
        trigger: ".fromLeft",
        start: "top center",
    },
    duration: 1,
    opacity: 0,
    x: -150,
})

gsap.from(".fromRight", {
    scrollTrigger: {
        trigger: ".fromRight",
        start: "top center",
    },
    duration: 1,
    opacity: 0,
    x: 150,
})

//Animación títulos características
gsap.from(".feature__title", {
    scrollTrigger: {
        trigger: ".feature__title",
        start: "top center",
    },
    duration: 1.5,
    text: ""
})