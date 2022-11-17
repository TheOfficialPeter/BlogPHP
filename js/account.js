window.onload = function() {
	var savedEmail = window.localStorage.getItem('email');

	$.ajax({
		url: "../PHP/main.php",
		type: "post",
		dataType: "json",
		data: {email: savedEmail},
		success: function(result) {
			if (result == 0) {
				location.href = "../pages/login.html";
			}
		}
	});
	
	document.getElementById('profilePhoto').style.background = "url('../assets/"+window.localStorage.getItem('picture')+"')";
	document.getElementById('profilePhoto').style.backgroundSize = "cover";
	document.getElementById('title').innerText = "Welcome, " + window.localStorage.getItem('name');
	document.body.style.opacity = "1";

	var navItems = document.body.getElementsByClassName("navItem");

	(function() {
		for (let i = 0; i < navItems.length; i++) {
			navItems[i].onmouseover = function(e) {
				navItems[i].style.transition = "all .2s";
				navItems[i].style.padding = "10px";
				navItems[i].style.boxShadow = "0px 0px 20px rgba(0,0,0,.1)";
				navItems[i].style.borderBottom = "4px solid #FF6464";
			}

			navItems[i].onmouseleave = function(e) {
				navItems[i].style.padding = "0px";
				navItems[i].style.boxShadow = "none";
				navItems[i].style.borderBottom = "0";
			}
		}
	})();

	var changeUsernameBox = document.getElementById('changeUsernameBox');
	var changePasswordBox = document.getElementById('changePasswordBox');
	var changePictureBox = document.getElementById('changePictureBox');

	var changeUsername = document.getElementById('changeUsername');
	var changePassword = document.getElementById('changePassword');
	var changePicture = document.getElementById('changePicture');

	changeUsernameBox.onmouseenter = function() {
		changeUsernameBox.style.background = "#FF8D8D";
		changeUsername.style.color = "white";
	}

	changeUsernameBox.onmouseleave = function() {
		changeUsernameBox.style.background = "transparent";
		changeUsername.style.color = "black";
	}

	changePasswordBox.onmouseenter = function() {
		changePasswordBox.style.background = "#FF8D8D";
		changePassword.style.color = "white";
	}

	changePasswordBox.onmouseleave = function() {
		changePasswordBox.style.background = "none";
		changePassword.style.color = "black";
	}

	changePictureBox.onmouseenter = function() {
		changePictureBox.style.background = "#FF8D8D";
		changePicture.style.color = "white";
	}

	changePictureBox.onmouseleave = function() {
		changePictureBox.style.background = "none";
		changePicture.style.color = "black";
	}

	changeUsernameBox.onclick = function() {
		window.localStorage.setItem("change", "name");
		location.href = "../pages/change.html";
	}

	changePasswordBox.onclick = function() {
		window.localStorage.setItem("change", "password");
		location.href = "../pages/change.html";
	}

	changePictureBox.onclick = function() {
		window.localStorage.setItem("change", "picture");
		location.href = "../pages/change.html";
	}

	$.ajax({
		url: "../PHP/account.php",
		type: "post",
		dataType: "json",
		data: {email: window.localStorage.getItem('email')},
		success: function(res) {
			if (res.statusCode == "1" && res.email != "" && res.username != "" && res.number != "") {
				var profileName = document.getElementById('profileName');
				var profileEmail = document.getElementById('profileEmail');
				var profileNumber = document.getElementById('profileNumber');

				profileName.innerText = res.username;
				profileEmail.innerText = res.email;
				profileNumber.innerText = res.number;
			}
		}
	});
}
