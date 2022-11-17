<?php
	$email = $_POST['email'];
	$name = $_POST['name'];
	
	if (isset($email)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		
		try {
			$conn->query("UPDATE userInformation SET name='".$name."' WHERE BINARY email='".$email."'");
			echo "1";
		}
		catch(Exception $e) {
			echo $e;
		}
	}
?>
