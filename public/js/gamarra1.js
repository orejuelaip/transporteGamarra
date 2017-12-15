$(document).ready(function() {
 	$('html, body').stop().animate({scrollTop: $("#Inicio").offset().top}, 1000);
	$('.menu .link_he').click(function(e){
	 	e.preventDefault();
	 	let id = $(this).attr("id");
	 	console.log(id)
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
	if (id=="pm1") {
		
		$(".pm1 img").animate({'left': '60px'}, 0)
		$(".pm2 img").animate({'left': '-3900px'}, 0)
		$(".pm3 img").animate({'left': '-39700px'}, 0)
		$(".pm1 ").animate({'left': '60px'}, 0)
		$(".pm2 ").animate({'left': '-3900px'}, 0)
		$(".pm3 ").animate({'left': '-39700px'}, 0)
		$("#pm1").addClass('activoimg')
		$("#pm2").removeClass('activoimg')
		$("#pm3").removeClass('activoimg')
	}else if (id=="pm2") {
		$("#pm1").removeClass('activoimg')
		$("#pm2").addClass('activoimg')
		$("#pm3").removeClass('activoimg')
		$(".pm1 img").animate({'left': '-3900px'}, 0)
		$(".pm2 img").animate({'left': '60px'}, 0)
		$(".pm3 img").animate({'left': '-39700px'}, 0)

		$(".pm1 ").animate({'left': '-3900px'}, 0)
		$(".pm2 ").animate({'left': '60px'}, 0)
		$(".pm3 ").animate({'left': '-39700px'}, 0)
	}else{
		$("#pm1").removeClass('activoimg')
		$("#pm2").removeClass('activoimg')
		$("#pm3").addClass('activoimg')
		$(".pm1 img").animate({'left': '-39020px'}, 0)
		$(".pm2 img").animate({'left': '-3900px'}, 0)
		$(".pm3 img").animate({'left': '60px'}, 0)
		$(".pm1 ").animate({'left': '-39020px'}, 0)
		$(".pm2 ").animate({'left': '-3900px'}, 0)
		$(".pm3 ").animate({'left': '60px'}, 0)
	}
});


});
