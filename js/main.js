$(function(){
	
	if($(window).width() > 480) {
   $('.slider').slick({
	prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/left-triangle.png" alt="">',
	nextArrow: $('.next')
});
   }

});