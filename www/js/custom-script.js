


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

  if (event.target.id === 'help') { 

    $("#nav-help").addClass("active-state");
    $("#nav-home").removeClass("active-state");

    $("#nav-account").removeClass("active-state");
    $("#nav-history").removeClass("active-state");
    $("#nav-favorites").removeClass("active-state");

    $("#nav-settings").removeClass("active-state");
  }

  if (event.target.id === 'about') { 

    $("#nav-settings").addClass("active-state");
    $("#nav-help").removeClass("active-state");
    $("#nav-home").removeClass("active-state");

    $("#nav-account").removeClass("active-state");
    $("#nav-history").removeClass("active-state");
    $("#nav-favorites").removeClass("active-state");

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
    var title = event.target.data && event.target.data.title ? event.target.data.title : 'Profile';
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
   localStorage.setItem("i", 1);

 }


 if(event.target.id == "viewPolicyTemplate"){

  function addMore(){


    var max = localStorage.getItem("generateMax");
    var policy = " ";

    for(var i = 1; i <= max; i++){
      policy += '<ons-list-header style="background-color: #F3F3F3">Policy'+i+'</ons-list-header>';
      policy += '<ons-list style="background-color: #F3F3F3">';
      policy += '<ons-list-item>';
      policy += '<textarea id="policy'+i+'" class="textarea" rows="8" placeholder="Enter Policy" style="width: 100%; margin-top:3%"></textarea>';
      policy += '</ons-list-item>';
      policy += '</ons-list>'; 
    }

    document.getElementById("policies").innerHTML += policy;
  }
  addMore();
}


Math.floor(Math.random() * 10)

if (event.target.id == "ownersignup") {
  var id = Math.floor(Math.random() * 1000)
  localStorage.setItem("parkingId", id);
  localStorage.setItem("parkingId2", id);
}


if (event.target.id  == "parkingPolicy") {
  console.log("policy");
  function policy(){
    var pId = localStorage.getItem("getId");
    
    $.post("https://www.gcccsbsit.xyz/_gpark/_api/select/s_selectPolicy.php",{p_Id: pId}, function(data){
      var policies = " "; 
      for(var i =0 ;i <data.length; i++){
        var count = (i+1);
        policies += ' <ons-list-header>Policy '+count+'</ons-list-header>';
        policies += '<ons-list-item modifier="longdivider">'+data[i].po_Content+'</ons-list-item>';
      }

      document.getElementById('viewPolicies').innerHTML += policies;
    });

  }




  policy();
}



if(event.target.id == "ownerpage"){
  ons.disableDeviceBackButtonHandler();
  console.log('sad');

}


if(event.target.id == "login"){
/*  ons.ready(function() {
    ons.disableDeviceBackButtonHandler();
  });*/

}





});








