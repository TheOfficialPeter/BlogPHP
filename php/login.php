<?php
	$conn = new mysqli("localhost", "admin", "admin", "Users");
		
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	function callSQL($conn, $sqlCommand) {
		$conn->query($sqlCommand);
	}

	function validateUser($conn, $email, $password) {
		$sqlCommand = "SELECT * FROM userInformation WHERE BINARY email='$email' AND password_='$password'";
		if ($conn->query($sqlCommand)->num_rows == 1) {
			return 1;
		}
		else
		{
			return 0;
		}
	}

	function validateUser2($conn, $email) {
		$sqlCommand = "SELECT * FROM userInformation BINARY WHERE email='$email'";
		if ($conn->query($sqlCommand)->num_rows > 0) {
			return 1;
		}
		else
		{
			return 0;
		}
	}

	$loginEmail = $_POST['loginEmail'];
	$loginPassword = $_POST['loginPassword'];
	
	if (isset($loginEmail) and isset($loginPassword)) {
		if (validateUser($conn, $loginEmail, $loginPassword) == 1) {

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
