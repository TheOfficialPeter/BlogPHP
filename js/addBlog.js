var submitBtn = document.getElementById('submitBtn');
var blogTitleLbl = document.getElementById('blogTitleLbl');
var blogDescriptionLbl = document.getElementById('blogDescriptionLbl');
var blogPictureLbl = document.getElementById('blogPictureLbl');
var blogContentLbl = document.getElementById('blogContentLbl');
var previewBox = document.getElementById('previewBox');

var blogTitle = document.getElementById('blogTitle');
var blogDescription = document.getElementById('blogDescription');
var blogPicture = document.getElementById('blogPicture');
var blogContent = document.getElementById('blogContent');

var blogTitleInput = document.getElementById('blogTitleInput');
var blogDescriptionInput = document.getElementById('blogDescriptionInput');
var blogContentInput = document.getElementById('blogContentInput');

var previewTitle = document.getElementById('cardTitle');
var previewDesc = document.getElementById('cardDesc');
var previewImage = document.getElementsByClassName('cardHead')[0];

var navItems = document.body.getElementsByClassName("navItem");

window.onload = function() {
	document.body.style.opacity = "1";
	
	document.getElementById('title').innerText = "Welcome, " + window.localStorage.getItem('name');

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

	setTimeout(function() {
		document.getElementById('addBtn').style.transform = "rotate(45deg)";
	},1000);
}

function addBlog(blogTitle, blogDescription, blogContent, blogPicture) {

}

function editInput(control) {
	var text = control.childNodes[1];
	text.style.transition = "all .2s";
	text.style.opacity = "0";

	setTimeout(function() {
		var inputTextBox = control.childNodes[3];
		inputTextBox.style.zIndex = "1";
		inputTextBox.focus();
			
		inputTextBox.addEventListener('blur', function(event) {
			if (inputTextBox.value == "") {
				inputTextBox.style.zIndex = "-1";
				text.style.opacity = "1";
			}
		});
	},200);
}

function openFiles(control) {
	let input = document.createElement("input");
	input.type = "File";
	
	input.onchange = function(e) {
		let files = Array.from(input.files);
		control.childNodes[1].innerText = files[0].name;
		
		previewImage.style.background = "url(../assets/" + files[0].name + ")";
		previewImage.style.backgroundSize = "cover";
	};

	input.click();
}



blogTitleInput.addEventListener("keydown", function(e) {
	previewTitle.innerText = blogTitleInput.value;
})

blogTitleInput.addEventListener("keyup", function(e) {
	previewTitle.innerText = blogTitleInput.value;
})

blogDescriptionInput.addEventListener("keydown", function(e) {
	previewDesc.innerText = blogDescriptionInput.value;
})

blogDescriptionInput.addEventListener("keyup", function(e) {
	previewDesc.innerText = blogDescriptionInput.value;
})
