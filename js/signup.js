window.onload = function() {
	if (JSON.parse(document.cookie).name != null) {
		location.href = "../pages/main.html";
	}
}
