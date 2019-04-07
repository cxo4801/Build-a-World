/* Carolyn Opre
	April 6th & 7th 2019
	CuseHack
*/

function setTexture(texture){
	console.log("You chose the " + texture + "texture!");
}


function getContent(){
	var texture = document.getElementById("texture").value;
	var color = document.getElementById("color").value;
	var content = ;
	
	window.open('mailto:cxo4801@rit.edu?subject=Your Brand New World&body='+content);
}
//first name
if(!firstName.value){
	errMsg += "First Name;   ";
	firstName.classList.add("wrong");
}
else {
	firstName.classList.remove("wrong");
}

//last name
if(!lastName.value){
	errMsg += "Last Name;   ";
	lastName.classList.add("wrong");
}
else {
	lastName.classList.remove("wrong");
}

//Street name
if(!streetName.value){
	errMsg += "Street;   ";
	streetName.classList.add("wrong");
}
else {
	streetName.classList.remove("wrong");
}
//City name
if(!cityName.value){
	errMsg += "City;   ";
	cityName.classList.add("wrong");
}
else {
	cityName.classList.remove("wrong");
}

//State abbreviation
if(!stateRegex.test(stateAbbrev.value)){
	errMsg += "State Abbreviation;   ";
	stateAbbrev.classList.add("wrong");
}
else {
	stateAbbrev.classList.remove("wrong");
}

//Zip code
if(!zipRegex.test(zipCode.value)){
	errMsg += "Zip Code;   ";
	zipCode.classList.add("wrong");
}
else {
	zipCode.classList.remove("wrong");
}

//Credit card num
if(!cardRegex.test(creditCard.value)){
	errMsg += "Credit Card Number;   ";
	creditCard.classList.add("wrong");
}
else {
	creditCard.classList.remove("wrong");
}

//email
if(!emailRegex.test(emailAddr.value)){
	errMsg += "Email;   ";
	emailAddr.classList.add("wrong");
}
else {
	emailAddr.classList.remove("wrong");
}

//color
if (!checkSelect(color)){
	errMsg += "Wheel Color;   ";
	color.classList.add("wrong");
}
else {
	color.classList.remove("wrong");
}

//size
if (!checkSelect(size)){
	errMsg += "Wheel Size;   ";
	size.classList.add("wrong");
}
else {
	size.classList.remove("wrong");
}

//hardness
if (!checkSelect(hardness)){
	errMsg += "Wheel Hardness;   ";
	hardness.classList.add("wrong");
}
else {
	hardness.classList.remove("wrong");
}

//type
if (!checkSelect(skateType)){
	errMsg += "Type of Skating;   ";
	skateType.classList.add("wrong");
}
else {
	skateType.classList.remove("wrong");
}

//quantity
if((!quantity.value) || (quantity.value === "0") || isNaN(quantity.value)){
	errMsg += "Quantity;   ";
	quantity.classList.add("wrong");
}
else {
	quantity.classList.remove("wrong");
}

if (errMsg){
	feedbackDiv.innerHTML = "The following fields have errors:<br/>" + errMsg;
	return false;
}
else {
	return true;
}
}
//----------------------------------------------------------------------------------------
function getFormValues() {
// function to send first and last names
// to an 'alert' message.
	var f = document.getElementById("fname").value;
	var l = document.getElementById("lname").value;
	alert(f + " " + l);
}
