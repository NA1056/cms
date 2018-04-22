window.onload = init;

function init() {
    
var button = document.getElementById("btnAdd").onclick = addsubmit;
}

function addsubmit() {

//Name
    var nameInput = document.getElementById("Name");
    var name = nameInput.value;

    var li = document.createElement("li");
    li.innerHTML = ("Name: ") + name;

//Email
    var email = document.getElementById("Email");
    var email = email.value;

    var lii = document.createElement("li");
    lii.innerHTML = ("Email: ") + email;
	
//Add them to the list
    var ul = document.getElementById("commentsection")
    ul.appendChild(li);
    ul.appendChild(lii);
}

