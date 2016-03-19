var firebaseRef = new Firebase("https://ar-taste.firebaseio.com/");
var surveyName = "testSurvey";
//function to draw a visualization when the ref dataset gets updated


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height()/2;
    var w = $(window).width()/2;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}


$(document).ready(function(){
	var svgDot = '<svg x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"><circle class="st0" cx="50" cy="50" r="49"/></svg>';
	firebaseRef.child(surveyName).on('value', function(snapshot){

		$.each(snapshot.val(), function(question, answers) {


			console.log('--' + question + '--');
			
			var questionID = question.replace(/ /g, "-").replace("?", "");
			if(jQuery('#'+questionID).length > 0 ){

			}
			else{
				var qEl = $('<div class="question-wrapper" id="'+questionID+'"></div>');
				$(qEl).appendTo('.vis-wrapper-2 .key').html('<h3 class="question">'+question+'</h3>');
			}
			var n = 1;
			$.each(answers, function(answer, count){
				console.log(answer+' : '+count);
				var answerID = answer.replace(/ /g, "-").replace("?", "");
				if(jQuery('#'+answerID).length > 0 ){
					jQuery('#'+answerID).attr("class", "answer circle size-"+count+" "+"color-"+n);

				}else{
					var aEl = $('<div class="answer-wrapper"><div id="'+answerID+'" class="answer circle size-'+count+' color-'+n+'">'+svgDot+'</div></div>');
					aEl.find('svg circle').addClass('color-'+n);
					var answerLabel = $('<span class="label color-'+n+' size-'+count+'">'+answer+'</span>');
					aEl.appendTo($('.vis-wrapper-2'));
					answerLabel.appendTo(aEl);
				}
			n++;

			});//end each answer

		});//end each question

				
	});//end firebase listener

});//end dom ready