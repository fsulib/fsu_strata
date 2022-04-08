


<header id="fsu-header">
	<a href="#content" class="sr-only sr-only-focusable">Skip to main content</a>

<?php $vars = processInclude('global', $vars); ?>

	<a href="#content" class="sr-only sr-only-focusable">Skip to main content</a>
	<div id="fsu-masthead" class="s3 s3-<?php echo $vars['fsu-masthead']; ?> s3-scored">
		<div class="container">
			<div class="row hidden-xs">
				<div class="col-xs-12">
					<a href="http://www.fsu.edu/"><img src="https://www.fsu.edu/_/s3/img/fsu-seals/fsu-seal-<?php print _SEAL; ?>-160x160.png" alt="Florida State University Seal" id="fsu-seal"></a>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<h1 id="fsu-title"><a href="/"><?php echo _SITE_TITLE; ?></a></h1>
<?php
if (_SITE_SUBHEADING != '') {
	echo '					<p id="fsu-subheading">' . _SITE_SUBHEADING . '</p>';
}
?>

				</div>
			</div>
		</div>
	</div><!-- fsu-masthead -->

<?php $vars = processInclude('navigation-primary', $vars); ?>

	<div id="content" class="s3 s3-<?php echo $vars['fsu-content']; ?>">
		<img src="/img/pixel-blink.gif" alt="" class="styleguide-slider-home" />
	</div>

</header>


