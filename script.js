/* Carolyn Opre
	April 6th & 7th 2019
	CuseHack
*/

function setTexture(texture){
	console.log("You chose the " + texture + "texture!");
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
