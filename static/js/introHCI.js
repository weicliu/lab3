'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("You clicked me!");

		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);


	// FORM click handler
	$("#submitBtn").click(submitForm);
}


function submitForm(e){
	e.preventDefault();

	var projectName = $("#project").val();
	$(projectName).animate({
		width: $("#width").val()
	});

	var newDes = $("#description").val();

	// add project description
	var description = $(projectName).find(".project-description");
	if (description.length == 0) // if no div yet
		$(projectName).append("<div class='project-description'><p>Description of the project.</p></div>");
	$(projectName).find(".project-description").text(newDes);
}

function projectClick(e){
	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    // append
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p><img src='images/lorempixel.jumbotron.jpeg'></div>");
    } else {
    	var descriptionExisting = $(this).next();
    	descriptionExisting.fadeOut();
    	if (descriptionExisting.css("display") != "none")
    		descriptionExisting.fadeOut();
    	else
    		descriptionExisting.fadeIn();
    		
    }
}