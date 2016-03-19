var ref = new Firebase("https://ar-taste.firebaseio.com/");

	function createSurvey(ref, survey){
		//create a new survey
		var surveyRef = ref.child(survey.surveyName);
		
		//add questions to the survey
		if(typeof questions == 'undefined' || questions == ''){
			var questions =  {
				"How do it taste?" : {'salty':0,'sweet':0,'bitter':0,'sour':0,'umami':0},
				"Do I like it?" : { 'yes' : 0, 'no':0}
			};
		}
		
		//surveyRef.update(questions);

		return surveyRef;
	}//end function newSurvey

	function loadSurvey(ref, survey){
		//create a new survey
		var surveyRef = ref.child(survey.surveyName);
		return surveyRef;
	}//end function newSurvey	

	var mySurvey;
	$(document).ready(function(){
		$('body .page-wrapper').append('<div class="loading"><p>Loading...</p></div>');
		var survey = {"surveyName" : "testSurvey",
					  "questions" : {
					  	"How does it taste?" : {'salty':0,'sweet':0,'bitter':0,'sour':0,'umami':0},
					  	"Do you like it?" : {'yes' : 0, 'no':0}
					  }
					};

		//load an existing survery. comment this out if you are creating a new survey.
		mySurvey = loadSurvey(ref, survey);
		
		//creates the form markup from the survey questions and answer options
		mySurvey.once('value', function(snapshot){

			$('body .page-wrapper .loading').remove();
			$('body .page-wrapper').append('<form id="'+survey.surveyName+'"><input type="submit" value="Done"></form>');

			//form submit handler
			$("#"+survey.surveyName).submit(function(ev) {
				


			    ev.preventDefault(); // to stop the form from submitting

			    $(this).find('input[type="radio"]:checked').each(function(){
			    	var question = $("label[for='"+$(this).attr('name')+"']").text();
			    	var answer = $(this).val();
			    	mySurvey.once('value', function(snapshot){
			    		answerRef = snapshot.child(question).child(answer);
			    		currentValue = answerRef.val();
			    		newValue = currentValue + 1;
			    		answerObj = {};
			    		answerObj[answer] = newValue;
			    		mySurvey.child(question).update(answerObj);
			    		location.reload();
			    	}); 	
			    });
			    $('body .page-wrapper').html('');
				$('body .page-wrapper').append('<div class="loading"><p>Loading...</p></div>');
			    
			});

			$.each(snapshot.val(), function(question, answers) {



				questionID = question.replace(/ /g, "-").replace("?", "");
			    
			    jQuery('#'+survey.surveyName).prepend('<div id="question_'+questionID+'" class="question"><label for="'+questionID+'"><h3>'+question+'</h3></label><div class="answers"></div></div>');

			    $.each(answers, function(answer, answerCount){
				    	jQuery("#question_"+questionID).find('.answers').append('<div class="answer"><input type="radio" placeholder="Type your answer here" name="'+questionID+'" value="'+answer+'">'+answer+' : <span class="answerCount">' +answerCount+'</span></div>');
			    });
			});

		}, function (errorObject) {
			  console.log("Form element creation failed failed: " + errorObject.code);
			});
	});