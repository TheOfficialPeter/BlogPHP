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

function notify() {
	if (notificationActive == false) {
		notificationActive = true;

		var notificationBox = document.getElementById("notificationBox");
		notificationBox.style.opacity = "1";
		notificationBox.style.bottom = "25px";

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
	var usernameInput = document.getElementById("credInput");
	var passwordInput = document.getElementById("credInput2");

	notify();
}
