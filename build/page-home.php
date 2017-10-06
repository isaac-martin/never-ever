<?php get_header(); ?>
<div id="wrap-content" class="wrap-content">
  <div id="content" class="site-content">
    <section id="primary" class="content-area">
      <main id="home" class="site-main">
      <section class="slider-wrapper full-height">
        <div class="left-arrow-cont">
          <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/arrow.svg" class="arrow left-arrow">
        </div>
        <div class="right-arrow-cont">
          <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/arrow.svg" class="arrow right-arrow">
        </div>
        <section class="top-slider">
          <?php if( have_rows('slider_content') ):
          while( have_rows('slider_content') ): the_row();
          $img = get_sub_field('slide_hero');
          $cta = get_sub_field('slide_cta');
          $subtext = get_sub_field('slide_second');
          ?>
          <div class="slide">
            <div class="hero-img" style="background-image:url(<?php echo $img ?>)">
              <div class="inner-container">
                <div class="grid-middle">
                  <div class="col">
                    <h2 class="slide-cta">&lrm;"<?php echo $cta ?>"&lrm;</h2>
                    <p class="slide-subtext"><?php echo $subtext ?>&lrm;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
        </section>
      </section>
      </main>
      <main id="our-story" class="site-main">
        <div class="inner-container our-story">
          <div class="grid">
          <div class="col-12">
            <h2 class="center">Our Story</h2>
          </div>
              <div class="col-6_sm-12"><div class="text-light"><?php the_field('our_story_left');?></div></div>
              <div class="col-6_sm-12"><div class="text-light"><?php the_field('our_story_right');?></div></div>
          </div>
        </div>
      </main>
      <main id="what-we-do" class="site-main yellow-bg trigger">
        <div class="inner-container">
          <div class="grid-middle">
            <div class="col-12">
              <h2 class="center">What We Do</h2>
              <p class="tagline center"><?php the_field('what_we_do_tagline');?></p>
            </div>
            <div class="col-4_sm-12">
              <div class="build-wrap">
                <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/building.svg" class="building-icon" />
                <h3 class="icon-title">
                  <?php the_field('building_title'); ?>
                </h3>
                <p class="icon-text">
                    <?php the_field('building_sub'); ?>
                </p>
              </div>
            </div>
            <div class="col-4_sm-12 pad-btm-0 zipper">
                <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/zipper.svg" class="zipper" />
                <div class="zipper-wrap">
                  <h3 class="icon-title">
                    <?php the_field('zipper_title'); ?>
                  </h3>
                  <p class="icon-text">
                      <?php the_field('zipper_sub'); ?>
                  </p>
                </div>
            </div>
            <div class="col-4_sm-12">
              <div class="rocket-wrap">
                <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/rocket.svg" class="rocket-icon" />
                <h3 class="icon-title">
                  <?php the_field('rocket_title'); ?>
                </h3>
                <p class="icon-text">
                    <?php the_field('rocket_sub'); ?>
                </p>
              </div>
            </div>
      </main>
      <main id="how-we-do" class="site-main space">
        <div class="inner-container">
        <div class="grid">
          <div class="col-12">
            <h2 class="center">How We Do It</h2>
          </div>
          <?php if( have_rows('how_we_do_it_icons') ):
          while( have_rows('how_we_do_it_icons') ): the_row();
          $icon = get_sub_field('icon');
          $content = get_sub_field('text');
          ?>
          <div class="col-4_sm-12">
            <img class="how-icon" src="<?php echo $icon ?>">
            <p class="icon-descript center">
              <?php echo $content ?>
            </p>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
      </div>
    </div>
    </main>
    <main id="locations" class="site-main full-height yellow-bg" style="background-image:url(<?php the_field('location_img');?>);">
      <div class="inner-container full-height">
        <div class="grid-middle full-height">
          <div class="col">
            <ul class="location-list">
              <?php if( have_rows('locations') ):
                    while( have_rows('locations') ): the_row();
                    $location = get_sub_field('location');
                  ?>
                  <li class="single-location"><?php echo $location ?> </li>
                  <?php endwhile; ?>
                <?php endif; ?>
                </ul>
          </div>
        </div>
      </div>
  </main>
  <main id="news" class="site-main">
    <div class="inner-container full-height" style="max-width:100vw;">
      <div class="grid-bottom full-height">
        <div class="col-12">
          <h2 class="center">News</h2>
        </div>
        <div class="col-12">
          <?php echo do_shortcode('[custom-twitter-feeds]'); ?>
        </div>
</div>
</div>
  </main>
  <main id="contact" class="site-main contact-wrap">
    <div class="inner-container">
      <div class="grid-middle">
        <div class="col-12">
          <div class="spacer-line"></div>
          <h2 class="center">Your turn to make history</h2>
        </div>

        <div class="col-6_sm-12 form-cont" data-push-left="off-3_sm-0">
          <form action="https://service.capsulecrm.com/service/newlead" method="post" class="contact-form">
            <input type="hidden" name="FORM_ID" value="4b8af561-85cc-4cfe-bd4c-20c1d7345b77">
            <input type="hidden" name="COMPLETE_URL" value="<?php echo get_bloginfo('url') ?>/thanks">
            <input type="hidden" name="TAG" value="Lead">
            <input type="hidden" name="TAG" value="BlackboxInc Lead">
            <input type="text" name="FIRST_NAME" placeholder="Your First Name">
            <input type="text" name="LAST_NAME" placeholder="Your Last Name">
            <input type="text" name="ORGANISATION_NAME" placeholder="Your Company">
            <input type="text" name="PHONE" placeholder="Your Phone Number">
            <input type="text" name="EMAIL" placeholder="enteryour@email.com" class="email">
            <input type="submit" value="Submit" class="form-btn">
          </form>
        </div>
      </div>
    </div>
  </main>
</section>
</div>
</div>
<?php get_footer(); ?>
