document.addEventListener('deviceready',function(){
    //Code au lamcement de l'App
    // TODO: Add functionality if needed.

		var listPorts = function() {
            // list the available BT ports:
            bluetoothSerial.list(function(results) {app.display(JSON.stringify(results));},
                                 function(error) {app.display(JSON.stringify(error));});}

        // if isEnabled returns failure, this function is called:
		var notEnabled = function() {alert("Diese App braucht Bluetooth.");
				bluetoothSerial.enable(function() {	console.log("Bluetooth is enabled");},
                              		   function() {  console.log("The user did *not* enable Bluetooth");});}

         // check if Bluetooth is on:
        bluetoothSerial.isEnabled(listPorts,notEnabled);
        estimote.beacons.requestAlwaysAuthorization();
        console.log('compass '+navigator.compass);
//**********************************************************
//**********************************************************
//**********************************************************
/*******compass*******/

for(i =0;i<3;i++){
navigator.compass.getCurrentHeading(function onSuccess(heading,_callback) {
                            //alert('Heading: ' + heading.magneticHeading);
                            deviceOreintation = heading.magneticHeading;
                        }, 
                        function onError(error) {
                            alert('CompassError: ' + error.code);
                        }
);
}

/**************/

        navigator.splashscreen.hide();

		hyper.log('onDeviceReady');
},false);


var app=angular.module('app',['siyfion.sfTypeahead']);

app.config(function($routeProvider){
	$routeProvider
	            .when('/home',{templateUrl:'partials/home.html'})
	            .when('/about',{templateUrl:'partials/about.html'})
	            .when('/history',{templateUrl:'partials/history.html'})
	            .otherwise({redirectTo:'/home'})
});
