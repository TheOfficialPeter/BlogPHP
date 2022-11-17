<?php
	$email = $_POST['email'];
	$picture = $_POST['picture'];
	
	if (isset($email)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		
		try {
			$conn->query("UPDATE userInformation SET picture='".$picture."' WHERE BINARY email='".$email."'");
			echo "1";
		}
		catch(Exception $e) {
			echo $e;
		}
	}
?>
