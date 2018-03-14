var modulo = function(num1, num2) {
	var divided = Math.round(num1 / num2);
	var remainder = num1 % num2; 
	console.log(num1 + ' divided by ' + num2 + ' equal ' + divided + ', with  remainder of ' + remainder + '!');
}
modulo(21, 4);