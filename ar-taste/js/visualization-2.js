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
	var svgDesign = '<svg version="1.1" id="Layer_1"  x="0px" y="0px"
	 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
	<g>
		<path d="M49.9,1.6C23.1,1.6,1.3,23.4,1.3,50.2s21.8,48.6,48.6,48.6S98.5,77,98.5,50.2S76.7,1.6,49.9,1.6z M86.5,71l-13.1,7.8l0,0
			l-1-20.1L86,35.2L86.5,71z M50.4,8.2l21.3,12.8l-9.4,0l-2.8,1.2l6.8,6.3l-3.4,0L43.5,12.8l-0.2-0.5L50.4,8.2z M68,59.7l-16.3-15
			l10.9-13l4.8,0l0,0L57.1,44.1l12.6,12.7L68,59.7z M50,90.7l-5.3-9.5h10.8L50,90.7z M56.5,79.5H43.7l-3-5.2h18.8L56.5,79.5z
			 M60.6,72.4H39.7L22.9,42.6h23.8l11.9-11l1.8,0L49.2,44.8l17.7,16.3l0,0.4L60.6,72.4z M50.9,31.6l-8.1,5.9H22.8l-3.1-6L50.9,31.6z
			 M17.7,31.5l3.7,7.2l1.9,0.6h21.4l0.1-0.8l8.4-6.9l3.1,0l-10.5,9.1h-24l-5.2-9.3L17.7,31.5z M70.6,55.2L59.2,44.4l10-12.8l15,0.1
			L70.6,55.2z M68.8,28.4l0-0.2L63.1,23l12-0.1l9.4,5.6L68.8,28.4z M41.6,13.3l18.7,15l0,0.1l-2.2,0l0-0.1l-19-13.6L41.6,13.3z
			 M54.9,28.3L54.9,28.3l-1.5,0.1v-0.2L36.2,16.3l1.5-0.9l-0.1,0L54.9,28.3z M34.4,17.4l15.8,11l-34.6-0.1L34.4,17.4z M13.9,33.3
			l4.5,7.9l-0.6,0.2L17,72.9L13.8,71L13.9,33.3z M19.4,43.2L19.4,43.2l17.3,30.7l0,10.5L18.8,74L19.4,43.2z M38.5,85.4l-0.1-8.6l0,0
			l1.9,3.3v6.3L38.5,85.4z M42,83.1L42,83.1l3.6,6.4L42,87.4V83.1z M57.4,84.4v3.8l0,0l-3.4,2L57.4,84.4z M59.2,87.2l-0.1-5.7
			l3.2-5.5v9.4L59.2,87.2z M64,73l3-5.2l0.3,14.6l-3.3,2V73z M68.8,64.7l2.2-3.8l0.5,19l-2.7,1.6V64.7z M89.5,29.1
			c3.4,6.3,5.3,13.5,5.3,21.1c0,7.4-1.8,14.4-5,20.6l-0.6-41.1L89.5,29.1z M89.1,28.5L89.1,28.5C89.1,28.5,89.1,28.5,89.1,28.5
			L89.1,28.5z M88.3,27L52.2,5.4C67.5,6.2,80.8,14.6,88.3,27z M48.7,5.4L11.7,26.7C19.4,14.2,33.1,5.8,48.7,5.4z M10.6,28.5
			l-0.1,43.2C7,65.3,5,58,5,50.2C5,42.4,7,35,10.6,28.5z M11.5,73.5l37.1,21.5C32.9,94.6,19.2,86.1,11.5,73.5z M52.4,95L88,73.9
			C80.5,86,67.4,94.2,52.4,95z"/>
		<path d="M45.8,48.3c-5.5,0-9.9,4.4-9.9,9.9c0,5.5,4.4,9.9,9.9,9.9c5.5,0,9.9-4.4,9.9-9.9C55.6,52.7,51.2,48.3,45.8,48.3z
			 M45.8,65.3c-3.9,0-7.2-3.2-7.2-7.2c0-3.9,3.2-7.2,7.2-7.2c3.9,0,7.2,3.2,7.2,7.2C52.9,62.1,49.7,65.3,45.8,65.3z"/>
		<path d="M23.4,61.4c-1.1,0-2,2-2,4.4c0,2.5,0.9,4.4,2,4.4c1.1,0,2-2,2-4.4C25.4,63.4,24.5,61.4,23.4,61.4z M23.4,69.1
			c-0.8,0-1.4-1.4-1.4-3.2s0.6-3.2,1.4-3.2s1.4,1.4,1.4,3.2S24.2,69.1,23.4,69.1z"/>
		<path d="M29.9,68c-1.1,0-2,2-2,4.4c0,2.5,0.9,4.4,2,4.4c1.1,0,2-2,2-4.4C31.8,69.9,31,68,29.9,68z M29.9,75.6
			c-0.8,0-1.4-1.4-1.4-3.2c0-1.8,0.6-3.2,1.4-3.2c0.8,0,1.4,1.4,1.4,3.2C31.3,74.2,30.7,75.6,29.9,75.6z"/>
		<path d="M80.5,70.9c2.3,0,4.2-4.4,4.2-9.9c0-5.5-1.9-9.9-4.2-9.9c-2.3,0-4.2,4.4-4.2,9.9C76.3,66.5,78.1,70.9,80.5,70.9z
			 M80.5,53.9c1.7,0,3,3.2,3,7.2c0,3.9-1.4,7.2-3,7.2c-1.7,0-3-3.2-3-7.2C77.4,57.1,78.8,53.9,80.5,53.9z"/>
		<ellipse cx="25.2" cy="33.4" rx="1.8" ry="1.5"/>
		<ellipse cx="33.4" cy="33.7" rx="1.8" ry="1.5"/>
		<ellipse cx="41" cy="33.9" rx="1.8" ry="1.5"/>
	</g>
	</svg>';
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
				if(answer != 'other'){

					console.log(answer+' : '+count);
					var answerID = answer.replace(/ /g, "-").replace("?", "");
					if(jQuery('#'+answerID).length > 0 ){
						jQuery('#'+answerID).attr("class", "answer circle size-"+count+" "+"color-"+n);
						jQuery('.label[for="'+answerID+'"]').attr("class", "label size-"+count+" "+"color-"+n);

					}else{
						var aEl = $('<div class="answer-wrapper"><div id="'+answerID+'" class="answer circle size-'+count+' color-'+n+'">'+svgDesign+'</div></div>');
						aEl.find('svg circle').addClass('color-'+n);
						var answerLabel = $('<span for="'+answerID+'" class="label color-'+n+' size-'+count+'">'+answer+'</span>');
						aEl.appendTo($('.vis-wrapper-2'));
						answerLabel.appendTo('.key');
					}
				}
			n++;

			});//end each answer

		});//end each question

				
	});//end firebase listener

});//end dom ready