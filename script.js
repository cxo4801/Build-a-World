/* Carolyn Opre
	April 6th & 7th 2019
	CuseHack
*/

function setTexture(texture){
	var textureImg = document.getElementById("texture_img");
	console.log(texture);
	if(texture == "Smooth"){
		textureImg.src = "CuseHacks/img/blank-01.png";
	}
	if(texture == "Craters"){
		textureImg.src = "CuseHacks/img/terr_crater-01.png";
	}
	if(texture == "Clouds"){
		textureImg.src = "CuseHacks/img/terr_cloud-01.png";
	}
}

function setColor(color){
	var baseImg = document.getElementById("base_img");
	console.log(color);
	if(color == "Green"){
		baseImg.src = "CuseHacks/img/base_green-01.png";
	}
	if(color == "Blue"){
		baseImg.src = "CuseHacks/img/base_blue-01.png";
	}
	if(color == "Red"){
		baseImg.src = "CuseHacks/img/base_red-01.png";
	}
	if(color == "Yellow"){
		baseImg.src = "CuseHacks/img/base_yellow-01.png";
	}
}

function setAddOn(addOn) {
	var addOnImg = document.getElementById("add_on_img");
	console.log(addOn);
	if (addOn == "Moon") {
		addOnImg.src = "CuseHacks/img/add_moon-01.png";
	}
	if (addOn == "Ring") {
		addOnImg.src = "CuseHacks/img/add_ring-01.png";
	}
	if (addOn == "Ship") {
		addOnImg.src = "CuseHacks/img/add_ship-01.png";
	}
}

function myFunction(){
	//var texture = document.getElementById("texture").value;
	//var color = document.getElementById("color").value;
	//var content = texture + color;

 	var email = document.getElementById("email").value;
    var body = "it worked!";
  	var url = "mailto:"+email+"?Subject=Hello%20again&body="+body;
  	location.href = url;
  
  	document.getElementById("sent").innerHTML = "It has been sent!";

}

//----------------------------------------------------------------------------------------
function getFormValues() {
// function to send first and last names
// to an 'alert' message.
	var f = document.getElementById("fname").value;
	var l = document.getElementById("lname").value;
	alert(f + " " + l);
}
