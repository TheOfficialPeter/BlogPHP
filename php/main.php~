<?php
	$email = $_POST['email'];

	if (isset($email)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		
		$sqlCommand = "SELECT * FROM userInformation BINARY WHERE email='$email'";
		if ($conn->query($sqlCommand)->num_rows > 0) {
			echo "1";
		}
		else
		{
			echo "0";
		}
	}
?>
