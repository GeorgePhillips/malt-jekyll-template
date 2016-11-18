function init_map() {
	var myOptions = {
		scrollwheel: false,
		draggable: false,
		panControl: false,
		disableDefaultUI: true,
		styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}],
		zoom: window.mapData.zoom,
		maxZoom: window.mapData.zoom,
		minZoom: window.mapData.zoom,
		center: new google.maps.LatLng(window.mapData.latitude, window.mapData.longitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(window.mapData.latitude, window.mapData.longitude)
	});

	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(myOptions.center);
	});
}

$(document).ready(function() {
	$(".fancybox").fancybox();
});

$(window).on("load", function() {
	var msnry = new Masonry( '.grid', {
		itemSelector: '.grid-item',
		gutter: 10
	});
});

google.maps.event.addDomListener(window, 'load', init_map);
