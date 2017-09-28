<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title><?php wp_title( '-', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php wp_head(); ?>
<body <?php body_class(); ?>>
    <div id="wrap-header" class="wrap-header">
      <header id="masthead" class="site-header">
          <div class="inner-container">
              <button id="responsive-menu-toggle"><span></span><span></span><span></span></button>
              <a class="thanks-logo" href="<?php echo get_bloginfo('url') ?>">
                <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/logo.svg" class="header-logo" />
              </a>
              <a class="home-logo" href="#home">
                <img src="<?php bloginfo('template_directory'); ?>/imgs/icons/logo.svg" class="header-logo" />
              </a>
              <nav id="site-navigation" class="site-navigation">
                <div id="responsive-menu"><?php wp_nav_menu( array( 'theme_location' => 'header', 'menu_id' => 'menu-header', 'menu_class' => 'menu-inline' ) ); ?></div>
              </nav>
          </div>
      </header>
    </div>
