var mapOptions = {
  center: new google.maps.LatLng(41.871850, -87.649250),
  zoom: 16,
  scaleControl: true
}

function initMap() {
  var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: 'click to load data',
    id: 2308
  });

  //var markers[];
  //$.ajax("/map/" 

  google.maps.event.addListener( marker, 'click', function(){
    $.ajax("/map/" + marker.id).done(function(data){
      console.log(data);
      document.getElementById("DATA").placeholder = data.name;
    });
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
