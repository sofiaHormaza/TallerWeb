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

  gsap.from(".ad__name", {
    scrollTrigger: {
        trigger: ".ad__name",
        start: "bottom bottom",
      },
      duration: 1.5, 
      text: ""})

  gsap.from(".ad__info", {
    scrollTrigger: {
      trigger: ".ad__info",
      start: "top bottom",
    },
    duration: 1.5,
    opacity: 0,
    y: 150,
  })


