gsap.registerPlugin(ScrollTrigger);

/*let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".bannerA",
        toggleActions: "restart play resume reset",
        start: "top center",
    },
});*/

//Animación textos del banner
gsap.from(".bannerA", {
    scrollTrigger: {
      trigger: ".bannerA",
      toggleActions: "play restart restart reset",
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
      toggleActions: "play restart restart reset",
      start: "top bottom",
    },
    duration: 1,
    opacity: 0,
    y: 150,
    stagger: 0.25,
  })


