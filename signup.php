<?php
	$conn = new mysqli("localhost", "admin", "admin");

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	function callSQL($conn, $sqlCommand) {
		$conn->query($sqlCommand);
	}

	function addUser($conn, $email, $username, $password, $phone, $picture) {
		$sqlCommand = "USE Users";
		callSQL($conn, $sqlCommand);

		$sqlCommand = "INSERT INTO userInformation VALUES('$email', '$username', '$password', '$phone', '$picture')";
		callSQL($conn, $sqlCommand);
	}

	function validateUser2($conn, $email) {
		$sqlCommand = "USE Users";
		callSQL($conn, $sqlCommand);
		
		$sqlCommand = "SELECT * FROM userInformation WHERE email='$email'";
		if ($conn->query($sqlCommand)->num_rows > 0) {
			//echo json_encode(array('code'=>'1'));
			ob_clean();
			return 1;
		}
		else
		{
			ob_clean();
			return 0;
			//echo json_encode(array('code'=>'0'));
		}
	}

	$signupEmail = $_POST['signupEmail'];
	$signupUsername = $_POST['signupUsername'];
	$signupPassword = $_POST['signupPassword'];
	$signupPhone = $_POST['signupPhone'];
	$signupPicture = $_POST['signupPicture'];

	if (isset($signupEmail) and isset($signupUsername) and isset($signupPassword) and isset($signupPhone) and isset($signupPicture))
	{
		if (validateUser2($conn, $signupEmail) == 0) {
			addUser($conn, $signupEmail, $signupUsername, $signupPassword, $signupPhone, $signupPicture);
			ob_clean();
			echo "1";
		}
		else
		{
			ob_clean();
			echo "0";
		}
	}
?>
