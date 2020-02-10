$(document).ready(function(){
	$('.popup').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	new WOW().init();
});
$(document).ready(function(e) {
   
	// live handler
	lc_lightbox('.elem', {
		wrap_class: 'lcl_fade_oc',
		gallery : true,	
		thumb_attr: 'data-lcl-thumb', 
		
		skin: 'minimal',
		radius: 0,
		padding	: 0,
		border_w: 0,
	});	

});