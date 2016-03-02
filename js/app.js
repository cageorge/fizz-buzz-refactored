$(document).ready(function() {
	var n = prompt("Please enter your number");
	n = parseInt (n);

	for (i = 1; i <= n; i++) {
		console.log(i);
	
		if (i % 5 == 0 && i % 3 == 0) {
			$("#output").append("<div>" + "fizzbuzz" + "</div>")
		}
		else if (i % 5 == 0) {
			$("#output").append("<div>" + "buzz" + "</div")
		}
		else if (i % 3 == 0) {
			$("#output").append("<div>" + "fizz" + "</div>")
		}
		else {
			$("#output").append("<div>" + i + "</div>")
		}
	}
})
