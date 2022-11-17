<?php
	$email = $_POST['email'];
	
	if (isset($email)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		$result = $conn->query("SELECT * FROM userInformation WHERE BINARY email='".$email."'");

		try{
			$row = mysqli_fetch_row($result);
			
			$return = array(
				"statusCode" => "1",
				"username" => $row[1],
				"email" => $row[0],
				"number" => $row[6]
			);

			echo json_encode($return);
		}
		catch (Exception $e) {
			$return = array(
				"statusCode" => "0"
			);

			echo json_encode($return);
		}
	}
?>
