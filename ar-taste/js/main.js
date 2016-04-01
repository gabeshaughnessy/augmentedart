Requests = {
	QueryString : function(item){
	var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
	return svalue ? svalue[1] : svalue;
	}
}

var ref = new Firebase("https://ar-taste.firebaseio.com/");

	function createSurvey(ref, survey){
		//create a new survey
		var surveyRef = ref.child(survey.surveyName);
		
		//add questions to the survey
		if(typeof questions == 'undefined' || questions == ''){
			var questions =  {
		//fallback if no questions passed

			  	"Sigil1" : {'salty':0,'sweet':0,'bitter':0,'sour':0,'umami':0, 'other':''},
				"Sigil2" : {'salty':0,'sweet':0,'bitter':0,'sour':0,'umami':0, 'other':''},
				"Sigil3" : {'salty':0,'sweet':0,'bitter':0,'sour':0,'umami':0, 'other':''},
				"Sigil4" : {'salty':0,'sweet':0,'bitter':0,'sour':0,'umami':0, 'other':''}
			}
		}
		
		surveyRef.update(questions);

		return surveyRef;
	}//end function newSurvey

	function loadSurvey(ref, survey){
		//create a new survey
		var surveyRef = ref.child(survey.surveyName);
		return surveyRef;
	}//end function newSurvey	

	var mySurvey;
	$(document).ready(function(){
		$('body .survey-wrapper').append('<div class="loading"><p>Loading...</p></div>');
		var survey = {"surveyName" : "testSurvey3"};
		if(Requests.QueryString("create") == 'true'){
			//create a new instance in the db
			mySurvey = createSurvey(ref, survey);
		}else{
			//load an existing survery. comment this out if you are creating a new survey.
			mySurvey = loadSurvey(ref, survey);
		}
		
		//creates the form markup from the survey questions and answer options
		mySurvey.once('value', function(snapshot){

			$('body .survey-wrapper .loading').remove();
			$('body .survey-wrapper').append('<form id="'+survey.surveyName+'"><input type="submit" value="Done"></form>');

			//form submit handler
			$("#"+survey.surveyName).submit(function(ev) {
				


			    ev.preventDefault(); // to stop the form from submitting

			    

			    $(this).find('input[type="checkbox"]:checked').each(function(){
			    	var question = $("label[for='"+$(this).attr('data-question')+"']").text();
			    	var answer = $(this).val();
			    	mySurvey.once('value', function(snapshot){
			    		answerRef = snapshot.child(question).child(answer);
			    		answerObj = {};
			    	
			    		
			    		
			    		currentValue = answerRef.val();
			    		newValue = currentValue; //could iterate here but we are doing it on click instead
			    		answerObj[answer] = newValue;
				    	
			    		mySurvey.child(question).update(answerObj);
			    		location.reload();
			    		
			    	}); 	
			    });
				//Set the Other Text
			    var otherText = $("#other-text").val();
			    var otherTextID = otherText.replace(/ /g, "-").replace("?", "");
			    var questionID = $("#other-text").data('question');
			    answerRef = mySurvey.child(questionID).child('other');
			    answerObj = {};

			    currentValue = answerRef.child(otherTextID);

			    if(currentValue){
			    	answerObj[otherTextID] = otherText;
			    }else{
			    	answerObj[otherTextID] = otherText;
			    }

			    
			    answerRef.update(answerObj); 
			    if($(this).find('input[type="checkbox"]:checked').length == 0){
			    	mySurvey.once('value', function(snapshot){
			    		location.reload();
			    	});
			    }

			   // $('body .survey-wrapper').html('');
				//$('body .survey-wrapper').append('<div class="loading"><p>Loading...</p></div>');

			    
			});
			//button press
			$("#"+survey.surveyName).on('click', 'input[type="checkbox"]', function(ev) {

					var stepSize = 5; //set step size
					var checked = $(this);
			    	var question = $("label[for='"+$(this).attr('data-question')+"']").text();
			    	var answer = $(this).val();
			    	

				    	
			    	mySurvey.once('value', function(snapshot){
			    		answerRef = snapshot.child(question).child(answer);
			    		currentValue = Number(answerRef.val());
			    		if(checked.is(':checked')){
				    		newValue = currentValue + stepSize;
				    	}	else{
				    		newValue = currentValue - stepSize;
				    	}
			    		checked.next('.answerCount').text(newValue);
			    		answerObj = {};
			    		answerObj[answer] = newValue;
			    		mySurvey.child(question).update(answerObj);
			    	}); 
				   
			    
			
			    
			});
			
			$.each(snapshot.val(), function(question, answers) {



				questionID = question.replace(/ /g, "-").replace("?", "");
				if(Requests.QueryString(questionID)){
			    
				    jQuery('#'+survey.surveyName).prepend('<div id="question_'+questionID+'" class="question" ><label style="background-image: url(images/'+questionID+'.png)" for="'+questionID+'"><h3>'+question+'</h3></label><div class="answers"></div></div>');

				    $.each(answers, function(answer, answerCount){
				    	if(answer != "other"){
					    	answerID = answer.replace(/ /g, "-").replace("?", "");
					    	jQuery("#question_"+questionID).find('.answers').append('<div class="answer-wrapper"><div class="answer slider-input vert"><input title="'+answerCount+'" type="checkbox" data-question="'+questionID+'" name="'+questionID+answerID+'" id="'+questionID+answerID+'" value="'+answer+'"><label for="'+questionID+answerID+'"></label></div><span class="input label">'+answer+'</span></div>');
					    }
					    else{
					    	answerID = "other";
					    	jQuery('#question_'+questionID).append('<input type="text" value="" name="other-text" id="other-text" data-question="'+question+'" placeholder="Something else entirely?">');
					    }
				    });
				}
				
			});

		}, function (errorObject) {
			  console.log("Form element creation failed failed: " + errorObject.code);
			});
	});