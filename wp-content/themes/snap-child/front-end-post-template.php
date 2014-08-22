<?php
/**
 * Template Name: Front-end Post Template
 * @package Snap
 */
?>
<?php get_header(); ?>

    <form id="checkbox" method="POST">
      <label for="first_checkbox"><input type="checkbox" id="first_checkbox" name="first_checkbox">First Checkbox</label>
      <label for="second_checkbox"><input type="checkbox" id="second_checkbox" name="second_checkbox">Second Checkbox</label>
      <label for="third_checkbox"><input type="checkbox" id="third_checkbox" name="third_checkbox">Third Checkbox</label>
     <label for="user_id"> <input type="text" id="user_id" name="user_id" value="4">User ID</label>
      <button type="submit">Send</button>
    </form>

    <p id="checkbox-message"></p>

    <button id="testbutton"><h1>Big Button</h1></button>

<?php get_footer();