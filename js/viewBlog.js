window.onload = function() {
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

	var savedName = window.localStorage.getItem('name');
	document.getElementById("title").innerText = "Welcome, " + savedName;
	document.getElementById("pageTitle").innerText = window.localStorage.getItem('blogName');

	$.ajax({
		url: "../PHP/getBlogContent.php",
		type: "post",
		dataType: "json",
		data: {blogTitle: window.localStorage.getItem('blogName')},
		success: function(result) {
			document.getElementById("blogText").innerText = result[3];
		}
	});
}
