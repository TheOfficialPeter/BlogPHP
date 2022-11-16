window.onload = function() {
	try {
		var emailCookie = JSON.parse(document.cookie).email;
		
		$.ajax({
			url: "../PHP/main.php",
			type: "post",
			dataType: "json",
			data: {emai: emailCookie},
			success: function(result) {
				if (result == 0) {
					location.href = "../pages/login.html";
				}
			}
		});
	}
	catch {
		location.href = "../pages/login.html";
	}

	

	document.getElementById("title").innerText = "Welcome, " + JSON.parse(document.cookie).name;

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

	// insert blog cards
	for (let i = 0; i < 3; i++) {
		var card = document.getElementsByClassName("card")[0].cloneNode(true);
		card.className = "card";
		card.style.display = "block";
		
		if (i == 0) {
			card.style.left = "calc(50% - 296px/2 - 420px)";
		}
		else if (i == 1) {
			card.style.left = "calc(50% - 296px/2)";
		}
		else if (i == 2) {
			card.style.left = "calc(50% - 296px/2 + 420px)";
		}

		card.childNodes[1].style.background = "url('../assets/blogImage" + (i+1).toString() + ".png')"; 
		card.childNodes[1].style.backgroundSize = "cover";

		card.onclick = function() {
			location.href = "./viewBlog.html";
		}
		
		document.getElementById("cardList").appendChild(card);
	}

	var cards = document.getElementsByClassName("card");

	(function() {
		for (let i = 0; i < cards.length; i++) {
			cards[i].onmouseover = function(e) {
				cards[i].style.boxShadow = "10px 10px 20px rgba(0,0,0,.5)";
				cards[i].style.padding = "5px";
				cards[i].childNodes[1].style.marginBottom = "50px";
				cards[i].childNodes[3].style.top = "calc(50% - 50px)";
			}

			cards[i].onmouseleave = function(e) {
				cards[i].style.boxShadow = "none";
				cards[i].style.padding = "0px";
				cards[i].childNodes[1].style.marginBottom = "0px";
				cards[i].childNodes[3].style.top = "50%";
			}
		}
	})();
}
