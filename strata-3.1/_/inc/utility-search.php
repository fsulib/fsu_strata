<form class="headerSearchForm" method="get" onsubmit="return FSU_search(type.value, FSU_URLEncode(keywords.value));" action="">
	<select name="type" title="Select Search Type" class="headerSearchSelect s3-m-3" style="height:27px">
    	<option selected="selected" value="GOOGLE">FSU Sites</option>
		<option value="PHFST">Student Directory</option>
		<option value="PHF">Faculty &amp; Staff Directory</option>
		<option value="DEPT">Departments &amp; Services</option>
	</select>
	<br class="visible-sm" />
    <input type="text" name="keywords" value="" title="Search Input Box" size="20" class="headerSearchBox" />
	<input type="submit" name="fsuSearch" value="Search" title="Submit Search" class="headerSearchBtn btn btn-sm btn-success s3-m-3" />
</form>
