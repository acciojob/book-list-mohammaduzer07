//your JS code here. If required.
let title = document.getElementById('title');
let author = document.getElementById('author');
let isbn = document.getElementById('isbn');
let submit = document.getElementById('submit');
let tbody = document.getElementById('book-list');
submit.addEventListener("click", function(event) {
	event.preventDefault();
	addBookList();
});

function addBookList() {
	
	let row = tbody.insertRow();
	tbody.append(row);
	let td1 = row.insertCell(0);
	td1.innerText = title.value;
	let td2 = row.insertCell(1);
	td2.innerText = author.value;
	let td3 = row.insertCell(2);
	td3.innerText = isbn.value;
	let td4 = row.insertCell(3);
	let newBtn = document.createElement('button');
	newBtn.className = "delete";
	newBtn.innerText = 'X';

	row.append(td1);
	row.append(td2);
	row.append(td3);
	row.append(td4);
	td4.append(newBtn);
	var deleteButtons = document.getElementsByClassName("delete");
	
    for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener("click", function(event) {
		  event.target.parentNode.parentNode.remove();
		});
    }	
}