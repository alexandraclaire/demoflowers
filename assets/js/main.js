$(document).ready(function(){
	$('.photoset-grid-lightbox').photosetGrid({
  		highresLinks: true,
  		rel: 'flowers-gallery',
  		gutter: '2px',

  		onComplete: function(){
  	  		$('.photoset-grid-lightbox').attr('style', '');
  	  		$('.photoset-grid-lightbox a').colorbox({
  	    		photo: true,
  	    		scalePhotos: true,
  	    		maxHeight:'90%',
  	    		maxWidth:'90%'
  	  		});
  		}
	});
});