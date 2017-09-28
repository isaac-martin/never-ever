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
        <section class="top-slider" dir="rtl">
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
        <section class="bottom-slider" >
          <?php if( have_rows('slider_content') ):
          while( have_rows('slider_content') ): the_row();
          $icon = get_sub_field('icon');
          $iconintro = get_sub_field('icon_title');
          $icontext = get_sub_field('icon_text');
          ?>
          <div class="slide bg-col-slide">
            <div class="inner-container">
              <div class="grid-middle">
                <div class="col-2">
                  <img src="<?php echo $icon ?>" class="slider-icon">
                </div>
                <div class="col-10">
                  <h3 class="colr-slide-intro"><?php echo $iconintro ?></h3>
                  <p class="colr-slide-text"><?php echo $icontext ?></p>
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
        <div class="inner-container">
          <div class="grid">
          <div class="col-12">
            <h2>Our Story</h2>
          </div>
              <div class="col-6"><div class="text-light"><?php the_field('our_story_left');?></div></div>
              <div class="col-6"><div class="text-light"><?php the_field('our_story_right');?></div></div>
          </div>
        </div>
      </main>
      <main id="what-we-do" class="site-main grey-bg trigger">
        <div class="inner-container">
          <div class="grid-middle">
            <div class="col-12">
              <h2 class="center">What We Do</h2>
              <p class="tagline center"><?php the_field('what_we_do_tagline');?></p>
            </div>
            <div class="col-2" data-push-left="off-1">
              <div class="build-wrap">
                <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/building.svg" class="building-icon" />
                <p class="icon-text">
                  Institutions
                </p>
              </div>
            </div>
            <div class="col-4 pad-btm-0" data-push-left="off-1">
                <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/zip-down.svg" class="zipper" />
            </div>
            <div class="col-2" data-push-left="off-1">
              <div class="rocket-wrap">
                <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/rocket.svg" class="rocket-icon" />
                <p class="icon-text">
                  Fintech's
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
          <div class="col-4">

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
    <main id="locations" class="site-main full-height bg-img" style="background-image:url(<?php the_field('location_img');?>);">
      <div class="inner-container full-height">
        <div class="grid-bottom full-height">
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
    <div class="inner-container full-height">
      <div class="grid-bottom full-height">
        <div class="col">
          <h2 class="center">News</h2>
<?php echo do_shortcode('[custom-twitter-feeds]');?>
</div>
</div>
</div
  </main>
  <main id="contact" class="site-main contact-wrap">
    <div class="inner-container">
      <div class="grid-middle">
        <div class="col-12">
          <div class="spacer-line"></div>
          <h2 class="center">Your turn to make history</h2>
        </div>

        <div class="col-6 form-cont" data-push-left="off-3">
          <form action="https://service.capsulecrm.com/service/newlead" method="post" class="contact-form">
            <input type="hidden" name="FORM_ID" value="b4ba4d73-266c-4aba-acd8-eef442773654">
            <input type="hidden" name="COMPLETE_URL" value="<?php echo get_bloginfo('url') ?>/thanks">
            <input type="hidden" name="DEVELOPER" value="true">
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
