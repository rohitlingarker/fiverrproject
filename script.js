const sec1 =document.getElementById("sec1")
const mainTitle = document.getElementById("mainTitle")
//SCROLLMAGIC
if (window.matchMedia("(orientation: landscape) and (min-width: 768px)").matches) {

const textAnim = TweenMax.fromTo(mainTitle, 3, { opacity: 1,fontSize:"10vw"}, { opacity: 0,fontSize:"40vw",display:"none"});

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


}

window.addEventListener('resize', function() {
  location.reload();
});
