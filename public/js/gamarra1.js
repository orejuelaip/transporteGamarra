$(document).ready(function() {
	var imgs = 1;
 	$('html, body').stop().animate({scrollTop: $("#Inicio").offset().top}, 1000);
	$('.menu .link_he').click(function(e){
	 	e.preventDefault();
	 	let id = $(this).attr("id");
	 	if ( id == "_Inicio" || id == "_Contactenos") {
	 		 cambiarColor('#fff')
	 		 $("#content-nav").removeClass('moviHeader')

	 	}else if(id == "_Servicios" ){
	 		 cambiarColor('#0e67abcc')
	 		 $("#content-nav").addClass('moviHeader')
	 	}else{
	 		cambiarColor('#39a1cd')
	 		$("#content-nav").addClass('moviHeader')
	 	}

		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

 function cambiarColor(Color) {
 	$('.menu .link_he').css({ color: Color });
	$("#content-nav p").css({ color: Color });
 }

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(".cabpm a").click(function(e) {
	  e.preventDefault()
	let id = $(this).attr('id');
	$(".cabpm a").removeClass('activoimg');
	$(".contenedo-img-ser .mrn").hide('fast');
	if (id=="pm1") {
		
		$("#pm1").addClass('activoimg');
		$(".contenedo-img-ser #pm1").show('fast');
	}else if (id=="pm2") {
 		$(".contenedo-img-ser #pm2").show('fast');
 		$("#pm2").addClass('activoimg');
	}else if (id=="pm4") {
		$(".contenedo-img-ser #pm4").show('fast');
		$("#pm4").addClass('activoimg');
	}else if (id=="pm5") {
		$(".contenedo-img-ser #pm5").show('fast');
		$("#pm5").addClass('activoimg');
	}else if (id=="pm6") {
		$(".contenedo-img-ser #pm6").show('fast');
		$("#pm6").addClass('activoimg');
	}else if (id=="pm3") {
		$(".contenedo-img-ser #pm3").show('fast');
		$("#pm3").addClass('activoimg');
	}else if (id=="pm7") {
		$(".contenedo-img-ser #pm7").show('fast');
		$("#pm7").addClass('activoimg');
	}else if (id=="pm8") {
		$(".contenedo-img-ser #pm8").show('fast');
		$("#pm8").addClass('activoimg');
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
