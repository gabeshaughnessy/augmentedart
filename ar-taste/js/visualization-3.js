var firebaseRef = new Firebase("https://ar-taste.firebaseio.com/");
var surveyName = "testSurvey";
//function to draw a visualization when the ref dataset gets updated

var wordArray = ['foo', 'bar'];
var fill = d3.scale.ordinal().range(["#0065c3", "#004c97", "#ee3a43"/*, "#ffe617", "#8dc63f"*/]);

var layout = d3.layout.cloud()
    .size([500, 500])
    .words(wordArray.map(function(d) {
      return {text: d, size: 10 + Math.random() * 90, test: "haha"};
    }))
    .padding(5)
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("AkkuratBold")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);



function draw(words) {
 d3.select('svg').remove();
  d3.select("body .vis-wrapper-3").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "AkkuratBold")
      .style("fill", function(d, i) { console.log(d, i); return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}

function generate(wordsArray) {
	words = [];
    layout.stop().words(wordsArray.map(function(d) {
      return {text: d, size: 10 + Math.random() * 90, test: "haha"};
    })).start();
}

$(document).ready(function(){
	
	layout.start();
	
	firebaseRef.child(surveyName).on('value', function(snapshot){

		$.each(snapshot.val(), function(question, answers) {
			
			
			var questionID = question.replace(/ /g, "-").replace("?", "");
			if(jQuery('#'+questionID).length > 0 ){
				//question exists, update it

			}
			else{
				//new question, create it.
				var qEl = $('<div class="question-wrapper" id="'+questionID+'"></div>');
				$(qEl).appendTo('.vis-wrapper-3').html('<h3 class="question">'+question+'</h3>');
			}
			var n = 1;
			$.each(answers, function(answer, count){
				if(answer != 'other'){

				}else{
					answerRef = snapshot.child(question).child(answer).val();
					var wordArray = [];
					for(word in answerRef){
						wordArray.push(answerRef[word]);
					}
					generate(wordArray);

					

					
				}
			n++;

			});//end each answer

		});//end each question

				
	});//end firebase listener

});//end dom ready