<?php
	$conn = new mysqli("localhost", "admin", "admin", "Users");

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$blogTitle = $_POST['blogTitle'];
	$blogDescription = $_POST['blogDescription'];
	$blogPicture = $_POST['blogPicture'];
	$blogContent = $_POST['blogContent'];

	if (isset($blogTitle) and isset($blogDescription) and isset($blogPicture) and isset($blogContent))
	{
		try{
			$result = $conn->query("INSERT INTO blogInformation(blogTitle, blogDescription, blogPicture, blogContent) VALUES('$blogTitle', '$blogDescription', '$blogPicture', '$blogContent')");
			if ($result == true) {
				echo "1";
			}
			else
			{
				echo "0";
			}
		}
		catch(Exception $e)
		{
			echo $e;
		}
	}
?>
