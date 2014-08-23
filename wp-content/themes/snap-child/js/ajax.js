jQuery(document).ready(function($) {

  var response;

  $('#checkbox').on('submit',function(e) {

    e.preventDefault();
   
    $.post( checkbox.ajaxurl, {
          action : 'submit_checkboxes',
          nonce : checkbox.nonce,
          post : $(this).serialize()
      },
      function(response) {
          console.log(response);
          responseSuccess(response);
      });

    return false;

  });

  function responseSuccess(data) {

    response = JSON.parse(data);

    if(response.status === 'success') {
      $('#checkbox-message').text(response.message);
    } else {
      $('#checkbox-message').text(response.message);
    }

  }

//just a button, no form?
$('#testbutton').on('click touch', function(e){
  e.preventDefault();
  $.post( checkbox.ajaxurl, {
            action : 'submit_checkboxes',            
            post : "user_id=4&second_checkbox=true"
        },
        function(response) {
            alert('this '+this.data+'  response '+response);
            responseSuccess(response);
        });

      return false;

  });

});

