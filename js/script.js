function submitAnswers(){
	var total = 5;
	var score = 0;
	
  // get user input
  // querySelector will grab the imput if there is one.
  // if no button is checked it returns a null
  // The value will not be grabbed if a selection was not made [cannot get value of null]
	var q1 = document.querySelector('input[name="q1"]:checked');
	var q2 = document.querySelector('input[name="q2"]:checked');
	var q3 = document.querySelector('input[name="q3"]:checked');
	var q4 = document.querySelector('input[name="q4"]:checked');
	var q5 = document.querySelector('input[name="q5"]:checked');
	
	// Validation  document.querySelector('input[name="genderS"]:checked').value;
	for (i=1; i <= total; i++){
		if(eval('q'+i) == null || eval('q'+i)  == ''){
			alert('You missed question ' + i);
			return false;
		}
	}
	
	// Set Correct Answers
	var answers = ["b", "a", "d", "b", "d"];

	// Check Answers
	for (i=1; i <= total; i++){
    // After checking each q# to make sure it wasn't null
    // it is now safe to get the value.
		if(eval('q'+i).value == answers[i-1]){
			score++;
		}
	}
	// display results
	var results = document.getElementById('results');
	
	results.innerHTML = '<h2 class="text-center alert-success">You scored <span>'+score+'</span> out of <span>'+total+'</span></h2>';
	return false;
}