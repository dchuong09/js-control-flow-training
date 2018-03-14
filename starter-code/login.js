console.log("login.js loaded");
var userLogin = {
	userName: "Kat", 
	password: "1234abc"
}
var wrongInput = 0; 

while (wrongInput < 4) {
	var passInput = prompt('Enter password for user Kat');
	if (passInput === userLogin.password) {
		alert('Correct!');
		break;
	} else {
		alert('Try again'); 
		wrongInput++;
		if (wrongInput === 3) {
			alert('Try again in 5 minutes');
			break;
		} 
	}
}