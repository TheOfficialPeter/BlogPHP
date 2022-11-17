<?php
	$conn = new mysqli("localhost", "admin", "admin", "Users");

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	function callSQL($conn, $sqlCommand) {
		$conn->query($sqlCommand);
	}

	function addUser($conn, $email, $name, $surname, $dateOfBirth, $gender, $password, $phone, $picture) {
		$sqlCommand = "INSERT INTO userInformation(email, name, surname, dateOfBirth, gender, password_, phone, picture) VALUES('$email', '$name', '$surname', '$dateOfBirth', '$gender', '$password', '$phone', '$picture')";
		callSQL($conn, $sqlCommand);
	}

	function validateUser($conn, $email) {
		$sqlCommand = "SELECT * FROM userInformation WHERE email='$email'";
		if ($conn->query($sqlCommand)->num_rows > 0) {
			return 1;
		}
		else
		{
			return 0;
		}
	}

	$signupEmail = $_POST['signupEmail'];
	$signupName = $_POST['signupName'];
	$signupSurname = $_POST['signupSurname'];
	$signupDateOfBirth = $_POST['signupDateOfBirth'];
	$signupGender = $_POST['signupGender'];
	$signupPhone = $_POST['signupPhone'];
	$signupPicture = $_POST['signupPicture'];

	$randomPass = rand(10000,10000000);
	settype($randomPass, "string");

	$signupPassword = $randomPass;

	if (isset($signupEmail) and isset($signupName) and isset($signupSurname) and isset($signupDateOfBirth) and isset($signupGender) and isset($signupPassword) and isset($signupPhone) and isset($signupPicture))
	{
		if (validateUser($conn, $signupEmail) == 0) {
			addUser($conn, $signupEmail, $signupName, $signupSurname, $signupDateOfBirth, $signupGender, $signupPassword, $signupPhone, $signupPicture);
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
