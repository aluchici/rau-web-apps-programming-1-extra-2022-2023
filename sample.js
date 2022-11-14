const h = document.createElement("h1")
h.innerText = "Welcome to my page";

let body = document.getElementsByTagName("body");
body = body[0];

body.appendChild(h);

class Address {
	street;
	postcode;
	city;
	country;

	constructor(street, postcode, city, country) {
		this.street = street;
		this.postcode = postcode;
		this.city = city;
		this.country = country;
	}
}


class User {
	username;
	firstName;
	lastName;
	email;
	password;
	address; // type Address
	type;

	constructor(username, password, type, street, postcode, city, country) {
		this.username = username;
		this.password = password;
		this.type = type;
		this.address = new Address(street, postcode, city, country);
	}

	checkAdrress() {
		if (this.address.street == '') {
			return false;
		}

		if (this.address.postcode == '' || this.address.postcode == undefined || this.address.postcode == null) {
			return false;
		}

		if (!this.address.city) {
			return false;
		}

		if (!this.address.country) {
			return false;
		}
		
	}

	checkUsernameAndPassword() {
		if (!this.username || !this.password) {
			return false;
		}
		return true;
	}
}

const user = new User("user1", "admin");
console.log(user);

const hasCorrectAddress = user.checkAdrress();
const hasCorrectUsernameAndPass = user.checkUsernameAndPassword();

console.log(`User has correct address: ${hasCorrectAddress}`);
console.log(`User has username and password: ${hasCorrectUsernameAndPass}`);

let USERS = sessionStorage.getItem("users");
if (USERS) {
	USERS = JSON.parse(USERS);
} else {
	USERS = [];
}

function appendUser() {
	const inputDiv = document.getElementById("inputs");	
	const username = inputDiv.children[0];
	const password = inputDiv.children[1];
	
	// console.log(username, password);

	const usernameValue = username.value;
	const passwordValue = password.value;

	const user = new User(usernameValue, passwordValue);
	const isUserValid = user.checkUsernameAndPassword();
	const isDuplicated = checkDuplicatedUser(user, USERS);

	if (isUserValid && !isDuplicated) {
		USERS.push(user);
		sessionStorage.setItem("users", JSON.stringify(USERS));
	} else {
		alert("User details invalid");
		username.value = "";
		password.value = "";
	}
}

function checkDuplicatedUser(user, listOfUsers) {
	for (const u of listOfUsers) {
		if (user.username === u.username) {
			return true;
		}
	}
	return false;
}

function displayUsers() {
	let users = sessionStorage.getItem("users");
	if (users) {
		users = JSON.parse(users);
	} else {
		alert("No users available.");
	}
	
	const existingDiv = document.getElementById("users-list");
	if (!existingDiv) {
	const div = document.createElement("div");
	div.id = "users-list";
	const h3 = document.createElement("h3");
	h3.innerText = "Available users";
	div.appendChild(h3);

	const ol = document.createElement("ol");
	
	for (const user of users) {
		const li = document.createElement("li");
		const usernameSpan = document.createElement("span");
		usernameSpan.innerText = user.username;
	
		const passSpan = document.createElement("span");
		passSpan.innerText = user.password;

		li.appendChild(usernameSpan);
		li.appendChild(passSpan);
		ol.appendChild(li);
	}
	div.append(ol);
	
	const body = document.getElementsByTagName("body");
	body[0].appendChild(div);
	} else {
		// logic to just append elements
		const ol = document.createElement("ol");
	
		for (const user of users) {
			const li = document.createElement("li");
			const usernameSpan = document.createElement("span");
			usernameSpan.innerText = user.username;
	
			const passSpan = document.createElement("span");
			passSpan.innerText = user.password;

			li.appendChild(usernameSpan);
			li.appendChild(passSpan);
			ol.appendChild(li);
		}
		existingDiv.children[1].remove();
		existingDiv.appendChild(ol);
	}	
}



