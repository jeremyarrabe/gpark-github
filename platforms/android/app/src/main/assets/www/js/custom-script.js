ons.ready(function() {
  ons.enableDeviceBackButtonHandler();

  ons.setDefaultDeviceBackButtonListener(function(event) {

});
});




window.fn = {};

window.fn.open = function () {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function (page) {
  var menu = document.getElementById('menu');
  var myNavigator = document.getElementById('myNavigator');
  menu.close();
  myNavigator.resetToPage(page, { animation: 'fade' });
};


document.addEventListener('init', function (event) {

  //Notif
  if (event.target.id === 'notification') {
    var title = event.target.data && event.target.data.title ? event.target.data.title : 'Notification';
    event.target.querySelector('ons-toolbar div.center').textContent = title;
  }

  if (event.target.id === 'visited') {
    var title = event.target.data && event.target.data.title ? event.target.data.title : 'Visited';
    event.target.querySelector('ons-toolbar div.center').textContent = title;
  }

  if (event.target.id === 'home') { 
    initMap();
    $("#nav-home").addClass("active-state");

    $("#nav-account").removeClass("active-state");
    $("#nav-history").removeClass("active-state");
    $("#nav-favorites").removeClass("active-state");
    $("#nav-help").removeClass("active-state");
    $("#nav-settings").removeClass("active-state");
  }

  if (event.target.id === 'park') {
    var title = event.target.data && event.target.data.title ? event.target.data.title : 'Park Profile';
    event.target.querySelector('ons-toolbar div.center').textContent = title;
  }


  if(event.target.id == "account"){
    $("#nav-account").addClass("active-state");

    $("#nav-home").removeClass("active-state");
    $("#nav-history").removeClass("active-state");
    $("#nav-favorites").removeClass("active-state");
    $("#nav-help").removeClass("active-state");
    $("#nav-settings").removeClass("active-state");
  }

  if(event.target.id == "login"){
    var title = event.target.data && event.target.data.title ? event.target.data.title : '';
    event.target.querySelector('ons-toolbar div.center').textContent = title;  }

    if(event.target.id == "profile"){
      var title = event.target.data && event.target.data.title ? event.target.data.title : 'Profile';
      event.target.querySelector('ons-toolbar div.center').textContent = title;  
      $("#nav-account").addClass("active-state");

      $("#nav-home").removeClass("active-state");
      $("#nav-history").removeClass("active-state");
      $("#nav-favorites").removeClass("active-state");
      $("#nav-help").removeClass("active-state");
      $("#nav-settings").removeClass("active-state");


    }


  });











