( function( $ ) {

	tinymce.create( 'tinymce.plugins.SnapThemePlugin', {
		mceTout : 0,

		init : function( ed, url ) {

			var buttons = {
				"alert"    : {
					commandName : "alert",
					title       : SnapTinymceLocal.alert
				},
				"error"    : {
					commandName : "error",
					title       : SnapTinymceLocal.error
				},
				"success"  : {
					commandName : "success",
					title       : SnapTinymceLocal.success
				},
				"note"     : {
					commandName : "note",
					title       : SnapTinymceLocal.note
				},
				"drop-cap" : {
					commandName : "dropCap",
					title       : SnapTinymceLocal.dropCap
				},
				"intro"    : {
					commandName : "intro",
					title       : SnapTinymceLocal.intro
				}
			};

			// Register custom commands
			for ( var key in buttons ) {
				var commandName = buttons[ key ].commandName;
				// Tricky JS callback wrapping to create a new scope
				( function( currentCommand ) {
					ed.addCommand( currentCommand, function() {
						ed.focus();
						ed.formatter.toggle( currentCommand );
					} );
				} ) ( commandName );
			}

			// Register custom buttons
			for ( var key in buttons ) {
				var commandName = buttons[ key ].commandName;
				ed.addButton( commandName, {
					title   : buttons[ key ].title,
					cmd     : commandName,
					label   : key,
					'class' : 'snap'
				} );
			}

			ed.onInit.add( function( ed ) {
				var $toolbar_2 = $( '#' + ed.id + '_toolbar2' ),
					$toolbar_3 = $( '#' + ed.id + '_toolbar3' ),
					$wp_adv    = $( '#' + ed.id + '_wp_adv' );
				
				// Hide the 3rd row of buttons if the advanced editor is off
				if ( getUserSetting( 'hidetb', '0' ) == '0' )
					$toolbar_3.hide();

				// On click, toggle the 3rd row of buttons with the rest of the advanced editor
				$wp_adv.click( function() {
					if ( $toolbar_2.is( ':visible' ) )
						$toolbar_3.show();
					else
						$toolbar_3.hide();
				} );

				// Register formatting options for easy toggling
				ed.formatter.register( 'alert', {
					block   : 'div',
					wrapper : 1,
					remove  : 'all',
					classes : 'alert'
				} );
				ed.formatter.register( 'error', {
					block   : 'div',
					wrapper : 1,
					remove  : 'all',
					classes : 'alert error'
				} );
				ed.formatter.register( 'success', {
					block   : 'div',
					wrapper : 1,
					remove  : 'all',
					classes : 'alert success'
				} );
				ed.formatter.register( 'note', {
					block   : 'div',
					wrapper : 1,
					remove  : 'all',
					classes : 'alert note'
				} );
				ed.formatter.register( 'dropCap', {
					inline  : 'span',
					wrapper : 1,
					classes : 'drop-cap',
					split   : true
				} );
				ed.formatter.register( 'intro', {
					block   : 'span',
					wrapper : 1,
					remove  : 'all',
					classes : 'intro'
				} );
			} );

			// Here, all of our custom formatting buttons are toggled
			// between active/inactive based on the current selection
			ed.onNodeChange.add( function( ed, cm, n, co ) {
				cm.setActive( 'alert',   $( n ).parents( '.alert' ).length );
				cm.setActive( 'error',   $( n ).parents( '.alert.error' ).length );
				cm.setActive( 'success', $( n ).parents( '.alert.success' ).length );
				cm.setActive( 'note',    $( n ).parents( '.alert.note' ).length );
				cm.setActive( 'dropCap', $( n ).parents( '.drop-cap' ).length );
				cm.setActive( 'intro',   $( n ).parents( '.intro' ).length );
			} );
		},

		createControl : function( n, cm ) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname  : 'The Theme Foundry Snap Theme plugin',
				author    : 'The Theme Foundry',
				authorurl : 'http://thethemefoundry.com',
				version   : "1.0"
			};
		}
	} );

	// Register plugin
	tinymce.PluginManager.add( 'snap', tinymce.plugins.SnapThemePlugin );
} ) ( jQuery );