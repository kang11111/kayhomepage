<?php
register_nav_menus( array(
  'menu' => 'menu',
));

add_theme_support( 'post-thumbnails' );

remove_filter('the_content', 'wpautop');
?>