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
  if(event.target.id === 'notifications'){
              ons.ready(function() {
            var pullHook = document.getElementById('pull-hook');

            pullHook.addEventListener('changestate', function(event) {
              var message = '';

              switch (event.state) {
                case 'initial':
                message = 'Pull to refresh';
                break;
                case 'preaction':
                message = 'Release';
                break;
                case 'action':
                message = '<ons-icon icon="fa-redo" spin style="color:#1DA1F2" size="20px"></ons-icon>';
                break;
              }

              pullHook.innerHTML = message;
            });

            pullHook.onAction = function(done) {
              setTimeout(done, 2000);
              setTimeout(getNotif(), 2000);

            };
          });

          function getNotif(){
            $.getJSON("https://www.gcccsbsit.xyz/_gpark/_api/select/s_Notif.php", function(data){
              var notifs ="";
              for(var i = 0; i < data.length; i++){
                notifs += '<ons-list-item style="background-color: white;" modifier="chevron" tappable>';
                notifs += '<div class="left"><img class="list-item__thumbnail" src="img/no-image.png"></div>';
                notifs += '<div class="center"><span class="list-item__title">'+data[i].n_title+'</span><span class="list-item__subtitle" id="content">'+data[i].n_content+'</span></div>';
                notifs += '</ons-list-item>';
              }

              document.getElementById("ons-list").innerHTML = notifs;

            });

          }
          getNotif();
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



    if(event.target.id == "profile"){
      var title = event.target.data && event.target.data.title ? event.target.data.title : '';
      event.target.querySelector('ons-toolbar div.center').textContent = title;  
      $("#nav-account").addClass("active-state");

      $("#nav-home").removeClass("active-state");
      $("#nav-history").removeClass("active-state");
      $("#nav-favorites").removeClass("active-state");
      $("#nav-help").removeClass("active-state");
      $("#nav-settings").removeClass("active-state");


    }

    if(event.target.id == "ownersignup"){

       locationSelector();
       localStorage.setItem("i", 0);

    }





  });






