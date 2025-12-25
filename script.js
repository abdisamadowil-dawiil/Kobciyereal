
gsap.from("header", {
    y: -80,
    opacity: 0,
    duration: 1.2
  });
  
 
  gsap.from(".tag", {
    y: 30,
    opacity: 0,
    delay: 0.5
  });
  

  

  gsap.from(".card-img", {
    scrollTrigger: {
      trigger: ".card-image",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });

  
 

