<?php get_header(); ?>

<div class="preloader">
  <div class="loader">
    <div class="bar">
        <div class="loaded"></div>
    </div><!-- bar -->
  </div><!-- loader -->
  <div class="loader_circle_container">
    <div class="loader_circle">
      <span class="letters-container">
        <span class="letters letters-left"><img src="<?php bloginfo('template_directory'); ?>/img/home/76logo_white.png" alt=""></span>
        <span class="letters bang">!</span>
      </span>
      <span class="circle circle-white"></span>
      <span class="circle circle-dark"></span>
      <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
    </div><!-- loader_circle -->
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
</div><!-- preloader -->
<script src='https://i.koya.io/kpt.js'></script>
<script src="<?php bloginfo('template_directory'); ?>/js/loader.js"></script>

<?php include(TEMPLATEPATH.'/index.php'); ?>

<?php get_footer(); ?>