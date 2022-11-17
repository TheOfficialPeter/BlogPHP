window.onload = function() {
	var savedName = window.localStorage.getItem('name');

	document.getElementById("title").innerText = "Welcome, " + savedName;
	document.body.style.opacity = "1";
	
	setTimeout(function() {
		window.localStorage.removeItem("name");
		window.localStorage.removeItem("email");

		location.href = "../pages/signup.html";
	},5000);
}
