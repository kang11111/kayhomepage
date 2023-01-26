<?php get_header(); ?>

<div class="projectlist_container">
  <div class="center">
    <ul class="clearfix">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>   
      
      <li>
        <a href="<?php the_permalink(); ?>">
          <figure>
           <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>
          </figure>
          <p class="single_title"><?php the_title(); ?></p>
        </a>
      </li>
      
      <?php endwhile; else: ?>
      <!--카테고리 글이 없는 경우-->
      
      <?php endif; ?>
    </ul>
  </div><!-- center -->
  
  <!--페이징출력시작--> 
  <?php
    global $wp_query;
    $big = 999999999;
    echo paginate_links( array(
      'type'        => 'list',
      'base'        => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
      'format'      => '?paged=%#%',
      'current'     => max( 1, get_query_var('paged') ),
      'total'       => $wp_query->max_num_pages,
      'prev_text'   => __('<'),
      'next_text'   => __('>'),
    ) );
  ?>
  
  <!--페이징출력끝--> 

</div>

<?php get_footer(); ?>