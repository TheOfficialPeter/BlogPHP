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
	var emailInput = document.getElementById("credEmail");
	var passwordInput = document.getElementById("credPassword");

	if (emailInput.value == "" || passwordInput.value == "") {
		notify("Some fields are empty!");
	}
	else
	{
		$.ajax({
			url: "../index.php",
			type: "post",
			dataType: "json",
			data: {loginEmail: emailInput.value, loginPassword: passwordInput.value},
			success: function(result) {
				if (result == 0) {
					notify("User does not exist!");
				}
				else
				{
					notify("Welcome back!");
					
					setTimeout(function() {
						$.ajax({
							url: "../getName.php",
							type: "post",
							dataType: "json",
							data: {email: emailInput.value},
							success: function(res) {
								location.href = "./main.html";
							}
						});
					},3000);
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
	var phoneInput = document.getElementById("credPhone");
	var pictureInput = document.getElementById("credPicture");
	var emailInput = document.getElementById("credEmail");
	var nameInput = document.getElementById("credName");
	var surnameInput = document.getElementById("credSurname");
	var genderInput = document.getElementById("credGender");
	var dateOfBirthInput = document.getElementById("credDateOfBirth");

	if (emailInput.value == "" || nameInput.value == "" || surnameInput.value == "" || dateOfBirthInput.value == "" || genderInput.value =="" || phoneInput.value == "" || pictureInput.innerText == "Picture") {
		notify("Some fields are empty!");
		notificationActive = false;
	}
	else
	{
		$.ajax({
			url: "../signup.php",
			type: "post",
			dataType: "json",
			data: {signupEmail: emailInput.value, signupName: nameInput.value, signupSurname: surnameInput.value, signupDateOfBirth: dateOfBirthInput.value, signupGender: genderInput.value, signupPhone: phoneInput.value, signupPicture: pictureInput.innerText},
			success: function(result) {
				if (result == 1) {
					notify("Account created!");
					
					setTimeout(function() {
						location.href = "../pages/index.html";
					},3000);
				}
				else
				{
					notify("Account exists!");
				}
			}
		});
	}
}

window.onload = function() {
	document.body.style.opacity = "1";
}
