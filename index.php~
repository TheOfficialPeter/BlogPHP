<?php
	$conn = new mysqli("localhost", "admin", "admin");
		
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	function callSQL($conn, $sqlCommand) {
		$conn->query($sqlCommand);
	}

	function createDB($conn) {
		$sqlCommand = "CREATE DATABASE Users";
		callSQL($conn, $sqlCommand);
		
		$conn = new mysqli("localhost", "admin", "admin", "Users");

		$sqlCommand = "CREATE TABLE userInformation(email varchar(255), username varchar(255), password varchar(255), phone varchar(255), picture varchar(255))";
		callSQL($conn, $sqlCommand);
	}	

	function addUser($conn, $email, $username, $password, $phone, $picture) {
		$sqlCommand = "INSERT INTO userInformation(email, username, password, phone, picture) VALUES('$email', '$username', '$password', '$phone', '$picture')";
		callSQL($conn, $sqlCommand);
	}	
		
	function validateUser($conn, $username, $password) {
		$sqlCommand = "USE Users";
		callSQL($conn, $sqlCommand);
		
		$sqlCommand = "SELECT * FROM userInformation WHERE username='$username' AND password='$password'";
		if ($conn->query($sqlCommand)->num_rows > 0) {
			//echo json_encode(array('code'=>'1'));
			ob_clean();
			echo "1";
		}
		else
		{
			ob_clean();
			echo "0";
			//echo json_encode(array('code'=>'0'));
		}
	}

	//createDB($conn);
	
	if (isset($_POST['loginUsername']) and isset($_POST['loginPassword'])) {
		validateUser($conn, $_POST['loginUsername'], $_POST['loginPassword']);
	}

	if (isset($_POST['signupEmail']) and isset($_POST['signupUsername']) and isset($_POST['signupPassword']) and isset($_POST['signupPhone']) and isset($_POST['signupPicture'])) {
		if (validateUser($conn, $_POST['signupUsername'], $_POST['signupPassword']) == "0") {
			addUser($conn, $_POST['singupEmail'], $_POST['signupUsername'], $_POST['signupPassword'], $_POST['signupPhone'], $_POST['signupPicture']);
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
