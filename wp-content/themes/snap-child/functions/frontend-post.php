<?php 
//Front End Updates to USER Meta with Ajax: https://patrickshampine.com/2014/updating-user-meta-admin-ajax-frontend/
add_action( 'wp_ajax_submit_checkboxes', 'updateCheckboxes' );
add_action( 'wp_ajax_nopriv_submit_checkboxes', 'updateCheckboxes' );
function checkbox_scripts() {
  $parameters = array(
    'ajaxurl' => admin_url('admin-ajax.php'),
    'nonce' => wp_create_nonce('checkbox')
  );
 
  wp_enqueue_script('checkbox-ajax', get_bloginfo("stylesheet_directory").'/js/ajax.js', array('jquery'), null, true);
  wp_localize_script('checkbox-ajax', 'checkbox', $parameters );
 
}
add_action('wp_enqueue_scripts', 'checkbox_scripts');

function ajaxStatus($status, $message, $data = NULL) {

  $response = array (
    'status' => $status,
    'message' => $message,
    'data' => $data
    );
  $output = json_encode($response);

  exit($output);

}

function updateCheckboxes() {
echo '<script>alert("fuction_ran"');'</script>';
  if(empty($_POST) || !isset($_POST)) {

    ajaxStatus('error', 'Nothing to update.');

  } else {
    $user_agent = $_SERVER['HTTP_USER_AGENT'];
    $data = $_POST;
    

    $dataString = $data['post'];
    parse_str($dataString, $dataArray);

    

      $dataArray['user_id'] = isset($dataArray['user_id']) ? $dataArray['user_id'] : NULL;

      $dataArray['user_agent'] = isset($user_agent) ? $user_agent : NULL;
      $dataArray['response_action'] = isset($data['action']) ? $data['action'] : NULL;

      $dataArray['first_checkbox'] = isset($dataArray['first_checkbox']) ? true : false;
      $dataArray['second_checkbox'] = isset($dataArray['second_checkbox']) ? true : false;
      $dataArray['third_checkbox'] = isset($dataArray['third_checkbox']) ? true : false;

      if($dataArray['user_id']!= NULL) {
        foreach($dataArray as $key=>$value) {

          $status = update_user_meta($dataArray['user_id'], $key, $value);

        }

        ajaxStatus('success', 'Meta fields updated.', $dataArray);

      } else {
        ajaxStatus('error', 'You are unauthorized to perform this action.', $dataArray);
      }
  }

}
?>