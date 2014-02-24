<?php
$portfolio_meta = array(
			'client' => get_field('portfolio_client'),
			'overview' => get_field('portfolio_overview'),
			'location' => get_field('portfolio_location'),
			'service' => get_field('portfolio_service'),
			'producers' => get_field('portfolio_producer'),
			'directors' => get_field('portfolio_director'),
			'learn_more_link' => get_field('portfolio_learn_more')
			);
if(!empty($portfolio_meta['client'])){
	echo '<strong>Client:</strong> '.$portfolio_meta['client'].'<br />';
}
if(!empty($portfolio_meta['overview'])){
	echo '<strong>Overview:</strong> '.$portfolio_meta['overview'].'<br />';
}
if(!empty($portfolio_meta['location'])){
	echo '<strong>Location:</strong> '.$portfolio_meta['location'].'<br />';
}
if(!empty($portfolio_meta['service'])){
	echo '<strong>Service:</strong> '.$portfolio_meta['service'].'<br />';
}
if(!empty($portfolio_meta['producers'])){
	$i = 1;
	if(count($portfolio_meta['producers']) > 1){
			echo '<strong>Executive Producers: </strong>';
		}
		else {
			echo '<strong>Executive Producer: </strong>';
		}
		
	foreach ($portfolio_meta['producers'] as $key => $value) {
		
		
		echo $value;
		if($i < count($portfolio_meta['producers'])){
			echo ', ';
		}
		else { echo '<br />';}
		$i++;
	}
}
if(!empty($portfolio_meta['directors'])){
	$i = 1;
	if(count($portfolio_meta['directors']) > 1){
			echo '<strong>Creative Directors: </strong>';
		}
		else {
			echo '<strong>Creative Director: </strong>';
		}
		
	foreach ($portfolio_meta['directors'] as $key => $value) {
		
		
		echo $value;
		if($i < count($portfolio_meta['directors'])){
			echo ', ';
		}
		else { echo '<br />';}
		$i++;
	}
}
if(!empty($portfolio_meta['learn_more_link'])){
	echo '<strong>Learn More: </strong><a href="'.$portfolio_meta['learn_more_link'].'" target="_blank">'.substr($portfolio_meta['learn_more_link'], 0, 20).'...</a><br />';
}
?>