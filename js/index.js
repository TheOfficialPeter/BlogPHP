var notificationActive = false;

function editInput(control) {
	var text = control.childNodes[1];
	text.style.transition = "all .2s";
	text.style.opacity = "0";

	setTimeout(function() {
		var inputTextBox = control.childNodes[3];
		inputTextBox.style.zIndex = "1";
		inputTextBox.focus();
			
		inputTextBox.addEventListener('blur', function(event) {
			if (inputTextBox.value == "") {
				inputTextBox.style.zIndex = "-1";
				text.style.opacity = "1";
			}
		});
	},200);
}

function notify(message) {
	if (notificationActive == false) {
		notificationActive = true;

		var notificationBox = document.getElementById("notificationBox");
		notificationBox.style.opacity = "1";
		notificationBox.style.bottom = "25px";

		var notificationMessage = document.getElementById("notificationMessage");
		notificationMessage.innerText = message;

		var notificationTimer = document.getElementById("notificationTimer");
		notificationTimer.style.transition = "all 3s linear";
		notificationTimer.style.marginRight = "100%";

		setTimeout(function() {
			notificationBox.style.opacity = "0";
			notificationBox.style.bottom = "-25px";

			setTimeout(function() {
				notificationTimer.style.transition = "";
				notificationTimer.style.margin = "0";
				notificationActive = false;
			},1000);
		},3000)
	}
}

function login() {
	var usernameInput = document.getElementById("credUsername");
	var passwordInput = document.getElementById("credPassword");

	if (usernameInput.value == "" || passwordInput.value == "") {
		notify("Some fields are empty!");
	}
	else
	{
		$.ajax({
			url: "../index.php",
			type: "post",
			dataType: "json",
			data: {loginUsername: usernameInput.value, loginPassword: passwordInput.value},
			success: function(result) {
				if (result == 0) {
					notify("User does not exist!");
				}
				else
				{
					notify("User found!");
				}
			}
		});
	}

	// php database check
}

function openFiles(control) {
	let input = document.createElement("input");
	input.type = "File";
	
	input.onchange = function(e) {
		let files = Array.from(input.files);
		control.childNodes[1].innerText = files[0].name;
	};

	input.click();
}

function signUp() {
	var pictureInput = document.getElementById("credPicture");
	var emailInput = document.getElementById("credEmail");
	var usernameInput = document.getElementById("credUsername");
	var passwordInput = document.getElementById("credPassword");

	if (usernameInput.value == "" || passwordInput.value == "" || emailInput.value == "" || pictureInput.innerText == "Picture") {
		notify("Some fields are empty!");
	}
	else
	{
		$.ajax({
			url: "../index.php",
			type: "post",
			dataType: "json",
			data: {loginUsername: usernameInput.value, loginPassword: passwordInput.value},
			success: function(result) {
				if (result == 0) {
					notify("User does not exist!");
				}
				else
				{
					notify("User found!");
				}
			}
		});
	}

	// php database check + add 
}

window.onload = function() {
	document.body.style.opacity = "1";
}
