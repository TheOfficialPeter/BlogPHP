<?php
	$email = $_POST['email'];

	if (isset($email)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		$result = $conn->query("SELECT * FROM userInformation WHERE email='".$email."'");
		$row = mysqli_fetch_row($result);

		setcookie('name', $row[1]);	

		ob_clean();
		echo "1";
	}
?>
