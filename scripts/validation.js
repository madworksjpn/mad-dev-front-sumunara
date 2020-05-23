// Form blur event listeners
if (document.getElementById("inputUserName")) {
	document
		.getElementById("inputUserName")
		.addEventListener("blur", validateName);
}

if (document.getElementById("inputEmail")) {
	document
		.getElementById("inputEmail")
		.addEventListener("blur", validateEmail);
}

if (document.getElementById("inputCode")) {
	document.getElementById("inputCode").addEventListener("blur", validateCode);
}

if (document.getElementById("inputPassword")) {
	document
		.getElementById("inputPassword")
		.addEventListener("blur", validatePassword);
}

if (document.getElementById("inputConfirmPassword")) {
	document
		.getElementById("inputConfirmPassword")
		.addEventListener("blur", confirmPassword);
}

function validateName() {
	const name = document.getElementById("inputUserName");
	const re = /^[a-zA-Z1-9]{1,15}$/;

	if (!re.test(name.value)) {
		name.classList.add("is-invalid");
	} else {
		name.classList.remove("is-invalid");
	}
}

function validateEmail() {
	const email = document.getElementById("inputEmail");
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if (!re.test(email.value)) {
		email.classList.add("is-invalid");
	} else {
		email.classList.remove("is-invalid");
	}
}

function validateCode() {
	const code = document.getElementById("inputCode");
	const re = /^[1-9]{6}$/;

	if (!re.test(code.value)) {
		code.classList.add("is-invalid");
	} else {
		code.classList.remove("is-invalid");
	}
}

function validatePassword() {
	const password = document.getElementById("inputPassword");
	// const re = /^(?!.*[\s])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

	if (!re.test(password.value)) {
		password.classList.add("is-invalid");
	} else {
		password.classList.remove("is-invalid");
	}
}

function confirmPassword() {
	const password = document.getElementById("inputPassword");
	const confirmPassword = document.getElementById("inputConfirmPassword");

	if (password.value !== confirmPassword.value) {
		confirmPassword.classList.add("is-invalid");
	} else {
		confirmPassword.classList.remove("is-invalid");
	}
}
