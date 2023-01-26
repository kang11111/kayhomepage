<?php get_header(); ?>

<script src="<?php bloginfo('template_directory'); ?>/js/category-projectsite.js"></script>
<div class="projectsite">
  <ul class="img_container">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <li>
      <figure class="top"><span></span></figure>
      <figure class="bottom"><span></span></figure>
      <div class="title"><?php the_title(); ?></div>
      <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>

      <div class="arrowbox">
        <a class="arrow" href="<?php the_permalink(); ?>">
          <div>
            <p><?php the_title(); ?><br>view</p>
            <span class="arrow_top"></span>
            <span class="arrow_center"></span>
            <span class="arrow_bottom"></span>
            <div class="arrow_circle"></div>
          </div>
        </a><!-- arrow -->
      </div><!-- arrowbox -->
    </li><!-- li.box* -->

    <?php endwhile; else: ?>
    <?php endif; ?>
  </ul><!-- img_container -->

  <div class="number_container">
    <span></span>
    <b>project</b>
    <p class="number">
      <span class="num1">1</span>
      <span class="num2">0</span>
    </p>
  </div><!-- number_container -->

  <div class="name_continaer">
    <p>cms 웹앱 etc. Project</p>
  </div><!-- name_contianer -->


  <div class="circle_container">
    <ul class="list_container">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <li draggable="false">
        <?php the_title(); ?>
      </li>
      <?php endwhile; else: ?>
      <?php endif; ?>
    </ul><!-- list_container -->
    <a href="/category/projectlist/">
      <?php include "svg_projectsite.html"?>
      <p>All projects</p>
    </a>
  </div><!-- circle_container -->

  <div class="circle_project">
    <?php include "polygon2.html"?>
    <div>
      <p>web<br>copy</p>
    </div>
  </div><!-- circle_project -->

</div><!-- projectsite2 -->

<?php get_footer(); ?>