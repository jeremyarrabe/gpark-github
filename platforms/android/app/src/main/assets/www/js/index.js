
ons.ready(function() {
  ons.setDefaultDeviceBackButtonListener(function(event) {
  ons.notification.confirm('Do you want to close the app?') // Ask for confirmation
  .then(function(index) {
      if (index === 1) { // OK button
        navigator.app.exitApp(); // Close the app
      }
    });
});
});
var app = {    
    // Application Constructor
    initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
      this.receivedEvent('deviceready');

    },


    // Update DOM on a Received Event
    receivedEvent: function(id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);


    }


  };



  app.initialize();


