jQuery(document).ready(function($){ 

	function default_text(element, text, type) {
		var q = location.search;
		var params = q.substring(1).split('&');
		for(var i=0; i<params.length; i++){
		    var pair=params[i].split('=');
		    if(decodeURIComponent(pair[0])=='post_type' && pair[1])
		    	if($(element).length != 0) {  
					if( !$(element).val() ) {
						switch(type) {
							case 'input':
								$(element).val(text)
								break;
							case 'textarea':
								$(element).append(text)
								break;
							default:
								$(element).val(text)
						}
					}
				}
		}
	}
	
	function ucfirst(str) {
	    var firstLetter = str.substr(0, 1);
	    return firstLetter.toUpperCase() + str.substr(1);
	}

	// Defaults for Title 
	default_text('#titlediv #title', '%%caption%%');
	
	// Defaults for Content 
	default_text('#wp-content-editor-container textarea', '<a href="%%instagram-image-url%%" title="%%caption%%" target="_blank"><img alt="%%caption%%" src="%%image%%" class="" width="600" height="600"></a>');

	// Image saving
	if($('input[name="_instagrate_pro_settings[post_save_media]"]').is(':checked')) $('.image-saving').show();
	
	$('input[name="_instagrate_pro_settings[post_save_media]"]').change(function(){
		if($(this).is(':checked')) $('.image-saving').show();
		else $('.image-saving').hide();
    });
	
	// Users Images
	if($('select[name="_instagrate_pro_settings[instagram_images]"] option:selected').val() == 'users') $('.instagram_user').show();
    
	$('select[name="_instagrate_pro_settings[instagram_images]"]').change(function(){
		if($('option:selected', this).val() == 'users') $('.instagram_user').show();
		else $('.instagram_user').hide();
    });
	
	// Location Images
	if($('select[name="_instagrate_pro_settings[instagram_images]"] option:selected').val() == 'location') $('.instagram_location').show();
    
	$('select[name="_instagrate_pro_settings[instagram_images]"]').change(function(){
		if($('option:selected', this).val() == 'location') $('.instagram_location').show();
		else $('.instagram_location').hide();
    });
    
    // Schedule
	if($('select[name="_instagrate_pro_settings[posting_frequency]"] option:selected').val() == 'schedule') $('.schedule').show();
    
	$('select[name="_instagrate_pro_settings[posting_frequency]"]').change(function(){
		if($('option:selected', this).val() == 'schedule') $('.schedule').show();
		else $('.schedule').hide();
    });
  
    // Schedule Day
    $('select[name="_instagrate_pro_settings[posting_schedule]"]').change(function() {
		var len = $('select[name="_instagrate_pro_settings[posting_day]"] option').size();
		if (($('option:selected', this).val() == 'igp_daily' || $('option:selected', this).val() == 'igp_twicedaily' || $('option:selected', this).val() == 'igp_hourly')) {
			if ( $('select[name="_instagrate_pro_settings[posting_day]"] option[value=""]').length == 0 ){
				$('select[name="_instagrate_pro_settings[posting_day]"]').append($("<option></option>").attr("value", "").text('Daily'));
				$('select[name="_instagrate_pro_settings[posting_day]"] option:last').attr('selected', 'selected');
				$('select[name="_instagrate_pro_settings[posting_day]"]').attr('disabled', 'disabled');
			}
		} else if (len == 8) {
			$('select[name="_instagrate_pro_settings[posting_day]"]').removeAttr('disabled');
			$('select[name="_instagrate_pro_settings[posting_day]"] option:last').remove();
		}
	});

    // Manual
	if($('select[name="_instagrate_pro_settings[posting_frequency]"] option:selected').val() == 'manual') $('.manual').show();
    
	$('select[name="_instagrate_pro_settings[posting_frequency]"]').change(function(){
		if($('option:selected', this).val() == 'manual') {
			$('.manual').show();
			var post_id = $('#post_ID').val();
			$.post(ajaxurl, 
	            { action:'igp_manual_frequency',
	              post_id: post_id,
				  nonce: instagrate_pro.nonce }, 
	            function(data){}
	         , 'json');
	        return false;
		}
		else $('.manual').hide();
    });
	
	$('.grouped').hide();
	$('.single_post').hide();
		
	// Multiple Images - Single
	if($('select[name="_instagrate_pro_settings[posting_multiple]"] option:selected').val() == 'single') $('.single_post').show();
   
	// Multiple Images - Grouped
	if($('select[name="_instagrate_pro_settings[posting_multiple]"] option:selected').val() == 'group') $('.grouped').show();
	
	$('select[name="_instagrate_pro_settings[posting_multiple]"]').change(function(){
		$('.grouped').hide();
		$('.single_post').hide();
		if($('option:selected', this).val() == 'group') $('.grouped').show();
		if($('option:selected', this).val() == 'single') $('.single_post').show();
		
    });
	
	// Change Post Type
	$('select[name="_instagrate_pro_settings[post_type]"]').change(function(){
		post_type = $('option:selected', this).val();
		
		$('#select_post_label').html('Select ' + ucfirst(post_type));
		
		// Change Multiple Image Select Text
		$('select[name="_instagrate_pro_settings[posting_multiple]"] option[value="each"]').html(ucfirst(post_type) + ' Per Image');
	
		$('select[name="_instagrate_pro_settings[posting_multiple]"] option[value="single"]').html('Same ' + ucfirst(post_type));
			
		// Reload Post Objects	
		$('select[name="_instagrate_pro_settings[posting_same_post]"]').empty();
		$('select[name="_instagrate_pro_settings[posting_same_post]"]').append('<option value="">Loading...</option>');
		$.post(ajaxurl, 
            { 	action:'igp_post_objects', 
				post_type:post_type,
				nonce: instagrate_pro.nonce}, 
            function(data){
                $('select[name="_instagrate_pro_settings[posting_same_post]"]').empty();
				$.each(data.objects, function(key, val) {
					$('select[name="_instagrate_pro_settings[posting_same_post]"]').append('<option value="' + key +'">' + val + '</option>');
				});
            }
        , 'json');
    		
		// Reload Taxomonies	
		$('select[name="_instagrate_pro_settings[post_taxonomy]"]').empty();
		$('select[name="_instagrate_pro_settings[post_taxonomy]"]').append('<option value="">Loading...</option>');
		$.post(ajaxurl, 
            { 	action:'igp_taxonomies', 
				post_type:post_type,
				nonce: instagrate_pro.nonce}, 
            function(data){
                $('select[name="_instagrate_pro_settings[post_taxonomy]"]').empty();
				$.each(data.objects, function(key, val) {
					$('select[name="_instagrate_pro_settings[post_taxonomy]"]').append('<option value="' + key +'">' + val + '</option>');
				});
            }
        , 'json');
        
		taxonomy = $('select[name="_instagrate_pro_settings[post_taxonomy]"] option:selected').val();
		// Reload Terms
		change_taxonomy_terms(taxonomy);
        // Reload Tag Taxonomies
		$('select[name="_instagrate_pro_settings[post_tag_taxonomy]"]').empty();
		$('select[name="_instagrate_pro_settings[post_tag_taxonomy]"]').append('<option value="">Loading...</option>');
		$.post(ajaxurl, 
            { 	action:'igp_tag_taxonomies', 
				post_type:post_type,
				nonce: instagrate_pro.nonce}, 
            function(data){
                $('select[name="_instagrate_pro_settings[post_tag_taxonomy]"]').empty();
				$.each(data.objects, function(key, val) {
					$('select[name="_instagrate_pro_settings[post_tag_taxonomy]"]').append('<option value="' + key +'">' + val + '</option>');
				});
            }
        , 'json');
        return false;
    });
	
	// Change Taxonomy
	$('select[name="_instagrate_pro_settings[post_taxonomy]"]').change(function(){
		taxonomy = $('option:selected', this).val();
		change_taxonomy_terms(taxonomy);
		return false;
	});
	
	function change_taxonomy_terms(taxonomy) {
		$('#post_terms').empty();
		$('#tax_plural_label').empty();
		$('#post_terms').append('Loading...');
		$.post(ajaxurl, 
            { 	action:'igp_terms', 
				taxonomy:taxonomy,
				nonce: instagrate_pro.nonce}, 
            function(data){
                $('#post_terms').empty();
				$('#tax_plural_label').append(data.label);
				$.each(data.objects, function(key, val) {
					$('#post_terms').append('<input type="checkbox" name="_instagrate_pro_settings[post_term][]" value="' + key +'"/> '+ val +'<br />');
				});
            }
        , 'json');
	}
	 
	//Logout from Instagram
	$('#igp-logout').on('click', function(){      
        var r = confirm("Disconnect this account from Instagram?");
		if (r==true) {
			$('#poststuff').addClass('processing top');   
			var post_id = $('#post_ID').val();     
			$.post(ajaxurl, 
				{ 	action:'igp_disconnect',
					post_id:post_id,
					nonce: instagrate_pro.nonce
				 }, 
				function(data){
					window.location = data.redirect;
				}
			, 'json');
		}
	});
	
	// Refresh user from Instagram
	$('#igp-refresh').on('click', function(){      
        document.getElementById("igp-refresh").disabled = true;
		$('.igp-details .spinner').show(); 
		var post_id = $('#post_ID').val();     
		$.post(ajaxurl, 
			{ 	action:'igp_refresh',
				post_id:post_id,
				nonce: instagrate_pro.nonce
			 }, 
			function(data){
				$('#user-thumb').attr("src", data.user_thumb);
				$('.igp-details .spinner').hide();
				document.getElementById("igp-refresh").disabled = false;  
			}
		, 'json');
	});
	
	// Duplicate Account
	$('.igp-duplicate').on('click', function(){      
        var r = confirm("Are you sure you want to duplicate this account?");
		if (r==true) {
			$('#wpbody').addClass('processing');   
			var post_id = $(this).attr('rel');     
			$.post(ajaxurl, 
				{ 	action:'igp_duplicate_account',
					post_id:post_id,
					nonce: instagrate_pro.nonce
				 }, 
				function(data){
					if (!data.error) window.location = data.redirect;
				}
			, 'json');
		}
	});
	
	// Sync Likes Account
	$('.igp-sync-likes').on('click', function(){      
        var r = confirm("Are you sure you want to sync likes for this account? This may take some time.");
		if (r==true) {
			$('#wpbody').addClass('processing');   
			var post_id = $(this).attr('rel');     
			$.post(ajaxurl, 
				{ 	action:'igp_sync_likes',
					post_id:post_id,
					nonce: instagrate_pro.nonce
				 }, 
				function(data){
					if (!data.error) window.location = data.redirect;
				}
			, 'json');
		}
	});
	
	// Sync Comments Account
	$('.igp-sync-comments').on('click', function(){      
        var r = confirm("Are you sure you want to sync comments for this account? This may take some time.");
		if (r==true) {
			$('#wpbody').addClass('processing');   
			var post_id = $(this).attr('rel');     
			$.post(ajaxurl, 
				{ 	action:'igp_sync_comments',
					post_id:post_id,
					nonce: instagrate_pro.nonce
				 }, 
				function(data){
					if (!data.error) window.location = data.redirect;
				}
			, 'json');
		}
	});
	
	// Apply Image Stats
	function image_stats(stats) {
		$('label.pending .stat').text('0');
		$('label.posted .stat').text('0');
		$('label.ignore .stat').text('0');
		$('label.posting .stat').text('0');
		$.each(stats, function(key, val) {
			$('label.' + key + ' .stat').text(val.Total);
		});
	}
	
	//Load Earlier Images
	 $('#igp-load-images').on('click', function(){      
        var post_id = $('#post_ID').val();
        $('#igp-images').addClass('processing');
		var img_count = $('#igp-images li').length;
		$('#igp-load-images').attr('disabled', 'disabled');	
		$('#igp-load-images').val('Loading...');	
        $.post(ajaxurl, 
            { 	action:'igp_load_images',
            	post_id:post_id,
            	img_count: img_count,
				nonce: instagrate_pro.nonce
             }, 
            function(data){
				$.each(data.images, function(key, val) {
					$('#igp-images').append('<li><a class="edit-image ' + val.media_type + '" rel="' + val.id + '" href="#"><img class="' + ((data.load) ? 'pending' : val.status) + '" width="70" alt="" src="' + val.images.thumbnail.url +'"><span class="video-ind"></span></a><input id="' + val.id + '" class="igp-bulk" type="checkbox"></li>');
				});
				
				if (data.load) {
					var new_next_url = '';
					if (data.next_url == '' || data.next_url == null) {
						$('#igp-load-images').hide();
					} else new_next_url = data.next_url;
					$('input[name="_instagrate_pro_settings[next_url]"]').val(new_next_url);
					image_stats(data.stats);
				}
				
				$('#igp-images').removeClass('processing'); 
				$('#igp-load-images').val('Load More');	
				$('#igp-load-images').removeAttr('disabled');
            }
        , 'json');
    });
    
    // Edit Image Meta
    $('.wrap').on('click', '#igp-images a.edit-image', function( e ){
    //$('#igp-images .edit-image').on('click', function(){
        e.preventDefault();
        var edit = $(this);
        var post_id = $('#post_ID').val();
        $('#igp_meta_caption').val('');
        $('#igp-edit-image').data('image_id', edit.attr('rel'));
        $('#igp-edit-image').modal();
        $('#igp-edit-image strong').addClass('loading');
        $.post(ajaxurl, 
            { 	action:'igp_load_meta', 
            	id:$('#igp-edit-image').data('image_id'), 
            	post_id: post_id,
				nonce: instagrate_pro.nonce	}, 
            function(data){
                $('#igp_meta_caption').val(data.meta.caption_clean_no_tags);
                $('#igp_meta_caption_old').val(data.meta.caption_clean_no_tags);
                $('#igp_meta_caption_clean_old').val(data.meta.caption_clean);
				$('#igp_meta_status_old').text(ucfirst(data.meta.status));
				$('#igp_meta_status_old').addClass(data.meta.status);
                $('#igp_meta_image').show();
                
                if (data.meta.media_type == 'video') {
		            $('#jp_container_1').show();
	                
	                $("#igp-jplayer").jPlayer({
						ready: function () {
						  $(this).jPlayer("setMedia", {
						    m4v: data.meta.video_url,
						    poster: data.meta.image_url
						  });
						},
						swfPath: instagrate_pro.jplayer_path,
						supplied: "m4v",
						size: {
							width: "460px",
							height: "460px",
							cssClass: "jp-video-460p"
						},
						pause: function() {
							$(this).next().children('.jp-video-play').show();
						},
					});
	                
	                $('#igp_meta_image').hide();
	                
                } else $('#igp_meta_image').attr("src", data.meta.image_url);
               
                $.each(data.meta.tags, function(key, val) {
					$('#igp_meta_hashtags').append('<span class="button">' + val +'</span>');
				})
				
				$('#igp_meta_image').addClass(data.meta.status);
                $('#igp-edit-image strong').removeClass('loading');
            }
        , 'json');
        return false;
    });
    
    // Save Image Meta
    $('#igp_meta_submit').on('click', function(){
        $('#igp_meta_submit').val('Saving…');
        var post_id = $('#post_ID').val();
        var image_id = $('#igp-edit-image').data('image_id');
		var status = $('#igp_meta_status_old').text();
		if ($('#igp_meta_status').val() != "0") {
			status = $('#igp_meta_status').val();
		}
		status = status.toLowerCase();
        $.post(ajaxurl, 
            { action:'igp_save_meta', id:image_id, 
              caption:$('#igp_meta_caption').val(),
              caption_old:$('#igp_meta_caption_old').val(),
              caption_clean:$('#igp_meta_caption_clean_old').val(),
              status:status,
              post_id: post_id,
			  nonce: instagrate_pro.nonce }, 
            function(data){
                $('#igp_meta_submit').val('Save Changes');
                $('a[rel^=' + image_id +'] img').attr('class','');
                $('a[rel^=' + image_id +'] img').attr('class', status);
                image_stats(data.stats);
				$.modal.close();
            }
         , 'json');
        return false;
    });
    
    // Bulk Status Change Meta
    $('#igp-set-bulk-status').on('click', function(){
        $('#igp-images').addClass('processing');  
        $('#igp-set-bulk-status').attr('disabled', 'disabled');	
		$('#igp-set-bulk-status').val('Setting...');	
		var post_id = $('#post_ID').val();
        var status = $('select[name="igp_bulk_status"] option:selected').val();
		var images = $('#igp-images input:checkbox:checked').map(function() { return this.id }).get().join(",");
		if (images == '') {
			$('#igp-set-bulk-status').val('Set Status');
			$('#igp-set-bulk-status').removeAttr('disabled');
			$('#igp-images').removeClass('processing');  
			alert('No images selected');
			return false;
		}
		$.post(ajaxurl, 
            { action:'igp_bulk_edit_status',
              status:status,
              post_id:post_id,
			  images:images,
			  nonce: instagrate_pro.nonce}, 
            function(data){
				$('#igp-images input:checkbox:checked').each (function () {
					$('a[rel^=' + this.id +'] img').attr('class', '');
					$('a[rel^=' + this.id +'] img').attr('class', status);
				})
                image_stats(data.stats);
                $('#igp-images input:checkbox').removeAttr('checked');
                $('#toggle_bulk').removeAttr('checked');
				$('#igp-set-bulk-status').val('Set Status');
				$('#igp-set-bulk-status').removeAttr('disabled');
				$('#igp-images').removeClass('processing');  
            }
        , 'json');
        return false;
    });
	
	// Change Username
	$('input[name="_instagrate_pro_settings[instagram_user]"]').change(function(){
		// Get Users Id
		var username = $(this).val();
		var post_id = $('#post_ID').val();
		$('input[name="_instagrate_pro_settings[instagram_user]"]').addClass('loading');
		$.post(ajaxurl, 
            { 	action:'igp_get_user_id', 
				post_id:post_id,
				username:username,
				nonce: instagrate_pro.nonce}, 
            function(data){
                $('input[name="_instagrate_pro_settings[instagram_users_id]"]').val(data.users_id);
				$('input[name="_instagrate_pro_settings[instagram_user]"]').removeClass('loading');
				// Get stream
				change_stream();
            }
        , 'json');
        return false;
	});
	
	
	// Change Location Name
	$('input[name="_instagrate_pro_settings[instagram_location]"]').change(function(){
		if ($(this).val() == '') return;
		var location = $(this).val();
		var post_id = $('#post_ID').val();
		$('input[name="_instagrate_pro_settings[instagram_location]"]').addClass('loading');
		$('select[name="_instagrate_pro_settings[instagram_location_id]"]').empty();
		$('select[name="_instagrate_pro_settings[instagram_location_id]"]').append('<option value="">Loading...</option>');
		// Get Lat Lng
		geocoder = new google.maps.Geocoder();
		geocoder.geocode( { 'address': location}, function(results, status) {
			var lat = 0;
			var lng = 0;
			if (status == google.maps.GeocoderStatus.OK) {
				lat = results[0].geometry.location.lat();
				lng = results[0].geometry.location.lng();
				$('input[name="_instagrate_pro_settings[location_lat]"]').val(lat);
				$('input[name="_instagrate_pro_settings[location_lng]"]').val(lng);
				$.post(ajaxurl, 
					{ 	action:'igp_get_locations', 
						post_id:post_id,
						location:location,
						lat:lat,
						lng:lng,
						nonce: instagrate_pro.nonce}, 
					function(data){
                        $('select[name="_instagrate_pro_settings[instagram_location_id]"]').empty();
						$.each(data.locations, function(key, val) {
							$('select[name="_instagrate_pro_settings[instagram_location_id]"]').append('<option value="' + key + '">' + val + '</option>');
						});
						$('input[name="_instagrate_pro_settings[instagram_location]"]').removeClass('loading');
                        if (data.message != 'success') {
                            alert( data.message );
                        }
					}
				, 'json');
				return false;
			} else {
				 alert("Finding the location data was not successful");
				 $('input[name="_instagrate_pro_settings[instagram_location]"]').removeClass('loading');
				 $('select[name="_instagrate_pro_settings[instagram_location_id]"]').empty();
				 $('select[name="_instagrate_pro_settings[instagram_location_id]"]').append('<option value="0">— Enter Location —</option>');

			}
		});
	});
	
	// Change Location Select
	$('select[name="_instagrate_pro_settings[instagram_location_id]"]').change(function(){
		if($(this).val() != '0') change_stream();
	});
	
	// Change Tags
	$('input[name="_instagrate_pro_settings[instagram_hashtags]"]').change(function(){
		var stream = $('select[name="_instagrate_pro_settings[instagram_images]"] option:selected').val();
		if (stream == 'tagged' && $(this).val() != '') {
			$('input[name="_instagrate_pro_settings[instagram_hashtags]"]').addClass('loading');
			// Get new stream
			change_stream();
			$('input[name="_instagrate_pro_settings[instagram_hashtags]"]').removeClass('loading');
		}
	});
	
	// Change Instagram Image Stream
	$('select[name="_instagrate_pro_settings[instagram_images]"]').change(function(){
		var post_id = $('#post_ID').val();
		var stream = $('option:selected', this).val();
		
		var tags = $('input[name="_instagrate_pro_settings[instagram_hashtags]"]').val()
		if (stream == 'tagged' && tags == '') return;
		
		var users_id = $('input[name="_instagrate_pro_settings[instagram_users_id]"]').val()
		if (stream == 'users' && users_id == '') return;
		
		// Get new stream
		change_stream();

	});
	
	// Change Stream
	function change_stream(post_id, stream, tags, users_id)  {
		var post_id = $('#post_ID').val();
		var stream = $('select[name="_instagrate_pro_settings[instagram_images]"] option:selected').val();
		var tags = $('input[name="_instagrate_pro_settings[instagram_hashtags]"]').val();
		tags = tags.replace(/ /g,"");
		tags = tags.replace(/#/g,"");
		tag_array = tags.split(',');
		tag = tag_array[0];
		var users_id = $('input[name="_instagrate_pro_settings[instagram_users_id]"]').val();
		var location_id = $('select[name="_instagrate_pro_settings[instagram_location_id]"]').val();
		$('#igp-images').addClass('processing');  
		$.post(ajaxurl, 
            { 	action:'igp_change_stream', 
				post_id:post_id,
				stream:stream,
				tags:tags,
				tag:tag,
				users_id:users_id,
				location_id:location_id,
				nonce: instagrate_pro.nonce}, 
            function(data){
				$('#igp-images').empty();
				var i = 0;
				$.each(data.images, function(key, val) {
					i++;
					$('#igp-images').append('<li><a class="edit-image ' + val.type + '" rel="' + val.id + '" href="#"><img class="pending" width="70" alt="" src="' + val.images.thumbnail.url +'"><span class="video-ind"></span></a><input id="' + val.id + '" class="igp-bulk" type="checkbox"></li>');
				});
				$('input[name="_instagrate_pro_settings[next_url]"]').val(data.next_url);
				$('input[name="_instagrate_pro_settings[last_id]"]').val(data.last_id);
				$('#igp-load-images').show();
				if (data.next_url == '' || data.next_url == null) $('#igp-load-images').hide();
				$('.igp-bulk').hide();
				if (i > 0) {
					$('.igp-bulk').show();
					$('.igp-zero-images').hide();
				} else {
					$('.igp-zero-images').show();
					$('#igp-load-images').hide();
				}
				image_stats(data.stats);
				$('#igp-images').removeClass('processing'); 
            }
        , 'json');
        return false;
	}
	
	// Send Install Data
	 $('#igp-send-data').on('click', function(){      
        $('#wpbody-content').addClass('processing');  
		$.post(ajaxurl, 
			{ 	action:'igp_send_install_data',
				nonce: instagrate_pro.nonce
			 }, 
			function(data){
				$('#wpbody-content').removeClass('processing');  
				alert(data.message);
			}
		, 'json');
		return false;
	});
	
	// Send Debug Data
	 $('#igp-send-debug').on('click', function(){      
        $('#wpbody-content').addClass('processing');  
		$.post(ajaxurl, 
			{ 	action:'igp_send_debug_data',
				nonce: instagrate_pro.nonce
			 }, 
			function(data){
				$('#wpbody-content').removeClass('processing');  
				alert(data.message);
			}
		, 'json');
		return false;
	});
	
	// Manual Posting
	 $('#igp-manual-post').on('click', function(){      
        var post_id = $('#post_ID').val();
		var frequency = $('select[name="_instagrate_pro_settings[posting_frequency]"] option:selected').val();
		$('#manual-posting .ig_ajax-loading').show(); 
		$('#igp-images').addClass('processing'); 		
		$.post(ajaxurl, 
			{ 	action:'igp_manual_post',
				post_id:post_id,
				frequency:frequency,
				nonce: instagrate_pro.nonce
			 }, 
			function(data){
				$('#manual-posting .ig_ajax-loading').hide(); 
				$('a.edit-image img.pending').addClass('ignore'); 
				$('a.edit-image img.ignore').removeClass('pending'); 
				if (data.images != null) {
					$.each(data.images, function(key, val) {
						$('a[rel^=' + val.image_id +'] img').attr('class','posted');
					})
				}
				$('#igp-images').removeClass('processing'); 
				image_stats(data.stats);
				alert(data.message);
				
			}
		, 'json');
	});
	
	// Toggle Bulk
	$('#toggle_bulk').on('click', function(){
        if( $(this).is(':checked')) {
			$('#igp-images input[type=checkbox]').attr('checked', true);
		} else {
			$('#igp-images input[type=checkbox]').attr('checked', false);
		}
    });
    
    $('#activate-license').on('click', function(){
	     var license_key = $('input[name="igpsettings_settings[igpsettings_support_license-key]"]').val();
	     if (license_key != '') {
			$('#igp_license .spinner').show();
			document.getElementById("activate-license").disabled = true;
        	$.ajax({
	            url: ajaxurl, 
	            type: 'POST',
	            dataType: 'json',
	            data: { action:'igp_activate_license',
	            		nonce: instagrate_pro.nonce,
	            		license_key: license_key,        		
	            	 }, 
	            success: function(response){
	                if(response.error){
	                    alert(response.message);
	                    $('#igp_license .spinner').hide();
	                    document.getElementById("activate-license").disabled = false;
	                } else {
	                    $('input[name="igpsettings_settings[igpsettings_support_license-status]"]').val(response.license_status);
	                    if (response.license_status == 'activated') window.location = response.redirect;
	                    else {
	                    	alert('License ' + response.license_status);
							$('#igp_license .spinner').hide();
							document.getElementById("activate-license").disabled = false;
	                    }
	                }
	            },
	            error: function(response, status, error){
	            	alert('Error: ' + error.replace(/(<([^>]+)>)/ig,""));
	            	$('#igp_license .spinner').hide();
	            	document.getElementById("activate-license").disabled = false;
	            }
	        });
	      }
	});
	
	$('#deactivate-license').on('click', function(){
		$('#igp_license .spinner').show();
		document.getElementById("deactivate-license").disabled = true;
		$.ajax({
            url: ajaxurl, 
            type: 'POST',
            dataType: 'json',
            data: { action:'igp_deactivate_license',
            		nonce: instagrate_pro.nonce,      		
            	 }, 
            success: function(response){
                if(response.error){
                    alert(response.message);
                    $('#igp_license .spinner').hide();
                    document.getElementById("deactivate-license").disabled = false;
                } else {
                    if (response.license_status == 'deactivated') {
                    	$('input[name="igpsettings_settings[igpsettings_support_license-status]"]').val('');
					}
					window.location = response.redirect;
                }
            },
            error: function(response, status, error){
            	alert('Error: ' + error.replace(/(<([^>]+)>)/ig,""));
            	$('#igp_license .spinner').hide();
            	document.getElementById("deactivate-license").disabled = false;
            }
        });
	      
	});

	

	 	 
});