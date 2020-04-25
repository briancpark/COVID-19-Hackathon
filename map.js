function initMap() {
      // The location of Uluru
      var toronto = {lat: 43.6487, lng: -79.38544};
      var montreal = {lat: 45.5124, lng: -73.55468};
      // The map, centered at Uluru
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 4, center: toronto});
      // The marker, positioned at toronto
    
      var marker = new google.maps.Marker({
        position: toronto,
        map: map,
        title: 'Store 1'
      });

      var marker1 = new google.maps.Marker({
        position: montreal,
        map: map,
        title: 'Store 2'
      });
    
    }