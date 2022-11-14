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

		$sqlCommand = "CREATE TABLE userInformation(email varchar(255), name varchar(255), surname varchar(255), dateOfBirth varchar(255), gender varchar(255), password_ varchar(255), phone varchar(255), picture varchar(255))";
		callSQL($conn, $sqlCommand);
	}	
		
	function validateUser($conn, $email, $password) {
		$sqlCommand = "USE Users";
		callSQL($conn, $sqlCommand);
		
		$sqlCommand = "SELECT * FROM userInformation WHERE BINARY email='$email' AND password_='$password'";
		if ($conn->query($sqlCommand)->num_rows == 1) {
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

	function validateUser2($conn, $email) {
		$sqlCommand = "USE Users";
		callSQL($conn, $sqlCommand);
		
		$sqlCommand = "SELECT * FROM userInformation BINARY WHERE email='$email'";
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

	createDB($conn);
	
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