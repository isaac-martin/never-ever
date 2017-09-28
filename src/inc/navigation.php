<?php // ==== NAVIGATION ==== //

// Post navigation, a bare bones implementation
if ( !function_exists( 'never_ever_post_navigation' ) ) : function never_ever_post_navigation() {
  ?><nav class="nav-posts" role="navigation">
    <div class="nav-links">
    <?php if ( get_previous_posts_link() ) { ?>
      <div class="nav-previous prev-page">
        <?php previous_posts_link( __( '<span class="nav-arrow">&larr; </span>Previous', 'never_ever' ) ); ?>
      </div>
    <?php } if ( get_next_posts_link() ) { ?>
      <div class="nav-next next-page">
        <?php next_posts_link( __( 'Next<span class="nav-arrow"> &rarr;</span>', 'never_ever' ) ); ?>
      </div>
    <?php } ?>
    </div>
  </nav><?php
} endif;
