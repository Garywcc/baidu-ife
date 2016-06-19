function isEmail(emailStr){
	var pattern=/\d+@[A-Za-z]+\.[a-z]+/;
	console.log(pattern.test(emailStr));
}
function isMobilePhone(phone){
	var pattern=/\d{11}/;
	console.log(pattern.test(phone))
}