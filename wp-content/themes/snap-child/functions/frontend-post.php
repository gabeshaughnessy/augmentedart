<?php 
//Front End Updates to USER Meta with Ajax: https://patrickshampine.com/2014/updating-user-meta-admin-ajax-frontend/
add_action( 'wp_ajax_submit_checkboxes', 'updateCheckboxes' );
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

  if(empty($_POST) || !isset($_POST)) {

    ajaxStatus('error', 'Nothing to update.');

  } else {

    $data = $_POST;
    error_log(print_r($data, true));

    $dataString = $data['post'];
    parse_str($dataString, $dataArray);

    $nonce = $data['nonce'];

    if(wp_verify_nonce($nonce, 'checkbox') !== false) {

      $user_ID = get_current_user_id();

      $dataArray['first_checkbox'] = isset($dataArray['first_checkbox']) ? true : false;
      $dataArray['second_checkbox'] = isset($dataArray['second_checkbox']) ? true : false;
      $dataArray['third_checkbox'] = isset($dataArray['third_checkbox']) ? true : false;

      if($user_ID != NULL) {
        foreach($dataArray as $key=>$value) {

          $status = update_user_meta($user_ID, $key, $value);

        }

        ajaxStatus('success', 'Meta fields updated.', $dataArray);

      } else {
        ajaxStatus('error', 'You are unauthorized to perform this action.', $dataArray);
      }

    } else {

      ajaxStatus('error', 'Nonce check cannot fail.');

    }

  }

}
?>