<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <title><?php bloginfo('name'); ?> <?php wp_title('|'); ?></title>
  <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous"> 
  <link rel="stylesheet" href="http://fonts.googleapis.com/earlyaccess/nanumgothic.css">
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/reset.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/loader.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/header.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/home.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/page-contact.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/category-projectlist.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/category-projectsite.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/single.css">
  <script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/jquery.mousewheel.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/morphsvg.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/tweenmax.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/common.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/header.js"></script>
    
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


<header>
  <h1><a href="/page/home"><span>아영</span><img src="<?php bloginfo('template_directory'); ?>/img/home/76logo2.png" alt=""></a></h1><!-- img 수정 -->
  <div class="gnb_dummy1"></div>
  <div class="gnb_dummy2"></div>
  <nav class="gnb">
    <!-- div>ul>li -->
    <?php
      wp_nav_menu( array(
        'theme_location' => 'menu'
      ));
    ?>
  </nav><!-- gnb -->
  
</header>

<button class="gnb_btn">
<span class="gnb_open1"></span>
<span class="gnb_open2"></span>
<span class="gnb_open3"></span>
</button>
