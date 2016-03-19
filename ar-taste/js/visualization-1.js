var firebaseRef = new Firebase("https://ar-taste.firebaseio.com/");
var surveyName = "testSurvey";
//function to draw a visualization when the ref dataset gets updated

/* Floating Bubbles - each one is sized based on how common it is. Bubbles move randomly around the screen */


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height()/2;
    var w = $(window).width()/2;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(el, speed){
    var newq = makeNewPosition();
    $(el).animate({ top: newq[0], left: newq[1] }, speed, "easeInOutCubic", function(){
      animateDiv(el, speed);        
    });
    
};

$(document).ready(function(){
	firebaseRef.child(surveyName).on('value', function(snapshot){

		$.each(snapshot.val(), function(question, answers) {


			console.log(question + '--');
			
			var questionID = question.replace(/ /g, "-").replace("?", "");
			if(jQuery('#'+questionID).length > 0 ){

			}
			else{
				var qEl = $('<div class="question-wrapper" id="'+questionID+'"></div>');
				$(qEl).appendTo('.vis-wrapper-1').html('<h3 class="question">'+question+'</h3><div class="answer-wrapper"></div>');
			}
			$.each(answers, function(answer, count){
				console.log(answer+' : '+count);
				var answerID = answer.replace(/ /g, "-").replace("?", "");
				if(jQuery('#'+answerID).length > 0 ){
					jQuery('#'+answerID).attr("class", "answer circle size-"+count);

				}else{
					var aEl = $('<div id="'+answerID+'" class="answer circle size-'+count+'"><span class="label">'+answer+'</span><span class="bg"></span></div>');
					aEl.appendTo(qEl.find('.answer-wrapper'));
				}

			});//end each answer

		});//end each question

		$('.answer').each(function(i){
			animateDiv(this, 3000+(100*i));
		});
				
	});//end firebase listener

});//end dom ready