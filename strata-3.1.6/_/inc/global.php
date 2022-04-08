	<div id="fsu-global" class="s3 s3-<?php echo $vars['fsu-global']; ?> s3-scored s3-plain-top s3-p-2">
		<div class="container">
			<div class="row">

				<div id="fsu-home" class="col-xs-7 col-sm-5"><p><a href="https://www.fsu.edu/">Florida State University</a></p></div>
				<div id="fsu-top" class="col-xs-7 col-sm-8 hidden small text-uppercase"><p><a href="https://fsu.edu">FSU</a> | <a href="/"><?php echo _SITE_TITLE; ?></a></p></div>
 				<div id="fsu-nav-utility" class="col-xs-5 col-sm-5 col-sm-offset-2">
<?php $vars = processInclude('navigation-utility', $vars); ?>
				</div>

			</div>
		</div>
	</div><!-- fsu-global -->

	<div id="fsu-utility" class="s3 s3-<?php echo $vars['fsu-utilities']; ?> fsu-utilities">

		<div id="fsu-search" class="collapse" aria-expanded="false">
			<div class="container">
				<div class="s3-m-8">
					<div class="row">
						<div class="col-md-5 col-md-offset-7">

							<div class="row">
								<div class="col-sm-12 small text-right">
<?php $vars = processInclude('utility-search', $vars); ?>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div><!-- fsu-search -->

		<div id="fsu-global-nav" class="collapse" aria-expanded="false">
			<div class="container text-center small">

				<div class="clearfix s3-p-5"></div>

				<div class="row s3-m-10 s3-m-t0">
					<div class="col-xs-12">

						<div class="row s3-bg-<?php echo $vars['fsu-utilities']; ?>">
							<div class="col-xs-6 visible-xs col-sm-12 text-left">

								<nav class="fsu-nav-global">
<?php $vars = processInclude('navigation', $vars); ?>
								</nav>
							</div>

							<div class="col-xs-6 col-sm-12 fsu-global-menu">

								<nav class="fsu-nav-global text-uppercase">
<?php $vars = processInclude('utility-global', $vars); ?>
								</nav>

							</div>
						</div>

					</div>
				</div>

			</div>
		</div><!-- fsu-global-nav -->

	</div><!-- .fsu-utilities -->

