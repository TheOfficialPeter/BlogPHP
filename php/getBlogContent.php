<?php
	$blogTitle = $_POST['blogTitle'];

	if (isset($blogTitle)) {
		$conn = new mysqli("localhost", "admin", "admin", "Users");
		$result = $conn->query("SELECT * FROM blogInformation WHERE BINARY blogTitle='$blogTitle'");
		
		$return = mysqli_fetch_row($result);

		ob_clean();
		echo json_encode($return);
	}
?>
