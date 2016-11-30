$(document).ready(function(){

//init ScrollMagic
var controller = new ScrollMagic.Controller();

// build a scene
var ourScene = new ScrollMagic.Scene({
	triggerElement: '#project01 img', // by adding the img tag it moves the trigger element to the top of the img tag.
	duration: '90%', //Will work for responsive sizes
	triggerHook: 0.9
})

.setClassToggle('#project01', 'fade-in')// add class to project01
.addIndicators({
	name: 'fade scene',
	colorTrigger: 'black',
	colorStart: 'rgb(237, 176, 57)',
	colorEnd: 'rgb(237, 57, 214)'
}) // This adds indicators to the page used for debugging.
.addTo(controller);

});
