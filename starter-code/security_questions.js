console.log("security_questions.js loaded");
var securityQuestions = [
	{
		question: "What was your first pet's name?", 
		expectedAnswer: "FlufferNutter"
	},
	{
		question: "What was your first school?" , 
		expectedAnswer: "Granite Hills"
	}, 
	{
		question: "What is your favorite color?",
		expectedAnswer: "Black"
	}
];

for (var i = 0; i < securityQuestions.length; i++) {
	var answer = window.prompt(securityQuestions[i].question); 
	if (answer === securityQuestions[i].expectedAnswer) {
		answer;
	} else {
		alert("Wrong!");
		break;
	}
}