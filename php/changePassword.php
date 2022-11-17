<?php
	$email = $_POST['email'];
	$password = $_POST['password'];
	
	if (isset($email)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		
		try {
			$conn->query("UPDATE userInformation SET password_='".$password."' WHERE BINARY email='".$email."'");
			echo "1";
		}
		catch(Exception $e) {
			echo $e;
		}
	}
?>
