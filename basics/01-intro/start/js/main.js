$(document).ready(function(){

//init ScrollMagic
var controller = new ScrollMagic.Controller();

// build a scene
var ourScene = new ScrollMagic.Scene({
	triggerElement: '#project01'
})

.setClassToggle('#project01', 'fade-in')// add class to project01
.addIndicators({
	name: 'fade scene',
	colorTrigger: 'black',
	indent: 200,
	colorStart: 'rgb(237, 176, 57)'
}) // This adds indicators to the page used for debugging.
.addTo(controller);

});
