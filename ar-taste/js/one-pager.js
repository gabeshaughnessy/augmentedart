Requests = {
	QueryString : function(item){
	var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
	return svalue ? svalue[1] : svalue;
	}
}

jQuery(document).ready(function($){
	var sigil = false;
	var dishName = "This is the name of the dish"; //override below
	var description = "This is a paragraph or two about the dish they just ate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula sed nisi semper vestibulum porta eu lectus. Pellentesque et lectus a sem maximus venenatis.";//override below
	if(Requests.QueryString("Sigil1") == 'true'){
	 var sigil = "Sigil1"; 
	 var dishName = "Alliaceus Kuro";
	 description = "Black Garlic Wafer with Goat Cheese Mousse"
	 description = "Wafer di aglio nero con crema di formaggio di capra"
	}else if(Requests.QueryString("Sigil2") == 'true'){
	 var sigil = "Sigil2";
	 dishName = "Ahuacatl";
	 var description = "Pear Compote and Blue Cheese on a Pecan Cracker"; 
	 var description = "Marmellata di pera e blu cheese su un cracker di pecan"; 

	}else if(Requests.QueryString("Sigil3") == 'true'){
	 var sigil = "Sigil3";
	 dishName = "Kul echx";
	 //http://www.firstvoices.com/en/Halqemeylem/word/30acd4fd0fc3234a/Coho+Salmon
	 //qél:éx̱ - salmon eggs
	 description ="Truffle Pearls with Creme Fraiche on a Lays potato pancake"; 
	 description ="Perle di tartufo con Creme Fraiche su un letto di pancake di patate"; 

	}else if(Requests.QueryString("Sigil4") == 'true'){
	 var sigil = "Sigil4"; 
	 dishName = "Quetzal";
	 description = "Chili Chocolate Pot de Creme with Pepsi (caffeine free)";
	 description = "Pot de Creme di cioccolato al chili con Pepsi (senza caffeine)";

	}
	if(sigil !== false){
		var cta_title = "Did you enjoy this dish?";
		var cta_title = "Ti e piaciuto questo piatto?";

		var cta_text = "Translate your experience >";
		var cta_text = "Traduci questa esperienza >";
		
		
		var markup ='<div id="'+sigil+'" class="question" >

		<div class="image-wrapper"><img class="sigil" src="images/'+sigil+'.png" width="100%" height="auto" /></div>
		
		<div class="description flex-wrapper orientation-landscape">
			<div class="flex-7"><h3 class="title">'+dishName+'</h3><p>'+description+'</p></div>
			<div class="flex-3 orientation-landscape flex-wrapper vert">
				<h5>'+cta_title+'</h5>
				<a class="cta button" href="/ar-taste?'+sigil+'=true">'+cta_text+'</a>
			</div>
		</div>
		</div>';
		console.log(markup);
		$('body .content').append(markup);
	}
});