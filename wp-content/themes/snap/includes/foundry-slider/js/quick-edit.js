( function( $ ) {
    $( '#the-list' ).on( 'click', '.editinline', function( el ) {
        inlineEditPost.revert();
        var $this         = $( this ),                                              // The current "a" object
            row_id        = '#' + $this.closest( 'tr' ).attr( 'id' ),               // The ID of the current row
            $current_cell = $( '.ttf-foundry-slider', row_id ),                             // The cell containing the slider info
            current_value = $current_cell.html(),                                   // Value in the cell
            $input        = $( '.ttf-foundry-slider-input', '.inline-edit-row' );   // The current input object

        // Check or uncheck the input based on the slider status
        if ( undefined !== current_value && 'Featured' === current_value )
            $input.attr( 'checked', 'checked' );
        else
            $input.removeAttr( 'checked' );
    } );
} ( jQuery ) );