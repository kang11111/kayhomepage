<?php get_header(); ?>

<script src="<?php bloginfo('template_directory'); ?>/js/single.js"></script>

<!--post(글) 출력시작-->
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<!--제목-->


<!--post 본문-->
<?php the_content(); ?>


  <!--이전글 목록 다음글-->
  <div class="thumb">
    <div class="thumb_prev">
      <div class="bg"></div>
      <?php $prevPost = get_previous_post(true); if($prevPost) {?>
        <?php $prevthumbnail = get_the_post_thumbnail($prevPost->ID);?>
        <?php previous_post_link('%link',"$prevthumbnail <p><b>previous post</b> %title</p>", TRUE); ?>
      <?php } ?>
    </div><!-- thumb_prev -->

    <div class="thumb_next">
    <div class="bg"></div>
      <?php $nextPost = get_next_post(true); if($nextPost) { ?>
        <?php $nextthumbnail = get_the_post_thumbnail($nextPost->ID);?>
        <?php next_post_link('%link',"$nextthumbnail  <p><b>next post</b> %title</p>", TRUE); ?>
      <?php } ?>
    </div><!-- thumb_next -->
  </div><!-- thumb -->

  <button class="top_button">
    <i class="fas fa-arrow-up"></i>
  </button>


<?php endwhile; else: ?>

<!--글 내용이 없을 경우-->
<?php endif; ?>

<!--post(글) 출력 끝-->


<?php get_footer(); ?>


