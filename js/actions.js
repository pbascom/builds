jQuery(document).ready(function($){
	
	$( "div.addendum-header" ).on( "click", function(){
		$( this ).find( "img.npc" ).addClass( "minimized", 400 );
		$( this ).find( "img.speechBubble" ).addClass( "hidden" );
		$( this ).parent().find( "div.addendum-content" ).removeClass( "hidden", 600 );
	});

});