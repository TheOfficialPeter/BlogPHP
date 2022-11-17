window.onload = function() {
	if (window.localStorage.getItem('email') != null) {
		location.href = "../pages/main.html";
	}
	document.body.style.opacity = "1";
}
