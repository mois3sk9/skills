$.fn.skill = function() {

	mSkill = this;
  $(window).on('scroll', function() { // las animaciones se dispararan cuando el recuadro este visible en el viewport
	
	mSkill.find('.skillBar').each(function() {

		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.90 &&!$(this).hasClass("sk-fired")) {
			//una vez que cada skill bar esta en el viewport
			
			$(this).addClass('sk-fired'); //agregamos una clase como bandera para evitar que se vuelva a reproducir la animacion
			var defaultPercentage = "50%";
			var color = $(this).attr('skill-color');
			var defaultColor = "white";
			//animamos el ancho de cada barra
			if($(this).attr('skill-percentage')) {
				$(this).width($(this).attr('skill-percentage'));
			} else {
				$(this).width(defaultPercentage);
			}

			//seteamos el color

			if(color) {
				$(this).css('background-color', color);
			} else {
				$(this).css('background-color',defaultColor);
			}

			//buscamos las imagenes para animarlas
			$(this).parent().find(".skill-image").each(function() {
				var imagen = $(this);
				setInterval(function() {

					imagen.show().addClass("animated").addClass("bounceIn");
				}, 2000);
				
			});
			}
		});

}	);

     return mSkill;
}