var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "https://www.aljazeera.com/wp-content/uploads/2020/06/9e1ef07b4532483db01328db48cbe6a3_18.jpeg?fit=1000%2C562";
images[1] = "https://depositphotos.com/8874763/stock-photo-downgraded-currency.html";
images[2] = "https://st.depositphotos.com/2228340/2407/i/950/depositphotos_24077037-stock-photo-government-and-economy.jpg";
images[3] = "https://images6.alphacoders.com/565/thumb-1920-565154.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

function dollar_to_lollar(valNum) {
    document.getElementById("outputlolar").innerHTML = valNum *3.03;
  }




function lollar_to_dollar(valNum) {
    document.getElementById("outputdollar").innerHTML = valNum /3.03 ;
  }

 