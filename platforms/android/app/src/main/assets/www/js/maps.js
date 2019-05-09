  
function initMap() {
  var map;

  var icon = {
          url: "img/my_location_icon.png", // url
          scaledSize: new google.maps.Size(15, 15), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        };
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 14.832665, lng: 120.282720},
          zoom: 13,
          disableDefaultUI: true,
          gestureHandling: 'greedy',
          styles:[
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
        var infowindow = new google.maps.InfoWindow();        
        setMarkers(map);


        function  setMarkers(map){
          console.log("Working")
          var freePark = {
            url: "img/free-park.png", // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor

          };

          var paidPark = {
            url: "img/paid-park.png", // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor

          };
          
          $.getJSON("https://www.gcccsbsit.xyz/_gpark/_api/select/s_geoLocation.php", function(data){


            for (var i =0; i < data.length; i++) {
              console.log(data[i].D_Type);
              if (data[i].D_Type == "Free") {
                var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(data[i].D_Lat,data[i].D_Lng),
                  map: map,
                  icon: freePark,
                });
              }

              if (data[i].D_Type == "Paid") {
                var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(data[i].D_Lat,data[i].D_Lng),
                  map: map,
                  icon: paidPark,
                });

              }

              google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                  var getLat = marker.getPosition().lat();
                  var getLng = marker.getPosition().lng();
                  var getId = data[i].D_pId;
                  var profile = "templates/park_profile.html";
                  infowindow.setContent("<button class='button button--material--flat' onclick='viewLocation("+getLat+","+getLng+","+getId+")'>View</button>");
                  infowindow.open(map, marker);

                  
                  

                  
                  

                }
              })(marker, i)); 

            }
          });

        }





          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              var marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: icon,

              });

              


            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          alert("Error");
        }


        function viewLocation(lat,lng,id){

          myNavigator.pushPage('templates/park_profile.html');
          localStorage.setItem("getLat", lat);
          localStorage.setItem("getLng", lng);
          localStorage.setItem("getId", id);
        }


        function logChecker(){
          if (localStorage.username) {
            var id = localStorage.getItem("userId");
            $.post("https://www.gcccsbsit.xyz/_gpark/_api/select/s_loginUser.php",{id:id},function(data){
              ons.notification.toast('Welcome '+data[0].U_username, {
                timeout: 2000,

              });
              document.getElementById("userFullname").innerHTML = data[0].U_fname+" "+data[0].U_Lname;
              document.getElementById("userTag").innerHTML = "@"+data[0].U_username;
            });


            document.getElementById("left-log").innerHTML = '<i class="fa fa-sign-out-alt" style="padding-right: 2px; opacity: 0.8"></i>';
            document.getElementById("center-log").innerHTML = 'Logout';


          }
          else{
            

           document.getElementById("userFullname").innerHTML = "Welcome to Gpark";
           document.getElementById("userTag").innerHTML = " ";
           
           
         }
       }


       function accountNav(){
        if (localStorage.username) {
         
          fn.load('templates/profile.html');

        }
        else{
          fn.load('templates/account.html');
        }
      }



      function logOut(){

        ons
        .notification.confirm({title:"", message: "Are you sure you want to logout?"})
        .then(function(index){
          if (index == 1) {

            ons.notification.toast('Logging Out Please Wait...', { timeout: 3000,
            });
            localStorage.clear()

            setTimeout(function(){ navigator.app.exitApp(); }, 3000);
          }
          else{
            console.log("cancelled");
          }

        });

        
        
        
      }

      logChecker();



      function locationSelector(){



        
        new Picker(document.querySelector('.openingTime'), {
          format: 'HH:mm',

          headers: true,
          ampm: false,
          text: {
            title: 'Pick a time',
          },
        });

        new Picker(document.querySelector('.closingTime'), {
          format: 'HH:mm',

          headers: true,
          ampm: true,
          text: {
            title: 'Pick a time',
          },
        });


        var maps;

        maps = new google.maps.Map(document.getElementById('mapSelect'), {
          center: {lat: 14.832665, lng: 120.282720},
          zoom: 12,
          disableDefaultUI: true,
          styles: [
          {
            "featureType": "poi.business",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          }
          ]
        });

        var marker;

        function placeMarker(location) {
          if ( marker ) {
            marker.setPosition(location);
          } else {
            marker = new google.maps.Marker({
              position: location,
              map: maps
            });
          }
        }

        google.maps.event.addListener(maps, 'click', function(event) {
          placeMarker(event.latLng);
          localStorage.setItem("eventLat", event.latLng.lat());
          localStorage.setItem("eventLng", event.latLng.lng());

        });




      }