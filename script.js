const sec1 =document.getElementById("sec1")
const mainTitle = document.getElementById("mainTitle")
//SCROLLMAGIC
const textAnim = TweenMax.fromTo(mainTitle, 3, { opacity: 1,fontSize:150}, { opacity: 0,fontSize:300,display:"none"});
const controller = new ScrollMagic.Controller();

//Text Animation

let scene2 = new ScrollMagic.Scene({
  duration: 600,
  triggerElement: sec1,
  triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

let scene3 = new ScrollMagic.Scene({
    duration:3000,
    triggerElement:scene2,
    triggerHook:0
})


// create a timeline for the image animations
var slideInImages = new TimelineMax()
  .add(TweenMax.fromTo("#sec2_image1", 1, {x:"400%",width:400}, {x:"50%",width:200, ease: Linear.easeNone}), 0) // slide in the first image from the right side
  .add(TweenMax.fromTo("#sec2_image2", 1, {x: "400%",width:400}, {x: "50%",width:200, ease: Linear.easeNone}), 0.5) // slide in the second image 0.5 seconds after the first
  .add(TweenMax.fromTo("#sec2_image3", 1, {x: "400%",width:400}, {x: "50%",width:200, ease: Linear.easeNone}), 1) // slide in the third image 1 second after the first
  .add(TweenMax.fromTo("#sec2_text1", 2, { opacity: 0 }, { opacity: 1}),2)
  .add(TweenMax.fromTo("#sec2_text2", 2, { opacity: 0 }, { opacity: 1}),2.5)
  .add(TweenMax.fromTo("#sec2_text3", 2, { opacity: 0 }, { opacity: 1}),3)
// create a new ScrollMagic scene to trigger the image animations when the trigger element comes into view
var scene = new ScrollMagic.Scene({
  triggerElement: "#sec2",
  duration: "200%",
  triggerHook:0
})
.setPin("#sec2") // keep the trigger element pinned to the top of the screen while the scene is active
.setTween(slideInImages) // set the timeline as the scene's animation
.addTo(controller)

// const sec9 = document.querySelector("#sec9")
// const video = sec9.querySelector("video");



// let scene9 = new ScrollMagic.Scene({
//   duration: 2000,
//   triggerElement: sec9,
//   triggerHook: 0
// })
//   .addIndicators()
//   .setPin(sec9)
//   .addTo(controller);

// let accelamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene9.on("update", e => {
//   scrollpos = e.scrollPos / 1000;
// });

// var curposition = 14

// setInterval(() => {
//   if (scrollpos < curposition){
//     return
//   }else{
//   delay += (scrollpos -curposition - delay) * accelamount;
//   console.log(scrollpos, delay);

//   video.currentTime = scrollpos-curposition;
//   }
// }, 33.3);