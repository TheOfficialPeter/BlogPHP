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

	document.getElementById('title').innerText = "Welcome, " + window.localStorage.getItem('name');
	document.body.style.opacity = "1";
	
	var changeOption = window.localStorage.getItem('change');
	var navItems = document.body.getElementsByClassName("navItem");

	document.getElementById('pageTitle').innerText = "Change " + changeOption;

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

	var input1 = document.getElementById("input1");
	var input2 = document.getElementById("input2");

	var input1Lbl = document.getElementById("input1Lbl");
	var input2Lbl = document.getElementById("input2Lbl");

	var submit = document.getElementById("submitBtn");
	var submitLbl = document.getElementById("submitLbl");

	// Fun fact
	// Below you will see I use a different method for making the custom text input boxes compared to the ones on the sign up page.
	// The ones on the sign up page has fixed input boxes that changes z-index to give the illusion of changing states.
	// The custom input boxes on this page uses dynamically inserted input boxes to change states. It was a bit more challenging to make.
	if (changeOption != "picture") {
		input1Lbl.innerText = "New " + window.localStorage.getItem('change');
		input2Lbl.innerText = "Repeat " + window.localStorage.getItem('change');

		input1.onclick = function() {
			if (input1Lbl.innerText.length > 0) {
				input1Lbl.style.opacity = "0";
				
				setTimeout(function() {
					input1Lbl.innerText = "";
					
					// This is the part where the input boxes are created. This happens each time the user clicks on the main box.
					var newInput = document.createElement("input");
					newInput.style = "text-align: center; outline: 0; border: 0; background: transparent; color: black; font-family: 'Roboto'; font-size: 20px; position: absolute; left: 0; right: 0; top: 0; bottom: 0;";
					newInput.id = "newInput1";

					input1.appendChild(newInput);
					newInput.focus();

					newInput.addEventListener("blur", function() {
						if (newInput.value.length == 0) {
							input1Lbl.innerText = "New " + window.localStorage.getItem('change');
							input1Lbl.style.opacity = "1";
							newInput.remove();
						}
					});
				},200);
			}
		}

		input2.onclick = function() {
			if (input2Lbl.innerText.length > 0) {
				input2Lbl.style.opacity = "0";
				
				setTimeout(function() {
					input2Lbl.innerText = "";

					// This is the part where the input boxes are created. This happens each time the user clicks on the main box.
					var newInput = document.createElement("input");
					newInput.style = "text-align: center; outline: 0; border: 0; background: transparent; color: black; font-family: 'Roboto'; font-size: 20px; position: absolute; left: 0; right: 0; top: 0; bottom: 0;";
					newInput.id = "newInput2";

					input2.appendChild(newInput);
					newInput.focus();

					newInput.addEventListener("blur", function() {
						if (newInput.value.length == 0) {
							input2Lbl.innerText = "New " + window.localStorage.getItem('change');
							input2Lbl.style.opacity = "1";
							newInput.remove();
						}
					});
				},200);
			}
		}
		
		submit.onclick = function() {
			var newInput1 = document.getElementById('newInput1');
			var newInput2 = document.getElementById('newInput2');
			var pageTitle = document.getElementById('pageTitle');

			if (pageTitle.innerText == "Change name") {
				if (newInput1.value != "" && newInput2.value != "" && newInput1.value == newInput2.value) {
					$.ajax({
						url: "../PHP/changeUsername.php",
						type: "post",
						dataType: "json",
						data: {email: savedEmail, name: newInput1.value},
						success: function(result) {
							if (result == 0) {
								
							}
							else {
								newInput1.value = "";
								newInput2.value = "";
							}
						}
					});				
				}
			}
			else if (pageTitle.innerText == "Change password") {
				if (newInput1.value != "" && newInput2.value != "" && newInput1.value == newInput2.value) {
					$.ajax({
						url: "../PHP/changePassword.php",
						type: "post",
						dataType: "json",
						data: {email: savedEmail, password: newInput1.value},
						success: function(result) {
							if (result == 0) {

							}
							else {
								newInput1.value = "";
								newInput2.value = "";
							}
						}
					});
				}
			}
		}
	}
	else
	{
		input2.remove();
		input1Lbl.innerText = "New photo";

		function openFiles(control) {
			let input = document.createElement("input");
			input.type = "File";
			
			input.onchange = function(e) {
				let files = Array.from(input.files);
				control.childNodes[1].innerText = files[0].name;
			};

			input.click();
		}

		submit.style.top = "420px";
		input1.onclick = function(e) {
			openFiles(input1);
		}

		submit.onclick = function() {
			if (input1Lbl.innerText != "") {
				$.ajax({
					url: "../PHP/changePicture.php",
					type: "post",
					dataType: "json",
					data: {email: savedEmail, picture: input1Lbl.innerText},
					success: function(result) {
						if (result == 0) {
							
						}
						else {
							window.localStorage.setItem("picture", input1Lbl.innerText);
							input1Lbl.innerText = "";
						}
					}
				});
			}
		}
	}
}
