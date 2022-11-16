window.onload = function() {
	document.getElementById("title").innerText = "Welcome, " + JSON.parse(document.cookie).name;
	document.body.style.opacity = "1";
	
	setTimeout(function() {
		document.cookie = JSON.stringify({name: JSON.parse(document.cookie).name, email: JSON.parse(document.cookie).email, expires: 0});

		location.href = "../pages/signup.html";
	},5000);
}
