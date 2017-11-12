// adds every rightclick position to an Array and prints it as JSON
window.tempPoints = [];

google.maps.event.addListener(window.map, "rightclick", function(event)
{
	var lat = event.latLng.lat();
	var lng = event.latLng.lng();
	window.tempPoints.push({ lat: lat, lng: lng });
	console.log({ lat: lat, lng: lng });
	console.log(JSON.stringify(window.tempPoints));
});