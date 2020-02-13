function validate(form)
{
	// clear out any prior stories on the page
	document.getElementById('story').innerHTML = '';



	// if no errors, print the story
	 
		completedStory = '';

		// create shorter variables from the form vars
		myName = form.name.value;
		myEmail = form.email.value;
		myIndustry = form.industry.value;
		myPlace = form.place.value;


		// styling these vars
		mynamestyled = '<span class="blue">' + myName + '</span>';
		myemailstyled = '<span class="blue">' + myEmail + '</span>';
		myindustrystyled = '<span class="blue">' + myIndustry + '</span>';
		myplacestyled = '<span class="blue">' + myPlace + '</span>';


		
		// build a string of the finished story
		completedStory = "Thank you, " + 
						mynamestyled + 
						" for visiting my portfolio. ";

		// pop the story into the correct spot on the page
		document.getElementById('story').innerHTML = completedStory;
		
}
