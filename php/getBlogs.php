<?php
	$randomPost = $_POST['randomPost'];

	if (isset($randomPost)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		$result = $conn->query("SELECT * FROM blogInformation");

		while($row = mysqli_fetch_assoc($result))
		
		$return[] = $row;

		ob_clean();
		echo json_encode($return);
	}
?>
