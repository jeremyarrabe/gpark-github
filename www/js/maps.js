   var map;
      function initMap() {
        var pinIcon = new google.maps.MarkerImage(
         "img/loading-red-spot.gif",
         null, /* size is determined at runtime */
         null, /* origin is 0,0 */
         null, /* anchor is bottom center of the scaled image */
         new google.maps.Size(30, 30)
         );  
      //paid parking 
      var parkIconPaid = new google.maps.MarkerImage(
       "img/park-icon.png",
       null, /* size is determined at runtime */
       null, /* origin is 0,0 */
       null, /* anchor is bottom center of the scaled image */
       new google.maps.Size(30, 30)
       ); 

      //free parking
      var parkIconFree = new google.maps.MarkerImage(
       "img/free-park.png",
       null, /* size is determined at runtime */
       null, /* origin is 0,0 */
       null, /* anchor is bottom center of the scaled image */
       new google.maps.Size(30, 30)
       ); 


      var directionsDisplay = new google.maps.DirectionsRenderer;
      var directionsService = new google.maps.DirectionsService;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 14.832862, lng: 120.282062},
        gestureHandling: 'greedy',
        streetViewControl: false,
        zoomControl: false,
        disableDefaultUI: true,
        styles: [
        {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
          {
            "saturation": "32"
          },
          {
            "lightness": "-3"
          },
          {
            "visibility": "on"
          },
          {
            "weight": "1.18"
          }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
          {
            "saturation": "-70"
          },
          {
            "lightness": "14"
          }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
          {
            "saturation": "100"
          },
          {
            "lightness": "-14"
          }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "off"
          },
          {
            "lightness": "12"
          }
          ]
        }
        ]
      });
    }