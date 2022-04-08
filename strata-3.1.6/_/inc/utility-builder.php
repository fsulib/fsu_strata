<?php

function sgPredefined() {
	$predefined = array (
		'default' => 'Default',
		'alpha'   => 'Alpha',
		'bravo'   => 'Bravo',
		'charlie' => 'Charlie',
		'delta'   => 'Delta',
		'echo'    => 'Echo',
		'foxtrot' => 'Foxtrot',
		'golf'    => 'Golf',
		'hotel'   => 'Hotel',
		'india'   => 'India',
		'juliet'  => 'Juliet',
	);

	$list = '';
	$list .= '<select name="vars">' . "\n";
	foreach ($predefined as $key => $value) {
		$list .= '<option value="' . $key . '"';
		if (isset($_POST['vars'])) {
			if ($_POST['vars'] == $key) {
				$list .= ' selected="selected"';
			}
		}
		$list .= '">' . $value . '</option>';
	}
	$list .= '</select>' . "\n";

	echo $list;
}



function sgDefined($vars, $name='') {
	$colors = array (
		'gt'   => 'Garnet',
		'gd'   => 'Gold',
		'gd1c' => 'Gold+1C',
		'gd2c' => 'Gold+2C',
		'gd3c' => 'Gold+3C',
		'c'    => 'Canvas',
		'w'    => 'White',
		'n2w'  => 'Neutral+2C',
		'n1w'  => 'Neutral+1C',
		'n'    => 'Neutral',
		'n1s'  => 'Neutral+1S',
		'n2s'  => 'Neutral+2S',
		's'    => 'Slate',
		'k'    => 'Black',
	);

	$list = '';
	$list .= '<select name="' . $name . '">' . "\n";
	foreach ($colors as $key => $value) {
		$list .= '<option value="' . $key . '"';
		if ($vars[$name] == $key) {
			$list .= ' selected="selected"';
		}
		$list .= '">' . $value . '</option>';
	}
	$list .= '</select>' . "\n";

	echo $list;
}

?>
<div class="row">
	<div class="col-xs-12">
		<p class="h3 s3-m-t0">Style Guide Preview</p>
	</div>
</div>

<div class="row small">
	<div class="col-xs-12 col-sm-6 col-md-4">

		<p class="h6">Select a Predefined Theme</p>
<form method="post" action="">
	<?php sgPredefined(); ?>
	<br class="visible-sm" />
	<input type="submit" class="btn btn-xs btn-success s3-m-3" name="submitvars" value="Update" />
</form>

	</div>

	<div class="col-xs-12 col-sm-6 col-md-8">
		<br class="visible-xs">
		<p class="h6">Update Specific Layers</p>
<form method="post" action="">

		<div class="row">
			<div class="col-sm-6">
				<table class="table table-condensed s3-m-b0">
					<tbody>
						<tr>
							<td>Global/Utility</td>
							<td><?php sgDefined($vars, 'fsu-global'); ?></td>
						</tr>
						<tr>
							<td>Masthead</td>
							<td><?php sgDefined($vars, 'fsu-masthead'); ?></td>
						</tr>
						<tr>
							<td>Navigation</td>
							<td><?php sgDefined($vars, 'fsu-nav-primary'); ?></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-sm-6">
				<table class="table table-condensed s3-m-b0">
					<tbody>
						<tr>
							<td>Content</td>
							<td><?php sgDefined($vars, 'fsu-content'); ?></td>
						</tr>
						<tr>
							<td>Footer/Body</td>
							<td><?php sgDefined($vars, 'fsu-footer'); ?></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

	<br class="visible-sm" />
	<input type="submit" class="btn btn-xs btn-success s3-m-3" name="submitvars" value="Update" />
</form>
		<br />
	</div>

</div>
