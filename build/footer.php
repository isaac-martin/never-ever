
      <div id="wrap-footer" class="wrap-footer">
        <footer id="colophon" class="site-footer">
          <div class="grid-middle">
            <div class="col-8_sm-12">
              <nav id="site-footer-navigation">
              <?php wp_nav_menu( array( 'theme_location' => 'header', 'menu_id' => 'menu-footer', 'menu_class' => 'menu-inline' ) ); ?>
              </nav>
            </div>
            <div class="col-4_sm-12">
              <div class="social-wrap">
                <span class="footer-text">Follow Us : </span>
                <ul class="social-list">
                  <li><a href="//linkedin.com" target="blank"><img src="<?php bloginfo('template_directory'); ?>/imgs/icons/linkedin.svg"></a></li>
                    <li><a href="//twitter.com" target="blank"><img src="<?php bloginfo('template_directory'); ?>/imgs/icons/twitter.svg"></a></li>
                </ul>
              </div>
            </div>
          </div>

        </footer>
      </div>
  <?php wp_footer(); ?>
  </body>
</html>
