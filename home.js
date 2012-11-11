$( function() {
	$( '.widget' ).hide().eq( 0 ).show();
	$( 'button' ).click( function() {
		$( '.widget' ).hide();
		$( '.widget-' + $( this ).data( 'widget' ) ).show();
	} );
} )
