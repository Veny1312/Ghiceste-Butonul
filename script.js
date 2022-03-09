function randomNumber(n) {
	return Math.floor(Math.random() * n + 1);
}

function generateButtons() {
	let inputNumber = document.getElementById("inputNumber").value;
	let winnerButton = randomNumber(inputNumber);

	for(let i = 1; i <= inputNumber; i++) {
		let btn = document.createElement("button");
		btn.innerHTML = i;
     	btn.onclick = function() {
     		let result = document.getElementById("result");
    		if (i == winnerButton) {
      			result.innerHTML ="You won. Lucky you!"
      		} else {
      			result.innerHTML ="You lost. Not your lucky day";
      		}
    	}
    	document.getElementById("buttons").append(btn);
  	} 
}


function reload (){
	location.reload();
}