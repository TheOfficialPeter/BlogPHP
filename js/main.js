window.onload = function() {
	var savedEmail = window.localStorage.getItem('email');
	var savedName = window.localStorage.getItem('name');
	
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


	document.getElementById("title").innerText = "Welcome, " + savedName;

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
	$.ajax({
		url: "../PHP/getBlogs.php",
		type: "post",
		dataType: "json",
		data: {randomPost: ""},
		success: function(result) {
			var counterX = 0;
			var counterY = 0;
			for (let i = 0; i < result.length; i++) {
				if (counterX > 2) {
					counterX = 0;
					counterY += 380;
				}

				var card = document.getElementsByClassName("card")[0].cloneNode(true);
				card.className = "card";
				card.style.display = "block";
				
				if (counterX == 0) {
					card.style.left = "calc(50% - 296px/2 - 420px)";
					card.style.top = counterY+"px";
				}
				else if (counterX == 1) {
					card.style.left = "calc(50% - 296px/2)";
					card.style.top = counterY+"px";
				}
				else if (counterX == 2) {
					card.style.left = "calc(50% - 296px/2 + 420px)";
					card.style.top = counterY+"px";
				}
				
				card.childNodes[3].childNodes[1].innerText = result[i].blogTitle;
				card.childNodes[3].childNodes[3].innerText = result[i].blogDescription;
				card.childNodes[1].style.background = "url('../assets/"+ result[i].blogPicture +"')"; 
				card.childNodes[1].style.backgroundSize = "cover";

				card.onclick = function() {
					location.href = "./viewBlog.html";
				}
				
				document.getElementById("cardList").appendChild(card);

				counterX += 1;
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
		},
	});
}
