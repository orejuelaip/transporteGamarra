$(document).ready(function() {
 
	$('.menu .link_he').click(function(e){
	 	e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


});
