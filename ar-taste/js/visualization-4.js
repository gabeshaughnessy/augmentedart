/* TODO :
 - [ ] make the click event reload the current vis, currently it just loads the words from the last one.
 - [ ] whichever word is new should have a different style - ideas [outlined, color with everything else white]

*/
var redsAndBlues = ["#0065c3", "#004c97", "#ee3a43", "#004c97","#0065c3", "#004c97"];
var shadesOfGray = [ "#888", "#999", "#aaa", "#bbb", "#ccc", "#ddd", "#eee", "#fff"];
var reverseShadesOfGray = shadesOfGray.reverse();
var firebaseRef = new Firebase("https://ar-taste.firebaseio.com/");
var surveyName = "testSurvey3";
//function to draw a visualization when the ref dataset gets updated
//word cloud https://www.jasondavies.com/wordcloud/
//github repo https://github.com/jasondavies/d3-cloud
var wordArray = [''];
var angles = [0,45,-45];
if(typeof Requests.QueryString("padding") !== 'undefined'){
	var padding = Number(Requests.QueryString("padding"));
}else{
	padding = 0;
}
if(typeof Requests.QueryString("colors") !== 'undefined'){
	switch(Requests.QueryString("colors")){
		case "redsAndBlues" :
		colorset = redsAndBlues;
		break;
		case "shadesOfGray" :
		colorset = shadesOfGray;
		break;
		default :
		colorset = reverseShadesOfGray;
	}
}else{
	colorset = reverseShadesOfGray;
}
var fill = d3.scale.ordinal().range(colorset);


var i = 1;

var layout1 = d3.layout.cloud()
    .words(wordArray)
    //.text(function(d){ console.log(d.text);  return d.text;})
    .padding(padding)
    .rotate(function() {
    	 var angle = angles[Math.floor(Math.random() * angles.length)];
      return angle;
    })
    .spiral('archimedean')
    .font("AkkuratBold")
    .fontSize(function(d) { return d.size; })
    .anchor([outerWidth/2, outerHeight/2])

    .on("end", draw1);

var layout2 = d3.layout.cloud()
    .words(wordArray)
    //.text(function(d){ console.log(d.text);  return d.text;})
    .padding(padding)
    .rotate(function() {
    	 var angle = 90;
      return angle;
    })
    .spiral('archimedean')
    .font("AkkuratBold")
    .fontSize(function(d) { return d.size; })
    .anchor([0, outerHeight/2])
    .on("end", draw2);

var layout3 = d3.layout.cloud()
    .words(wordArray)
    //.text(function(d){ console.log(d.text);  return d.text;})
    .padding(padding)
    .rotate(function() {
    	 var angle = angles[Math.floor(Math.random() * angles.length)];
      return angle;
    })
    .spiral('archimedean')
    .font("AkkuratBold")
    .fontSize(function(d) { return d.size; })
    .anchor([outerWidth/2, 0])

    .on("end", draw3);
var layout4 = d3.layout.cloud()
    .words(wordArray)
    //.text(function(d){ console.log(d.text);  return d.text;})
    .padding(padding)
    .rotate(function() {
    	 var angle = angles[Math.floor(Math.random() * angles.length)];
      return angle;
    })
    .spiral('archimedean')
    .font("AkkuratBold")
    .fontSize(function(d) { return d.size; })
    .anchor([0,0])

    .on("end", draw4);


function draw1(words) {
 var rotation = 1;
 var wordContainer = d3.select('#vis-1 svg');
	 if(wordContainer.empty()){
		 wordContainer = d3.select('#vis-1').append("svg");
	}else{
		wordContainer.select('g').remove();
	}
      wordContainer.attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout1.size()[0] / 2 + "," + layout1.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")

      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "AkkuratBold")	
      .attr("text-anchor", "middle")
      .attr("text-align", "left")
      .transition().duration(1e3)
      .style("fill", function(d, i) { return fill(i); })
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" +  d.rotate  + ")";
      })
      .text(function(d) { return d.text; });
}

function draw2(words) {
 var rotation = 1;
 var wordContainer = d3.select('#vis-2 svg');
	 if(wordContainer.empty()){
		 wordContainer = d3.select('#vis-2').append("svg");
	}else{
		wordContainer.select('g').remove();
	}
      wordContainer.attr("width", layout2.size()[0])
      .attr("height", layout2.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout2.size()[0] / 2 + "," + layout2.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")

      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "AkkuratBold")	
      .attr("text-anchor", "middle")
      .attr("text-align", "left")
      .transition().duration(1e3)
      .style("fill", function(d, i) { return fill(i); })
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" +  d.rotate  + ")";
      })
      .text(function(d) { return d.text; });
}

function draw3(words) {
 var rotation = 1;
 var wordContainer = d3.select('#vis-3 svg');
	 if(wordContainer.empty()){
		 wordContainer = d3.select('#vis-3').append("svg");
	}else{
		wordContainer.select('g').remove();
	}
      wordContainer.attr("width", layout3.size()[0])
      .attr("height", layout3.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout3.size()[0] / 2 + "," + layout3.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")

      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "AkkuratBold")	
      .attr("text-anchor", "middle")
      .attr("text-align", "left")
      .transition().duration(1e3)
      .style("fill", function(d, i) { return fill(i); })
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" +  d.rotate  + ")";
      })
      .text(function(d) { return d.text; });
}

function draw4(words) {
 var rotation = 1;
 var wordContainer = d3.select('#vis-4 svg');
	 if(wordContainer.empty()){
		 wordContainer = d3.select('#vis-4').append("svg");
	}else{
		wordContainer.select('g').remove();
	}
      wordContainer.attr("width", layout4.size()[0])
      .attr("height", layout4.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout4.size()[0] / 2 + "," + layout4.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")

      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "AkkuratBold")	
      .attr("text-anchor", "middle")
      .attr("text-align", "left")
      .transition().duration(1e3)
      .style("fill", function(d, i) { return fill(i); })
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" +  d.rotate  + ")";
      })
      .text(function(d) { return d.text; });
}

function generate(wordsArray, angle, layout) {
	words = [];
    layout.stop().words(wordsArray).anchor(layout.anchor()).rotate(function(){return angle; }).start();
}




$(document).ready(function(){
	var outerWidth = $('.vis-wrapper-4').width();
	var outerHeight = $('.vis-wrapper-4').height();
	
	layout1.size([outerWidth/2, outerHeight/2]).start();
	layout2.size([outerWidth/2, outerHeight/2]).start();
	layout3.size([outerWidth/2, outerHeight/2]).start();
	layout4.size([outerWidth/2, outerHeight/2]).start();
	
	firebaseRef.child(surveyName).on('value', function(snapshot){
		var i = 0;
		$.each(snapshot.val(), function(question, answers) {
			
			
			var questionID = question.replace(/ /g, "-").replace("?", "");
			if(jQuery('#'+questionID).length > 0 ){
				//question exists, update it

			}
			else{
				//new question, create it.
				var qEl = $('<div class="question-wrapper" id="'+questionID+'"></div>');
				$(qEl).prependTo('.vis-wrapper-4 #vis-1');
			}
			var answerTotal = 0;
			var n = 1;
			$.each(answers, function(answer, count){

				if(answer == 'other'){
					answerRef = snapshot.child(question).child(answer).val();
					
					for(word in answerRef){
						answerTotal++;
						wordArray.push({ text : answerRef[word], size : 18});
					}
					
				}else{

					answerCount = snapshot.child(question).child(answer).val();
					answerTotal = Number(answerCount) + Number(answerTotal);
					wordArray.push({ text : answer, size : 2 * answerCount});

				}

			n++;

			});//end each answer
			switch(questionID){
				case "Sigil1" :
			    generate(wordArray, 45, layout1);

			    $('#vis-1').css({'background-size' :  answerTotal+'%'});
			    break;
			    case "Sigil2" :
			    generate(wordArray, -45, layout2);

			    $('#vis-2').css({'background-size' : answerTotal+'%'});
			    break;
			    case "Sigil3" :
			    generate(wordArray, -45, layout3);
			    $('#vis-3').css({'background-size' :  answerTotal+'%'});
			    break;
			    case "Sigil4" :
			    generate(wordArray, 45, layout4);
			    $('#vis-4').css({'background-size' :  answerTotal+'%'});
			    break;
			    default:
			    generate(wordArray, -45, layout1);
			}

			allwords = typeof allwords !== 'undefined' ? allwords.concat(wordArray) : wordArray;
			wordArray = [""];
			answerCount = 0;
			
			i++;
		});//end each question
		
	});//end firebase listener

	$('body .vis').on('click', function(e){
		layoutID = $(this).attr('id');
		switch (layoutID) {
			case "vis-1" :
				layout = layout1;
				angle = 45;
				break;
			case "vis-2" :
				layout = layout2;
				angle = -45;
				break;
			case "vis-3" :
				layout = layout3;
				angle = -45;
				break;
			case "vis-4" :
				layout = layout4;
				angle = 45;
				break;
			default :
				layout = layout1;
		}

		$(this).find('svg g').animate({'opacity' : 0}, 300, function(){

			firebaseRef.child(surveyName).once('value', function(snapshot){
			
				$.each(snapshot.val(), function(question, answers) {
					var wordArray = [];
					$.each(answers, function(answer, count){
						
						if(answer == 'other'){
							answerRef = snapshot.child(question).child(answer).val();
							
							for(word in answerRef){
								wordArray.push({ text : answerRef[word], size : 18});
							}
							
						}else{
							answerCount = snapshot.child(question).child(answer).val();
							wordArray.push({ text : answer, size : 2 * answerCount});

						}
					});
					//var angle = angles[Math.floor(Math.random() * angles.length)];

					generate(wordArray, angle, layout);
				});
			});
		});
	});

});//end dom ready

$(window).resize(function(){
	layout1.stop().size([outerWidth/2, outerHeight/2]).start();
	layout2.stop().size([outerWidth/2, outerHeight/2]).start();
	layout3.stop().size([outerWidth/2, outerHeight/2]).start();
	layout4.stop().size([outerWidth/2, outerHeight/2]).start();
});
