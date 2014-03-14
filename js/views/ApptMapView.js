(
  var ApptMapView = Backbone.View.extend({
    defaults:{
      zoom: 16,
      scaleControl: true
      center: new google.maps.LatLng(41.871850, -87.649250)
    },
    initialize: function(){
      console.log("created appt view");
      var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDm7NgnT4npV8uqF4ojhgK7RXd8X2hOIYE&sensor=false";
      $.ajax{
        url: url,
        dataType: "script",
        async, false,
        success: function(){
            console.log("loaded MAP view INIT");
        }
      }
      this.model.set('map', google.maps.Map( this.el, this.model.get('mapOptions')));
      this.render();
    },
    render: function(){
      $('#' + this.id).replaceWith( this.el);
      return this;
    }
  })

)(); 