window.onload = init;

function init () {

var button = document.getElementById("btnAdd").onclick = addsubmit;
}
function addsubmit () {

// Your Name
	var nameInput = document.getElementById("Name");
	var name = nameInput.value;
	
	var li = document.createElement("li");
	li.innerHTML = ("Name: ") + name;

// Your Comment
	var comment = document.getElementById("Comment");
	var comment = comment.value;
	
	var lii = document.getElementById("li");
	lii.innerHTML = ("Comment: ") + comment;

// Add those together
	var ul = document.getElementById("commentsection")
	ul.appendChild(li);
	ul.appendChil(lii);
}


	