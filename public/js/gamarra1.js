$(document).ready(function() {
	var imgs = 1;
 	$('html, body').stop().animate({scrollTop: $("#Inicio").offset().top}, 1000);
	$('.menu .link_he').click(function(e){
	 	e.preventDefault();
	 	let id = $(this).attr("id");
	 	if ( id == "_Inicio" || id == "_Contactenos") {
	 		 $('.menu .link_he').css({
	 			  	color: '#fff', 
	 			  });
	 		 $("#content-nav p").css({
	 			  	color: '#fff', 
	 			  });
	 		 $("#content-nav").removeClass('moviHeader')

	 			  
	 	}else{
	 		$('.menu .link_he').css({
	 			  	color: '#39a1cd', 
	 			  });
	 			  $("#content-nav p").css({
	 			  	color: '#39a1cd', 
	 			  });
	 		$("#content-nav").addClass('moviHeader')
	 	}

		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(".cabpm a").click(function(e) {
	  e.preventDefault()
	let id = $(this).attr('id');
	$(".cabpm a").removeClass('activoimg');
	if (id=="pm1") {
		
		$("#pm1").addClass('activoimg');
		$("#galeryService").attr("src","img/sobredimencion4.jpg");
	}else if (id=="pm2") {
 		$("#galeryService").attr("src","img/sobredimencion3.jpg");
 		$("#pm2").addClass('activoimg');
	}else{
		$("#galeryService").attr("src","img/sobredimencion2.jpg");
		$("#pm3").addClass('activoimg');
	}
});

	function moverImagenes() {
		if (imgs == 1 ) {
			imgs=2
			$("#Inicio").css({ 'background-image': 'url(http://paulorejuela.com/gamarra/public/img/banner-nuestra-flota1.jpg)'});
		}else if (imgs == 2 ) {
			imgs=3
			$("#Inicio").css({ 'background-image': 'url(http://paulorejuela.com/gamarra/public/img/banner-landing.jpg)'});
		}else if (imgs == 3){
			imgs=1
			$("#Inicio").css({ 'background-image': 'url(http://paulorejuela.com/gamarra/public/img/banner-bienvenidos0.jpg)'});
		}
	}

	setInterval(moverImagenes, 10000);
});
