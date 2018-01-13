function AboutCtrl($scope){
	$(function(){


     var logOb;

function fail(e) {
  console.log("FileSystem Error");
  console.dir(e);
}// end file error

var elem;
var j=1;

$scope.delete = function(){

     logOb.createWriter(function(fileWriter) {
      fileWriter.truncate(0);
      alert("file deleted");
});

}

$scope.direction = function(){

  var deviceOreintation = orientationDevice();

    /*if(deviceOreintation>=127.5 && deviceOreintation<172.5){
              var der = "south";
              //console.log("i m in south" +deviceOreintation);
            }
            if(deviceOreintation>=172.5 && deviceOreintation<217.5){
              var der = "sw";
              //console.log("i m in west" +deviceOreintation);
            }
            if(deviceOreintation>=217.5 && deviceOreintation<262.5){
              var der = "west";
              //console.log("i m in west" +deviceOreintation);
            }
            if(deviceOreintation>=262.5 && deviceOreintation<307.5){
              var der = "nw";
              //console.log("i m in west" +deviceOreintation);
            }
            if(deviceOreintation>=307.5 && deviceOreintation<352.5){
              var der = "north";
              //console.log("i m in west" +deviceOreintation);
            }
            if((deviceOreintation>=352.5 && deviceOreintation<360) || (deviceOreintation>=0 && deviceOreintation<37.5)){
              var der = "ne";
              //console.log("i m in north" +deviceOreintation);
            }
            if(deviceOreintation>=37.5 && deviceOreintation<82.5){
              var der = "east";
              //console.log("i m in east" +deviceOreintation);
            }
            if(deviceOreintation>=82.5 && deviceOreintation<127.5){
              var der = "se";
              //console.log("i m in east" +deviceOreintation);
            }*/

						if(deviceOreintation>=105 && deviceOreintation<195){

							var der = "south";
              console.log("i m in south" +deviceOreintation);
            }
            if(deviceOreintation>=195 && deviceOreintation<285){

							var der = "west";
              console.log("i m in west" +deviceOreintation);
            }
            if((deviceOreintation>=285 && deviceOreintation<360) || (deviceOreintation>=0 && deviceOreintation<15)){

							var der = "north";
              console.log("i m in north" +deviceOreintation);
            }
            if(deviceOreintation>=15 && deviceOreintation<105){

							var der = "east";
              console.log("i m in east" +deviceOreintation);
            }

            $('#direction').html(der);


}


  $scope.heatMap = function(){
    var zone = $scope.selectedRoompart;

    var t_beacon  =[];
    var rssi_1218 =[];
    var rssi_1219 =[];
    var rssi_1221 =[];
    //var rssi_1222 =[];
    //var rssi_1211 =[];
    var i = 0;

  	 estimote.beacons.requestAlwaysAuthorization();
        estimote.beacons.startRangingBeaconsInRegion(
          {},
          function(beaconInfo) {
            
          	
            var elem = '';
             
          	    $.each(beaconInfo.beacons, function(key, beacon){
                $('#korra').empty();
                beaconInfo.beacons.sort(function(beacon1, beacon2) {
                return beacon1.rssi < beacon2.rssi; });
                //elem += createBeaconJson(beacon);
								var string_UUID = beacon.proximityUUID;
								var lengthUUID = string_UUID.length;
								var lastUUID = string_UUID.substr(lengthUUID - 4);
                                if( lastUUID == '1218' ) rssi_1218.push(beacon.rssi)
								if( lastUUID == '1219' ) rssi_1219.push(beacon.rssi)
								if( lastUUID == '1221' ) rssi_1221.push(beacon.rssi)
								//if( lastUUID == '1222' ) rssi_1222.push(beacon.rssi)
								//if( lastUUID == '1211' ) rssi_1211.push(beacon.rssi)

            });i++;
                if(i > 9){
                estimote.beacons.stopRangingBeaconsInRegion({});


                    // with kalman filter
                    kalmanFilter(rssi_1218,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571218");
                    kalmanFilter(rssi_1219,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571219");
                    kalmanFilter(rssi_1221,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571221");
                    //kalmanFilter(rssi_1222,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571222");
                   // kalmanFilter(rssi_1211,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571211");



      

      window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
       console.log("got main dir",dir);
       dir.getFile("log.txt", {create:true}, function(file) {
           console.log("got the file", file);
           logOb = file;

            
           var log = '{ "zone":"'+zone+'",\n "listBeacons":[\n' + t_beacon + "]}, \n";
           writeLog(log);
           readfile();
       });
   });
    i=0;
    alert('the Zone '+zone+' created');

    }

    },
           function(errorMessage) {  alert('Ranging error: ' + errorMessage)  });

}

// calculate the standart of some data
function standart_array(rssi_array, mean, sum){
	var temp = 0;
  for(var i= 0;i<rssi_array.length;i++){
		temp += Math.pow(rssi_array[i]-mean,2);
	}

	return Math.sqrt((1/sum)*temp);
}


// kalman filer
function kalmanFilter(tableToFilter,tableToPush,uuid) {
    console.log('i m in kalman');
    var A = 1;
    var H = 1;
    var Q = 1e-6;
    var R = 2;
    var XK = -70;
    var PK = 1;
    var X;
    var K;
    for(var i=0; i<tableToFilter.length;i++ ){
        //Prediction Stage
        var XK1 = XK;
        PK = PK + Q;
        //Update Stage
        K = PK / (PK + R);
        X = XK1 + K*(tableToFilter[i] - XK1);
        PK = (1 - K) * PK;
        XK = X;
    }
    tableToPush.push({
        "uuid": uuid,
        "rssi": X
    });
    //console.log('uuid in kalman '+uuid+' rssi '+X);
}


// calculate the sum of some data
function sum_array(total, sum){
			return total + sum;
}

// calculate the average of some data
function final_rssi(rssi_array, mean, standart){
	for(var i= 0;i<rssi_array.length;i++){
		if(rssi_array[i]<mean-2*standart) rssi_array.splice(i,1);
	}

	return rssi_array.reduce(sum_array)/rssi_array.length;
}



function orientationDevice(){
        //var acc;
        //$('#ShowBeacons').empty();

             navigator.compass.getCurrentHeading(
                        function(heading){
                            hd=heading.magneticHeading;
                            //alert('head :' +hd);
                        }
                      , function(error){
                            alert('CompassError: ' + error.code);
                        }
              );
              //alert("hd "+hd);
             return hd;
      }//Ende of orientationDevice


function win(writer) {
    writer.truncate(10);
};


function writeLog(str) {
    if(!logOb) return;
    console.log(str);
    logOb.createWriter(function(fileWriter) {

        fileWriter.seek(fileWriter.length);

        var blob = new Blob([str], {type:'text/plain'});
        fileWriter.write(blob);
        //console.log("ok, in theory i worked");
    }, fail);
}

function readfile(){
    logOb.file(function (file) {
         var reader = new FileReader();

        reader.onloadend = function(e) {
            console.log(this.result);
        };

        reader.readAsText(file);
    }, fail);
}



//Begin of createBeaconHTML()
function createBeaconJson(beacon)
{
var htm = '{"UUID":"'+ beacon.proximityUUID
        + '", "rssi":'         + beacon.rssi+'},\n';
return htm;

} //ende of createBeaconHTML




});
}
