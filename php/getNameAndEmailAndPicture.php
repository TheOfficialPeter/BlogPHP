<?php
	$email = $_POST['email'];

	if (isset($email)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		$result = $conn->query("SELECT * FROM userInformation WHERE BINARY email='".$email."'");
		$row = mysqli_fetch_row($result);

		$result->username = $row[1];
		$result->email = $row[0];
		$result->picture = $row[4];

		ob_clean();
		echo json_encode($result);
	}
?>
