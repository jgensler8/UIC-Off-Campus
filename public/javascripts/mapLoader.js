var mapOptions = {
  center: new google.maps.LatLng(41.871850, -87.649250),
  zoom: 16,
  scaleControl: true
}

function initMap() {
  var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initMap);
