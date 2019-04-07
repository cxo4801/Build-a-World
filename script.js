/* Carolyn Opre
	April 6th & 7th 2019
	CuseHack
*/

var World, Texture, Color, AddOn, AlienColor, Body, Eye, Mouth, Leg = "";


function setTexture(texture){
	Texture = texture;
	console.log("You chose the " + texture + "texture!");
}

function setColor(color){
	Color = color;
	console.log("You chose the " + color + "color!");
}

function setAddOn(addOn){
	AddOn = addOn;
	console.log("You chose the " + addOn + "addOn!");
}

function setAlienColor(color){
	AlienColor = color;
	console.log("You chose the " + color + "color!");
}

function setBody(body){
	Body = body;
	console.log("You chose the " + body + "body!");
}

function setEye(eye){
	Eye = eye;
	console.log("You chose the " + eye + "eye!");
}

function setMouth(mouth){
	Mouth = mouth;
	console.log("You chose the " + mouth + "mouth!");
}

function setLegs(leg){
	Leg = leg;
	console.log("You chose the " + leg + "leg!");
}


function send(){
	//var texture = document.getElementById("texture").value;
	//var color = document.getElementById("color").value;
	//var content = texture + color;
	var webURL =  "https://cxo4801.github.io/Build-a-World/"
	
	World = Texture+" texture, "+Color+" color, "+AddOn+" add on, "+AlienColor+" alien color, "+Body+" body, "+Eye+" eyed, "+Mouth+" mouth and "+Leg+" legs";
	console.log("You chose these elements:"+World);
 	var email = document.getElementById("email").value;
 	//var email = "cxo4801@rit.edu";
    var body = "Hi! You created a world with these elements:  "+World+".   Our website is:  "+webURL+"   Come back again to try out new styles soon!";
  	//var body = "It worked!";
  	var url = "mailto:"+email+"?Subject=Hello%20again&body="+body;
  	location.href = url;

  	document.getElementById("sent").innerHTML = "It has been sent!";

}

