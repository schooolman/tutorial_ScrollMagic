$(document).ready(function(){

//init ScrollMagic
var controller = new ScrollMagic.Controller();

//pin the intro

var pinIntroScene = new ScrollMagic.Scene({
	triggerElement: '#intro',
	triggerHook: 0,
	duration: '30%'
})
.setPin('#intro', {pushFollowers: false})
.addTo(controller);

var repinIntroScene = new ScrollMagic.Scene({
	triggerElement: '#project01',
	triggerHook: 0.5
	// duration: 0
})
.setPin('#intro', {pushFollowers: false})
.addTo(controller);

//parallax scene
var parallaxTL = new TimelineMax();
parallaxTL
	.from('.content-wrapper', 0.3, {autoAlpha: 0, ease:Power0.easeNone}, 0.9)
	.from('.bcg', 2, {y:'-50%', ease:Power0.easeNone}, 0)
	;

var slideParallaxScene = new ScrollMagic.Scene({
	triggerElement: '.bcg-parallax',
	triggerHook: 1,
	duration: '100%'
})
.setTween(parallaxTL)
.addTo(controller);


// loop through each .project element
$('.project').each(function(){

	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: this.children[0], // by adding the img tag it moves the trigger element to the top of the img tag.
		// duration: '90%', //Will work for responsive sizes
		triggerHook: 0.9,
		// reverse: false //makes the animation only happen one time. Won't re-trigger on scroll.
	})

	.setClassToggle(this, 'fade-in')// add class to project01
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		colorStart: 'rgb(237, 176, 57)',
		colorEnd: 'rgb(237, 57, 214)'
	}) // This adds indicators to the page used for debugging.
	.addTo(controller);

});

});
