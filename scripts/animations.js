gsap.registerPlugin(ScrollTrigger);

/*let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".bannerA",
        toggleActions: "restart play resume reset",
        start: "top center",
    },
});*/

gsap.from(".bannerA", {
    scrollTrigger: {
      trigger: ".bannerA",
      toggleActions: "play restart restart reset",
      start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    y: "random(-200,200)",
    stagger: 0.25,
  })


