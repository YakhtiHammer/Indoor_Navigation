
function AboutCtrl($scope){
	$(function(){

var j=1;
  $scope.heatMap = function(){
  	var i = 0;
  	

	var kora ="";
  	 estimote.beacons.requestAlwaysAuthorization();
        estimote.beacons.startRangingBeaconsInRegion(
          {},
          function(beaconInfo) {
          	var PosTab = [];
          	$.each(beaconInfo.beacons, function(key, beacon){
                      beaconInfo.beacons.sort(function(beacon1, beacon2) {
                      return beacon1.rssi < beacon2.rssi; });
                     
					var obj = {"UUID":beacon.uuid,"rssi":beacon.rssi};
					PosTab.push(obj);	
                    i++;

            });
          	if (i>12) {
                      	
                      	estimote.beacons.stopRangingBeaconsInRegion({});
                      	j++;
                      }        		
    },
           function(errorMessage) {  alert('Ranging error: ' + errorMessage)  });

  		//alert("kora");
  }

  //Begin of createBeaconHTML()
      function createBeaconHTML(beacon)
     {
      var htm = '<div><table><tr><td>UUID</td><td>'       + beacon.proximityUUID
              + '</td></tr><tr><td>RSSI</td><td>'         + beacon.rssi
      htm += '</td></tr></table></div>';
      //alert(htm);
      return htm;
     } //ende of createBeaconHTML


     
	
});
}

/***/
var PosTab = [];
var obj = {"UUID":beacon.uuid,"rssi":beacon.rssi};
PosTab.push(obj);


for (var i = 0; i < arr.length; i++){
    var obj = arr[i];
    for (var key in obj){
        var attrName = key;
        var attrValue = obj[key];
    }
}