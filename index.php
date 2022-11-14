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

		$sqlCommand = "CREATE TABLE userInformation(email varchar(255), username varchar(255), password_ varchar(255), phone varchar(255), picture varchar(255))";
		callSQL($conn, $sqlCommand);
	}	
		
	function validateUser($conn, $username, $password) {
		$sqlCommand = "USE Users";
		callSQL($conn, $sqlCommand);
		
		$sqlCommand = "SELECT * FROM userInformation WHERE username='$username' AND password_='$password'";
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

	//createDB($conn);
	
	$loginUsername = $_POST['loginUsername'];
	$loginPassword = $_POST['loginPassword'];
	
	if (isset($loginUsername) and isset($loginPassword)) {
		if (validateUser($conn, $loginUsername, $loginPassword) == 1) {
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
