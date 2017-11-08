




function PosCtrl($scope,$http){
 $(function(){
$scope.panel = 0;

 $scope.search = function(){

 // to switch between the panels
 $scope.panel  = 1;
 //findWay();
 startRangingBeacons();
 //orientationDevice();

  }
  /* automatic search */
   $scope.selectedRoom = "";

  // instantiate the bloodhound suggestion engine
  var rooms = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.room); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
      { room: 'Mueller' },
      { room: 'Koch' },
      { room: 'Pawlowski' },
      { room: 'Bumiller' },
      { room: 'Shaefer' },
      { room: 'Bittner' },
      { room: 'Handm'},
      { room: 'lossifidiss' },
      { room: 'Geisler' },
      { room: 'Wechsler' },
      { room: 'Jansen' },
      { room: 'Lausberg' },
      { room: 'Knot1' },
      { room: 'Knot2' },
      { room: 'Knot3' },
      { room: 'Knot4' },
      { room: 'Knot5' },
      { room: 'Knot6' },
      { room: 'Knot7' },
      { room: 'Knot8' },
      { room: 'Knot9' },
      { room: 'Knot10' },
      { room: 'Knot11' },
      { room: 'Knot12' },
      { room: 'Knot13' },
      { room: 'Knot14' },
      { room: 'Knot15' },
      { room: 'labomueller'},
    ]
  });

  // initialize the bloodhound suggestion engine
  rooms.initialize();

  $scope.roomsDataset = {
    displayKey: 'room',
    source:rooms.ttAdapter(),
    templates: {
      empty: [
        '<div class="tt-suggestion tt-empty-message">',
        'No results were found ...',
        '</div>'
      ].join('\n'),
    }
  };

  // Typeahead options object
  $scope.exampleOptions = {
    displayKey: 'title'
  };

  /* end the funcftion here a */

    // this is the graph of our layer


    /*
===
===tkharbi9 dial ayou
===
===
*/


function startRangingBeacons(){
      //alert(heatMap["B"][1].UUID);
      //alert(heatMap.length);
    // Request authorisation.
          
          
        estimote.beacons.requestAlwaysAuthorization();
        estimote.beacons.startRangingBeaconsInRegion(
          {}, // Empty region matches all beacons.

          function(beaconInfo) {

            //Array to stock Data from Beacons what we found
            var elem = '';
          var t_beacon=[];
          var rssi_1218 =[];
          var rssi_1219 =[];
          var rssi_1221 =[];
          var rssi_1222 =[];
          var rssi_1223 =[];

          var heatMap = [];
          var der='';
          var deviceOreintation = orientationDevice();

            //alert('device ortientation : '+deviceOreintation);
            // start 4 directions
            if(deviceOreintation>=105 && deviceOreintation<195){
              heatMap = southHeatMap;
              console.log("i m in south" +deviceOreintation);
            }
            if(deviceOreintation>=195 && deviceOreintation<285){
              heatMap = westHeatMap;
              console.log("i m in west" +deviceOreintation);
            }
            if((deviceOreintation>=285 && deviceOreintation<360) || (deviceOreintation>=0 && deviceOreintation<15)){
              heatMap = northHeatMap;
              console.log("i m in north" +deviceOreintation);
            }
            if(deviceOreintation>=15 && deviceOreintation<105){
              heatMap = eastHeatMap;
              console.log("i m in east" +deviceOreintation);
            }

              // end 4 directions

             // start with 8 direction
             /*if(deviceOreintation>=127.5 && deviceOreintation<172.5){
               der = "south";
               heatMap = south;
              //console.log("i m in south" +deviceOreintation);
            }
            if(deviceOreintation>=172.5 && deviceOreintation<217.5){
               der = "south west";
               heatMap = sw;
              //console.log("i m in west" +deviceOreintation);
            }
            if(deviceOreintation>=217.5 && deviceOreintation<262.5){

               der = "west";
               heatMap = west;
              //console.log("i m in west" +deviceOreintation);
            }
            if(deviceOreintation>=262.5 && deviceOreintation<307.5){
               der = "north west";
               heatMap = nw;
                            }
            if(deviceOreintation>=307.5 && deviceOreintation<352.5){
               der = "north";
               heatMap = north;
              //console.log("i m in west" +deviceOreintation);
            }

            if((deviceOreintation>=352.5 && deviceOreintation<360) || (deviceOreintation>=0 && deviceOreintation<37.5)){
              heatMap = ne;
              der = "north east";
              //console.log("i m in north" +deviceOreintation);
            }

            if(deviceOreintation>=37.5 && deviceOreintation<82.5){
              heatMap = east;
              der = "east";
              //console.log("i m in east" +deviceOreintation);
            }

            if(deviceOreintation>=82.5 && deviceOreintation<127.5){
              heatMap = se;
              der = "south east";
              //console.log("i m in east" +deviceOreintation);
            }*/
            // end 8 direction



            for(var i=0;i<=10;i++){
            $.each(beaconInfo.beacons, function(key, beacon){
                      beaconInfo.beacons.sort(function(beacon1, beacon2) {
                      return beacon1.rssi < beacon2.rssi; });
                      var string_UUID = beacon.proximityUUID;
											var lengthUUID = string_UUID.length;
											var lastUUID = string_UUID.substr(lengthUUID - 4);
                      if( lastUUID == '1218' ) rssi_1218.push(beacon.rssi)
											if( lastUUID == '1219' ) rssi_1219.push(beacon.rssi)
											if( lastUUID == '1221' ) rssi_1221.push(beacon.rssi)
											if( lastUUID == '1222' ) rssi_1222.push(beacon.rssi)
											if( lastUUID == '1223' ) rssi_1223.push(beacon.rssi)
                      //t_beacon.push({ "uuid" :beacon.proximityUUID,"rssi" : beacon.rssi});


            });}
            //console.log('e ='+e);
            //console.log(rssi_1218);
              //console.log(rssi_1219);
                //console.log(rssi_1221);
                  //console.log(rssi_1222);
                    //console.log(rssi_1223);


              console.log("heatMap :"+heatMap);

              var sum_1218 = rssi_1218.reduce(sum_array);
							var sum_1219 = rssi_1219.reduce(sum_array);
							var sum_1221 = rssi_1221.reduce(sum_array);
							var sum_1222 = rssi_1222.reduce(sum_array);
							var sum_1223 = rssi_1223.reduce(sum_array);

							var mean_1218 = sum_1218 / rssi_1218.length;
							var mean_1219 = sum_1219 / rssi_1219.length;
							var mean_1221 = sum_1221 / rssi_1221.length;
							var mean_1222 = sum_1222 / rssi_1222.length;
							var mean_1223 = sum_1223 / rssi_1223.length;

							var standat_1218 = standart_array(rssi_1218, mean_1218, sum_1218);
							var standat_1219 = standart_array(rssi_1219, mean_1219, sum_1219);
							var standat_1221 = standart_array(rssi_1221, mean_1221, sum_1221);
							var standat_1222 = standart_array(rssi_1222, mean_1222, sum_1222);
							var standat_1223 = standart_array(rssi_1223, mean_1223, sum_1223);

							var final_rssi_1218 = final_rssi(rssi_1218, mean_1218, standat_1218);
							var final_rssi_1219 = final_rssi(rssi_1219, mean_1219, standat_1219);
							var final_rssi_1221 = final_rssi(rssi_1221, mean_1221, standat_1221);
							var final_rssi_1222 = final_rssi(rssi_1222, mean_1222, standat_1222);
							var final_rssi_1223 = final_rssi(rssi_1223, mean_1223, standat_1223);

              t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": final_rssi_1218});
							t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": final_rssi_1219});
							t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": final_rssi_1221});
							t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": final_rssi_1222});
							t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi": final_rssi_1223});
                     //t_beacon.push(elem);
              

            //alert("the length of t_beacon is :"+t_beacon.length);
            var errorTab;
            var min=Math.pow(10,20);
            var err=0;
            var Zonefinale;
            for(var i=0;i<heatMap.length;i++){
            var error = 0;
            var zone  = heatMap[i].zone;
            //console.log("zone :"+zone);
            var gefunden = false;

                for(k=0;k<t_beacon.length;k++){

                    for(j=0;j<heatMap[i].listBeacons.length;j++){
                      //console.log("rssi t_beacon : "t_beacon[k].rssi+" ,rssi of listBeacons :"+heatMap.listBeacons[j].rssi);
                        if(t_beacon[k].uuid.toLowerCase() == heatMap[i].listBeacons[j].UUID.toLowerCase()){
                          
                          gefunden=true;
                          err = Math.pow(Math.abs(heatMap[i].listBeacons[j].rssi)-Math.abs(t_beacon[k].rssi),2);
                          //console.log("err :"+err);
                          }
                    }
                    if(!gefunden){
                    err = Math.pow(t_beacon[k].rssi,2);
                    }
                    error += err;
                }
                console.log("Zone "+zone+" Error "+error);

                if(min>error){
                          min = error;
                          Zonefinale = zone;
                          }
            }
            console.log("min ="+min+" zone="+Zonefinale);
            alert('zone: '+Zonefinale+', direction : '+der);
           
             //d3.select(".zones").style({"fill":"#dddd9d"});
             //d3.select("#"+Zonefinale).style({"fill":"#e74c3c"});

        },
          function(errorMessage) {  alert('Ranging error: ' + errorMessage)  });


      }//End Of startRangingBeacons

      //Begin of GetXY
      //GetXY get UUID from Beacon and search for X and Y in The Table BeaconsTab
      function getXY(t_b){
              for(var j=0;j<t_b.length;j++){
                        t_uuid= t_b[j].uuid;
                        for(var i=0;i<BeaconsTab.length;i++){

                            v_uuid = BeaconsTab[i].uuid.toLowerCase();
                             if(v_uuid == t_uuid){
                                    t_b[j]={ "uuid" :t_uuid , "x":BeaconsTab[i].x , "y":BeaconsTab[i].y, "distance": t_b[j].distance };
                             }
                        }
                      }
     } //End of GetXY

     // calculate the standart of some data
     function standart_array(rssi_array, mean, sum){
     	var temp = 0;
       for(var i= 0;i<rssi_array.length;i++){
     		temp += Math.pow(rssi_array[i]-mean,2);
     	}

     	return Math.sqrt((1/sum)*temp);
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

      //Begin Of accelerationDevice get acceleration Device
      /*function accelerationDevice(){
        var acc;
        $('#ShowBeacons').empty();
          setInterval(function(){navigator.accelerometer.getCurrentAcceleration(
          function(acceleration) {
                    acc +='<p>Acceleration X: ' + acceleration.x + '</p>\n' +
                                        '<p>Acceleration Y: ' + acceleration.y + '</p>\n' +
                                        '<p>Acceleration Z: ' + acceleration.z + '</p>\n' +
                                        '<p>Timestamp: '      + acceleration.timestamp + '</p>\n<p>------------------</p>';
                  $('#ShowBeacons').append(acc);
                                        },

          function() {alert('onError!');}
        );},5000);
      }//Ende of accelerationDevice
      */
      //Begin of All orientationDevice to get the Orientation
      function orientationDevice(){

             navigator.compass.getCurrentHeading(

                        function(heading){      hd = heading.magneticHeading;},
                        function(error){    alert('CompassError: ' + error.code);}
              );

             return hd;
      }//Ende of orientationDevice

    //Begin of Sensor Fusion (Accelerometer+Gyroscope+Compass) with Kahlman filter for Device Orientation
    /*function Sensorfusion(){
            var x =2;
            alert('bin in sensor fusion');
            if (navigator.fusion) {
                       navigator.fusion.setMode(function (result) {
                           console.log('result : ', result);
                       }, function (err) {
                           console.log('err : ', err);
                       }, {
                           mode: x
                       });
                      //  navigator.fusion.getCurrentSensorFusion(
                      //   function(result) { alert('x: ' + result.x);}
                      //   , function(error) {alert('FusionError: ' + error.code);});

                       navigator.fusion.watchSensorFusion(function (result) {
                                alert('yaw : '+ result.eulerAngles.yaw+' | pitch : '+ result.eulerAngles.pitch+' | roll : '+ result.eulerAngles.roll);
                                }, function (err) { console.log('error', err); }, { frequency: 1000});
             }
    }*/
    //Ende Of Sensorfusion



    //Get the power 2 of
    //var sqr = function (a) {  return Math.pow(a, 2);};
    //get back vector
    //var vector = function (x, y) {  return {x: x, y: y};};


        //Trilateration function to get the X and Y of Device From X,Y of 3 Beacons
        function calculate_Tri (beacons) {
                  var j, k, x, y;
                  if (beacons.length < 3) {
                      console.error("Error! Please add at least three beacons!");
                      return vector(0, 0);
                  }


                       var xa = beacons[0].x;
                       var ya = beacons[0].y;
                       var xb = beacons[1].x;
                       var yb = beacons[1].y;
                       var xc = beacons[2].x;
                       var yc = beacons[2].y;
                       var ra = beacons[0].distance ;
                       var rb = beacons[1].distance ;
                       var rc = beacons[2].distance ;

                 var S = (Math.pow(xc, 2.) - Math.pow(xb, 2.) + Math.pow(yc, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(rc, 2.)) / 2.0;
                 var T = (Math.pow(xa, 2.) - Math.pow(xb, 2.) + Math.pow(ya, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(ra, 2.)) / 2.0;
                 var y = ((T * (xb - xc)) - (S * (xb - xa))) / (((ya - yb) * (xb - xc)) - ((yc - yb) * (xb - xa)));
                 var x = ((y * (ya - yb)) - T) / (xb - xa);

                 /*k = (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].dis) + sqr(beacons[1].dis)) / (2 * (beacons[0].y - beacons[1].y)) - (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[2].x) - sqr(beacons[2].y) - sqr(beacons[0].dis) + sqr(beacons[2].dis)) / (2 * (beacons[0].y - beacons[2].y));
                 j = (beacons[2].x - beacons[0].x) / (beacons[0].y - beacons[2].y) - (beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y);
                 x = k / j;
                 y = ((beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y)) * x + (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].dis) + sqr(beacons[1].dis)) / (2 * (beacons[0].y - beacons[1].y));*/

                 return { x: x,  y: y };
      }
      //Ende of calculate_Tri

/*
== end tkharbi9 dial ayoub
==
==
*/
d3.select("#layer7").append("path")
                    .attr("visibility","hidden")
                    .attr("id","theWay");

    function findWay(){

    d3.selectAll(".knoten").attr("visibility", "hidden");
    var mapCoordnidates ={
    "mueller":       {"x": 132.43132, "y":38.115368 },
    "pawlowski":     {"x": 131.21436, "y": 41.803917},
    "bumiller":      {"x": 130.01164, "y": 45.436447},
    "shaefer":       {"x": 128.82826, "y": 49.058914},
    "knot1":         {"x": 127.98038, "y": 51.64579},
    "koch":          {"x": 127.56159, "y": 52.847759},
    "bittner":       {"x": 126.87598, "y": 54.994427},
    "lossifidiss":   {"x": 126.34015, "y": 56.58363},
    "handm":         {"x": 125.62983, "y": 58.650169},
    "wechsler":      {"x": 125.08993, "y": 60.41745},
    "geisler":       {"x": 124.00881, "y": 63.713413},
    "lausberg":      {"x": 118.63727, "y":64.231216},
    "jansen":        {"x": 122.76172, "y":67.271194},
    "knot2":         {"x": 116.11674, "y": 70.035522},
    "knot3":         {"x": 109.84778, "y": 70.438797},
    "knot4":         {"x": 102.09695, "y": 70.572433},
    "knot5":         {"x": 95.147957, "y": 70.472206},
    "knot6":         {"x": 86.896004, "y": 70.739479},
    "knot7":         {"x": 75.069328, "y": 70.70607},
    "knot8":         {"x": 73.234314, "y": 73.367828},
    "knot9":         {"x": 75.169556, "y": 65.555763},
    "knot10":        {"x": 75.236374, "y": 62.554344},
    "knot11":        {"x": 75.136147, "y": 50.560627},
    "knot12":        {"x": 75.035919, "y": 47.420212},
    "knot13":        {"x": 75.102737, "y": 42.943447},
    "knot14":        {"x": 75.102737, "y": 35.760578},
    "knot15":        {"x": 75.051895, "y": 32.788326},
    "labomueller":    {"x": 76.004776, "y": 22.764597}
        };

  var map = {mueller:{pawlowski:3},
             pawlowski:{pawlowski:3,bumiller:13},
             bumiller:{pawlowski:4,shaefer:1},
             shaefer:{bumiller:3,knot1:1},
             knot1:{shaefer:2,koch:1},
             koch:{knot1:4,bittner:1},
             bittner:{koch:3,lossifidiss:1},
             lossifidiss:{koch:2,handm:1},
             handm:{lossifidiss:4,wechsler:1},
             wechsler:{handm:3,geisler:1},
             geisler:{wechsler:2,jansen:1},
             jansen:{geisler:2,lausberg:1},
             jansen:{knot2:1},
             lausberg:{jansen:1,knot2:1},
             knot2:{lausberg:1,jansen:1},
             knot2:{knot3:4},
             knot3:{knot2:4,knot4:1},
             knot4:{knot3:3,knot5:1},
             knot5:{knot4:2,knot6:1},
             knot6:{knot5:4,knot7:4},
             knot6:{knot8:5,knot9:6},
             knot7:{knot6:4,knot8:1},
             knot7:{knot9:2},
             knot8:{knot7:1},
             knot9:{knot8:2,knot10:1},
             knot10:{knot9:1,knot11:1},
             knot11:{knot10:1,knot12:1},
             knot12:{knot11:1,knot13:1},
             knot13:{knot12:1,knot14:1},
             knot14:{knot13:1,knot15:1},
             knot15:{knot14:1,labomueller:1},
             labomueller:{knot15:1},
            };
  // end of the graph


  var id_room = $('#room').val();
  var id_room = id_room.toLowerCase();



    graph = new Graph(map);
    var shortWay = [];
    shortWay = graph.findShortestPath('mueller', id_room);
    console.log(shortWay);
     var len = shortWay.length;
     // the points of each noud which will be drawed
     var points =[];

     for(i=0;i<len;i++){
      var key = shortWay[i];
       if(mapCoordnidates[key]){
        object = {"x":mapCoordnidates[key].x, "y":mapCoordnidates[key].y};

        points.push(object);
      }

    }

    console.log(points);


// draw the line of the points  until the destination


  d3.select("#theWay").attr("visibility","hidden");





var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");

d3.select("#theWay").attr("d", lineFunction(points))
                  .attr("id","theWay")
                  .attr("stroke", "#3498db")
                  .attr("stroke-width", 1)
                  .attr("fill", "none")
                  .attr("visibility","visible");
// draw the destination
 d3.select("#"+id_room)
                  .style("fill","#3498db")
                  .style("z-index",10)
                  .attr("r",1)
                  .attr("visibility","visible");

/*var x_val = $("#"+id_room).attr('cx');
var y_val = $("#"+id_room).attr('cy');

    var img = d3.select("#layer7").append("svg:image")
    .attr("src", "marker.svg")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x", x_val)
    .attr("y",y_val);*/
}// end finWay

// the position of the device
d3.select("#layer7").append("circle")
          .attr("id","Device_position")
          .attr("r", 1)
          .attr("visibility", "hidden")
          .style("fill", "purple");

});

// zoom

var svg = d3.select("#svg8");
  svg.call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoom));

function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}
// end zoom



}//Ende PostCtrl
