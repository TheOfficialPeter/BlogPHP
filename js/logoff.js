window.onload = function() {
	document.getElementById("title").innerText = "Welcome, " + JSON.parse(document.cookie).name;
	document.body.style.opacity = "1";
	
	setTimeout(function() {
		window.cookies = "";
		location.href = "../pages/signup.html";
	},5000);
}
