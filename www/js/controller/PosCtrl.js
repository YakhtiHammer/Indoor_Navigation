
function PosCtrl($scope,$http){
 $(function(){
$scope.panel = 0;

 $scope.search = function(){

 // to switch between the panels
 $scope.panel  = 1;
 findWay();
startRangingBeacons();
 //orientationDevice();

};
  /* automatic search */
   $scope.selectedRoom = "";

  // instantiate the bloodhound suggestion engine
  var rooms = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.room); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: zimmer_name
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
          var t_beacon=[];
          var rssi_1218 =[];
          var rssi_1219 =[];
          var rssi_1221 =[];
          var rssi_1222 =[];
          var rssi_1211 =[];
          var e = 0;
        estimote.beacons.requestAlwaysAuthorization();
        estimote.beacons.startRangingBeaconsInRegion(
          {}, // Empty region matches all beacons.

          function(beaconInfo) {

            //Array to stock Data from Beacons what we found


          var heatMap = [];
          var der='';
          var deviceOreintation = orientationDevice();

            //alert('device ortientation : '+deviceOreintation);
            // start 4 directions
            if(deviceOreintation>=105 && deviceOreintation<195){
              heatMap = southHeatMap;
              //console.log("i m in south" +deviceOreintation);
            }
            if(deviceOreintation>=195 && deviceOreintation<285){
              heatMap = westHeatMap;
              //console.log("i m in west" +deviceOreintation);
            }
            if((deviceOreintation>=285 && deviceOreintation<360) || (deviceOreintation>=0 && deviceOreintation<15)){
              heatMap = northHeatMap;
              //console.log("i m in north" +deviceOreintation);
            }
            if(deviceOreintation>=15 && deviceOreintation<105){
              heatMap = eastHeatMap;
              //console.log("i m in east" +deviceOreintation);
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




            $.each(beaconInfo.beacons, function(key, beacon){
                      beaconInfo.beacons.sort(function(beacon1, beacon2) {
                      return beacon1.rssi < beacon2.rssi; });
                      var string_UUID = beacon.proximityUUID;
											var lengthUUID = string_UUID.length;
											var lastUUID = string_UUID.substr(lengthUUID - 4);
                      if( lastUUID == '1218' ) rssi_1218.push(beacon.rssi);
											if( lastUUID == '1219' ) rssi_1219.push(beacon.rssi);
											if( lastUUID == '1221' ) rssi_1221.push(beacon.rssi);
											if( lastUUID == '1222' ) rssi_1222.push(beacon.rssi);
											if( lastUUID == '1211' ) rssi_1211.push(beacon.rssi);
                      //t_beacon.push({ "uuid" :beacon.proximityUUID,"rssi" : beacon.rssi});


            });e++;
            if(e > 9){


              //console.log("heatMap :"+heatMap);

              if(rssi_1218.length>0){
                var sum_1218 = rssi_1218.reduce(sum_array);
                var mean_1218 = sum_1218 / rssi_1218.length;
                var standat_1218 = standart_array(rssi_1218, mean_1218, sum_1218);
                var final_rssi_1218 = final_rssi(rssi_1218, mean_1218, standat_1218);
                var dist_1218 = distance_rssi(final_rssi_1218);
                //console.log('distance of 18 ='+dist_1218);
                t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": final_rssi_1218,"distance":dist_1218,"x":BeaconsTab[0].x,"y":BeaconsTab[0].y});
              }

              if(rssi_1219.length>0){
                var sum_1219 = rssi_1219.reduce(sum_array);
                var mean_1219 = sum_1219 / rssi_1219.length;
                var standat_1219 = standart_array(rssi_1219, mean_1219, sum_1219);
                var final_rssi_1219 = final_rssi(rssi_1219, mean_1219, standat_1219);
                var dist_1219 = distance_rssi(final_rssi_1219);
                //console.log('distance of 19 ='+dist_1219);
                t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": final_rssi_1219,"distance":dist_1219,"x":BeaconsTab[1].x,"y":BeaconsTab[1].y});
              }

              if(rssi_1221.length>0){
                var sum_1221 = rssi_1221.reduce(sum_array);
                var mean_1221 = sum_1221 / rssi_1221.length;
                var standat_1221 = standart_array(rssi_1221, mean_1221, sum_1221);
                var final_rssi_1221 = final_rssi(rssi_1221, mean_1221, standat_1221);
                var dist_1221 = distance_rssi(final_rssi_1221);
                //console.log('distance of 21 ='+dist_1221);
                t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": final_rssi_1221,"distance":dist_1221,"x":BeaconsTab[2].x,"y":BeaconsTab[2].y});
              }

              if(rssi_1222.length>0){
                var sum_1222 = rssi_1222.reduce(sum_array);
                var mean_1222 = sum_1222 / rssi_1222.length;
                var standat_1222 = standart_array(rssi_1222, mean_1222, sum_1222);
                var final_rssi_1222 = final_rssi(rssi_1222, mean_1222, standat_1222);
                var dist_1222 = distance_rssi(final_rssi_1222);
                //console.log('distance of 22 ='+dist_1222);
                t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": final_rssi_1222,"distance":dist_1222,"x":BeaconsTab[3].x,"y":BeaconsTab[3].y});
              }

							if(rssi_1211.length>0){
              var sum_1211 = rssi_1211.reduce(sum_array);
							var mean_1211 = sum_1211 / rssi_1211.length;
							var standat_1211 = standart_array(rssi_1211, mean_1211, sum_1211);
							var final_rssi_1211 = final_rssi(rssi_1211, mean_1211, standat_1211);
              var dist_1211 = distance_rssi(final_rssi_1211);
              //console.log('distance of 11 ='+dist_1211);

              t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": final_rssi_1211,"distance":dist_1211,"x":BeaconsTab[4].x,"y":BeaconsTab[4].y});
             }


              /*console.log("distance of 1218 is : "+dist_1218+"\n");
              console.log("distance of 1219 is : "+dist_1219+"\n");
              console.log("distance of 1221 is : "+dist_1221+"\n");
              console.log("distance of 1222 is : "+dist_1222+"\n\n");*/

              // console.log("1218 x :"+BeaconsTab[0].x+" 1218 y: "+BeaconsTab[0].y+"\n");
             //t_beacon.push(elem);

              t_beacon.sort(function(beacon1, beacon2) {
                      return beacon1.distance > beacon2.distance; });

              /*for(i=0;i<t_beacon.length;i++){
                console.log("uuid :"+t_beacon[i].uuid+", distance: "+t_beacon[i].distance+" x: "+t_beacon[i].x+" y: "+t_beacon[i].y+"\n");
              }*/
              /*var koraa = t_beacon.length;
              for(var i =0;i<koraa;i++){
                  console.log('x ='+t_beacon[i].x+' y= '+t_beacon[i].y+' d= '+t_beacon[i].distance+' RSSI : '+t_beacon[i].rssi);

              }

              if(t_beacon.length>2)
                {
                  var pos_device = calculate_Tri(t_beacon);

              console.log("position device x :"+pos_device.x+" position device y: "+pos_device.y);
              // alert("after pos_device");

              // start show the position on the map

              $('#ShowBeacons').append("<p> x :"+pos_device.x+" y: "+pos_device.y+'</p>');*/


            //alert("the length of t_beacon is :"+t_beacon.length);

            // algorthme of heatMap

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
                        if(t_beacon[k].uuid.toLowerCase() == heatMap[i].listBeacons[j].uuid.toLowerCase()){

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
            //alert('zone: '+Zonefinale+', direction : '+der);

            var lengthZone = zones.length;
            for(i =0;i<lengthZone;i++){
              if(zones[i].zone == Zonefinale)
                pos_device = { "x": zones[i].x,  "y": zones[i].y };
            }
             d3.select("#Device_position").transition().duration(800)
                    .attr("visibility","visible")
                    .attr("cx",pos_device.x)
                    .attr("cy",pos_device.y );

            // end heat map lagorithm

            t_beacon  =[];
            rssi_1218 =[];
            rssi_1219 =[];
            rssi_1221 =[];
            rssi_1222 =[];
            rssi_1211 =[];
            e = 0;


             //d3.select(".zones").style({"fill":"#dddd9d"});
             //d3.select("#"+Zonefinale).style({"fill":"#e74c3c"});

        }
      },
          function(errorMessage) {  alert('Ranging error: ' + errorMessage);  });


      }//End Of startRangingBeacons

      //Begin of GetXY
      //GetXY get UUID from Beacon and search for X and Y in The Table BeaconsTab
      /*function getXY(t_b){
              for(var j=0;j<t_b.length;j++){
                        t_uuid= t_b[j].uuid;
                        for(var i=0;i<BeaconsTab.length;i++){

                            v_uuid = BeaconsTab[i].uuid.toLowerCase();
                             if(v_uuid == t_uuid){
                                    t_b[j]={ "uuid" :t_uuid , "x":BeaconsTab[i].x , "y":BeaconsTab[i].y, "distance": t_b[j].distance };
                             }
                        }
                      }
     }*/ //End of GetXY

     // calculate the standart of some data
     function standart_array(rssi_array, mean, sum){
     	var temp = 0;
       for(var i= 0;i<rssi_array.length;i++){
     		temp += Math.pow(rssi_array[i]-mean,2);
     	}

     	return Math.sqrt((1/sum)*temp);
     }

     // calculate the sum of some given data
     function sum_array(total, sum){
     			return total + sum;
     }

     // calculate the average of some given data
     function final_rssi(rssi_array, mean, standart){
     	for(var i= 0;i<rssi_array.length;i++){
     		if(rssi_array[i]<mean-2*standart) rssi_array.splice(i,1);
     	}

     	return rssi_array.reduce(sum_array)/rssi_array.length;
     }

     // calculate the distance from the the rssi

     function distance_rssi(rssi_p){
      var cal= -66;
      var dist;
      if(cal<rssi_p){
          dist = Math.pow(10,rssi_p/cal);
      }
        else{
          dist = (0.9*Math.pow(7.71,rssi_p/cal)+0.11)*0.001;
        }
      return dist;
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
        function calculate_Tri2(beacons){

          //alert("x1 :"+x1+" y1 :"+y1+"x2 :"+x2+"y2 :"+y2+"x3 :"+x3+"y3 :"+y3);

             var x1 = beacons[0].x;
             var y1 = beacons[0].y;
             var x2 = beacons[1].x;
             var y2 = beacons[1].y;
             var x3 = beacons[2].x;
             var y3 = beacons[2].y;
             var r1 = beacons[0].distance ;
             var r2 = beacons[1].distance ;
             var r3 = beacons[2].distance ;

             alert("x1 :"+x1+" y1 :"+y1+" x2 :"+x2+" y2 :"+y2+"x3 :"+x3+" y3 :"+y3);

              delta = 4*((x1-x2)*(y1-y3)-(x1-x3)*(y1-y2));
              A = r2^2-r1^2-x2^2+x1^2-y2^2+y1^2;
              B = r3^2-r1^2-x3^2+x1^2-y3^2+y1^2;

              x = (1/delta) * (2*A*(y1-y3)-2*B*(y1-y2));
              y = (1/delta) * (2*B*(x1-x2)-2*A*(x1-x3));

              return { "x": x,  "y": y };
        }

        function calculate_Tri(beacons) {
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

                 var S = (Math.pow(xc, 2.0) - Math.pow(xb, 2.0) + Math.pow(yc, 2.0) - Math.pow(yb, 2.0) + Math.pow(rb, 2.0) - Math.pow(rc, 2.0)) / 2.0;
                 var T = (Math.pow(xa, 2.0) - Math.pow(xb, 2.0) + Math.pow(ya, 2.0) - Math.pow(yb, 2.0) + Math.pow(rb, 2.0) - Math.pow(ra, 2.0)) / 2.0;
                     y = ((T * (xb - xc)) - (S * (xb - xa))) / (((ya - yb) * (xb - xc)) - ((yc - yb) * (xb - xa)));
                     x = ((y * (ya - yb)) - T) / (xb - xa);

                 /*k = (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].dis) + sqr(beacons[1].dis)) / (2 * (beacons[0].y - beacons[1].y)) - (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[2].x) - sqr(beacons[2].y) - sqr(beacons[0].dis) + sqr(beacons[2].dis)) / (2 * (beacons[0].y - beacons[2].y));
                 j = (beacons[2].x - beacons[0].x) / (beacons[0].y - beacons[2].y) - (beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y);
                 x = k / j;
                 y = ((beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y)) * x + (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].dis) + sqr(beacons[1].dis)) / (2 * (beacons[0].y - beacons[1].y));*/

                 return { "x": x,  "y": y };
      }
      //Ende of calculate_Tri

/*
== end tkharbi9 dial ayoub
==
==
*/
d3.select("#svg8").append("path")
                    .attr("visibility","hidden")
                    .attr("id","theWay");
function findWay(){

  d3.selectAll(".knoten").attr("visibility", "hidden");

  var id_room = $('#room').val().split(" ").join("").toLowerCase();
  id_room = zimmerNameId[id_room];

  graph = new Graph(map);
  var shortWay = [];
  shortWay = graph.findShortestPath('circle17',id_room);
  console.log("the short way to the destination : \n"+shortWay);
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
  for(i=0;i<points.length;i++){

    console.log("points of the line : \n"+points[i].x+' '+points[i].y);
  }

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
                  .attr("r",2)
                  .attr("visibility","visible");
}// end finWay

// the position of the device
d3.select("#svg8").append("circle")
          .attr("id","Device_position")
          .attr("r", 3)
          .attr("visibility", "hidden")
          .style("fill", "#3498db");

});

// zoom

/*d3.select("#svg8").append("circle")
          .attr("cx",44.175)
          .attr("cy",27.480)
          .attr("r", 3)
          .attr("visibility", "visible")
          .style("fill", "purple");*/


var svg = d3.select("#svg8");
  svg.call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoom));

function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}
// end zoom

}//Ende PostCtrl
