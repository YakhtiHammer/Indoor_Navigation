
/*document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    startRangingBeacons();
}*/



function PosCtrl($scope,$http){
  $(function(){

      $scope.panel = 0;

      $scope.search = function(){
      // to switch between the panels
      $('.loader').show ();
      changePanel(1);
      firstTime = true ;

      startRangingBeacons();
      //findWay(Zonefinale);
       //orientationDevice();

    }

   
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
      // if(firstTime){
      //               $scope.loader=true;
      //             }


        
        //alert(heatMap["B"][1].UUID);
        //alert(heatMap.length);
        // Request authorisation.
        t0=performance.now();
                  var t_beacon=  [];
                  var rssi_1218 =[];
                  var rssi_1219 =[];
                  var rssi_1221 =[];
                  var rssi_1222 =[];
                  var rssi_1211 =[];
                  var e = 0;
              //var deviceOreintation;

            //  do{
            //   deviceOreintation=orientationDevice(function(hd){ return hd;});
            //   console.error('device orientation : '+deviceOreintation);
            // }while(deviceOreintation == undefined || deviceOreintation == 0)
             //orientationDevice(function(hd){ console.log(hd);});
              //console.log('device orientation 1: '+deviceOreintation);
              /*orientationDevice(function(hd){ deviceOreintation=hd;
                console.log('device orientation 2: '+deviceOreintation);
              });
              //console.log('device orientation 2: '+deviceOreintation);
              setTimeout(function(){},500);

              console.log('device orientation 3: '+deviceOreintation);*/
             
             //$.when(navigator.compass.getCurrentHeading(onSuccess, onError)).then(heatos());
             //var t0=performance.now();
             navigator.compass.getCurrentHeading(onSuccess, onError);
             //var t1 = performance.now();
            //console.log('performance time :'+(t1-t0));
             //console.log('device orientation 3: '+deviceOreintation);

              
                //console.log('device orientation 3: '+deviceOreintation);
             //alert('biba '+biba);
              var heatMap = [];
              var der='';
             
            

              
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
          
            
            estimote.beacons.startRangingBeaconsInRegion(
              {}, // Empty region matches all beacons.
              
          function(beaconInfo) {
                
               
                $.each(beaconInfo.beacons, function(key, beacon){

                          var string_UUID = beacon.proximityUUID;
    											var lengthUUID = string_UUID.length;
    											var lastUUID = string_UUID.substr(lengthUUID - 4);
                          if( lastUUID == '1218' ) rssi_1218.push(beacon.rssi);
    											if( lastUUID == '1219' ) rssi_1219.push(beacon.rssi);
    											if( lastUUID == '1221' ) rssi_1221.push(beacon.rssi);
    											if( lastUUID == '1222' ) rssi_1222.push(beacon.rssi);
    											if( lastUUID == '1211' ) rssi_1211.push(beacon.rssi);
                          //t_beacon.push({ "uuid" :beacon.proximityUUID,"rssi" : beacon.rssi});
                    
                });
                
                    //t0=performance.now();

                e++;
                //t1 = performance.now();
            //console.log('performance time biba:'+(t1-t0));

            if(e > 9){


                  //with the other algorithm

                  /*if(rssi_1218.length>0){
                    var sum_1218 = rssi_1218.reduce(sum_array);
                    var mean_1218 = sum_1218 / rssi_1218.length;
                    var standat_1218 = standart_array(rssi_1218, mean_1218, sum_1218);
                    var final_rssi_1218 = final_rssi(rssi_1218, mean_1218, standat_1218);

                    t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": final_rssi_1218});
                  }
                  if(rssi_1219.length>0){
                    var sum_1219 = rssi_1219.reduce(sum_array);
                    var mean_1219 = sum_1219 / rssi_1219.length;
                    var standat_1219 = standart_array(rssi_1219, mean_1219, sum_1219);
                    var final_rssi_1219 = final_rssi(rssi_1219, mean_1219, standat_1219);

                    t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": final_rssi_1219});
                  }					
                  if(rssi_1221.length>0){
                    var sum_1221 = rssi_1221.reduce(sum_array);
                    var mean_1221 = sum_1221 / rssi_1221.length;
                    var standat_1221 = standart_array(rssi_1221, mean_1221, sum_1221);
                    var final_rssi_1221 = final_rssi(rssi_1221, mean_1221, standat_1221);
                    t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": final_rssi_1221});
                  }							
                  if(rssi_1222.length>0){
                    var sum_1222 = rssi_1222.reduce(sum_array);
                    var mean_1222 = sum_1222 / rssi_1222.length;
                    var standat_1222 = standart_array(rssi_1222, mean_1222, sum_1222);
                    var final_rssi_1222 = final_rssi(rssi_1222, mean_1222, standat_1222);
                    t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": final_rssi_1222});
                  }
    							if(rssi_1211.length>0){
                    var sum_1211 = rssi_1211.reduce(sum_array);
      							var mean_1211 = sum_1211 / rssi_1211.length;
      							var standat_1211 = standart_array(rssi_1211, mean_1211, sum_1211);
      							var final_rssi_1211 = final_rssi(rssi_1211, mean_1211, standat_1211); 
                    t_beacon.push({"uuid":"b9407f30-f5f8-466e-aff9-25556b571211","rssi": final_rssi_1211});
                  }*/

                  // with kalman filter
                  kalmanFilter(rssi_1218,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571218");
                  kalmanFilter(rssi_1219,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571219");
                  kalmanFilter(rssi_1221,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571221");
                  kalmanFilter(rssi_1222,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571222");
                  kalmanFilter(rssi_1211,t_beacon,"b9407f30-f5f8-466e-aff9-25556b571211");

                  for(var i;i<t_beacon.length;i++){
                    console.log('uuid : '+t_beacon[i].uuid+' rssi :'+t_beacon[i].rssi)
                  }
                
                  // algorithme of heatMap
                  var errorTab;
                  var min=Math.pow(10,20);
                  var err=0;
                  var Zonefinale;
                  for(var i=0;i<heatMap.length;i++){
                      var error = 0;
                      var zone  = heatMap[i].zone;
                      var gefunden = false;

                      for(k=0;k<t_beacon.length;k++){

                          for(j=0;j<heatMap[i].listBeacons.length;j++){
                              if(t_beacon[k].uuid.toLowerCase() == heatMap[i].listBeacons[j].uuid.toLowerCase()){
                                
                                gefunden=true;
                                err = Math.pow(Math.abs(heatMap[i].listBeacons[j].rssi)-Math.abs(t_beacon[k].rssi),2);
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
                    if(zones[i].zone == Zonefinale){ 
                      pos_device = { "x": zones[i].x,  "y": zones[i].y };
                    }
                  }

                  d3.select("#Device_position").transition().duration(800)
                          .attr("visibility","visible")
                          .attr("cx",pos_device.x)
                          .attr("cy",pos_device.y );
                  d3.select("#Device_position_error").transition().duration(800)
                          .attr("visibility","visible")
                          .attr("cx",pos_device.x)
                          .attr("cy",pos_device.y );

                   // d3.select("#directionOfPosition").transition().duration(800)
                   //        .attr("visibility","visible")
                   //        .attr("x",pos_device.x)
                   //        .attr("y",pos_device.y );
                  
                  // end heat map lagorithm 

                  t_beacon  =[];
                  rssi_1218 =[];
                  rssi_1219 =[];
                  rssi_1221 =[];
                  rssi_1222 =[];
                  rssi_1211 =[];
                  e = 0;
                   
                  //var t0=performance.now();
                   navigator.compass.getCurrentHeading(onSuccess, onError);
                   //var t1 = performance.now();
                  //console.log('performance time 2 :'+(t1-t0));
                  t1=performance.now();
                  console.log(' performance time : '+(t1-t0));
                  
                  if(firstTime){
                    firstTime = false;

                    findWay(Zonefinale);
                    $('.loader').hide();
                     //$scope.panel  = 1;
                  }

            }

            
          },
              function(errorMessage) {  alert('Ranging error: ' + errorMessage)  });
         

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
     //change the panel

    function changePanel(panele){
      $scope.panel = panele;
      //alert('ana panel '+$scope.panel);
    }
     // the function of map
    function mapinos(obj) { 
                   var rObj = {};
                   rObj[obj.uuid] = obj.rssi;
                   return rObj;
    }

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
          dist = Math.pow(10,rssi_p/cal)
      }
        else{
          dist = (0.9*Math.pow(7.71,rssi_p/cal)+0.11)*0.001
        }
      return dist
    }

      //Begin Of accelerationDevice get acceleration Device
    function accelerationDevice(){
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
      
      //Begin of All orientationDevice to get the Orientation
    function orientationDevice(_callback){
            
             navigator.compass.getCurrentHeading(

                        function(heading){      hd = heading.magneticHeading;
                          _callback(hd);
                          //biba = 300;
                        },
                        function(error){    alert('CompassError: ' + error.code);}
              );

             //return hd;
    }//Ende of orientationDevice

    function onSuccess(heading,_callback) {
      //alert('Heading: ' + heading.magneticHeading);
      deviceOreintation = heading.magneticHeading;
    }

    function onError(error) {
        alert('CompassError: ' + error.code);
    }




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
    }//Ende of calculate_Tri

    /*
    == end tkharbi9 dial ayoub
    ==
    ==
    */
    
    function findWay(source){

      
        
      var id_room = $('#room').val().split(" ").join("").toLowerCase();
      id_room = zimmerNameId[id_room];
      
      graph = new Graph(map);
      var shortWay = [];
      shortWay = graph.findShortestPath(zonesNameId[source],id_room);
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
      /*for(i=0;i<points.length;i++){

        console.log("points of the line : \n"+points[i].x+' '+points[i].y);
      }*/

      // draw the line of the points  until the destination
      d3.select("#theWay").attr("visibility","hidden");

      // hide the distination to draw it again
      // d3.select("#destination").attr("visibility","hidden");

      var lineFunction = d3.svg.line()
                               .x(function(d) { return d.x; })
                               .y(function(d) { return d.y; })
                               .interpolate("linear");
      // the arrow of the end
       var defs = d3.select("#svg8").append("svg:defs");

      /* here to generate the marker shape and assign it the "arrow" id */
        defs.append("svg:marker")
          .attr("id", "arrow")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 1)
          .attr("refY", 5)
          .attr("markerWidth", 6)
          .attr("markerHeight", 6)
          .attr("orient", "auto")
          .attr('fill','#3498db')
          .append('svg:path')
          .attr('d', "M 0 0 L 10 5 L 0 10 z");

      d3.select("#theWay").attr("d", lineFunction(points))
                          .attr("id","theWay")
                          .attr("stroke", "#3498db")
                          .attr("stroke-width", 2)
                          .attr("fill", "none")
                          .attr("visibility","visible")
                          .attr('marker-end', 'url(#arrow)');
      // draw the destination
       // d3.select("#"+id_room)
       //                  .style("fill","#d35400")
       //                  .attr("r",3)
       //                  .attr('id','destination')
       //                  .attr("visibility","visible");
    }// end finWay

    //draw the path
    d3.select("#svg8").append("path")
                      .attr("visibility","hidden")
                      .attr("id","theWay");

    // hiide all the map knoten
    d3.selectAll(".knoten").attr("visibility", "hidden");

    // the position of the device
    d3.select("#svg8").append("circle")
              .attr("id","Device_position")
              .attr("r", 5)
              .attr("visibility", "hidden")
              .style("fill", "#3498db");
    
    d3.select("#svg8").append("circle")
                  .attr("id","Device_position_error")
                  .attr("r", 20)
                  .attr("visibility", "hidden")
                  .style("fill", "#3498db")
                  .style("opacity", 0.5);
       
      d3.select('#svg8').append("svg:image")
      .attr("xlink:href", "plane.jpg")
      .attr('id','directionOfPosition')
      .attr('visibility','hidden')
      .attr("width", 20)
      .attr("height", 20);
        
        });
   


    // zoom

    /*d3.select("#svg8").append("circle")
          .attr("cx",44.175)
          .attr("cy",27.480)
          .attr("r", 3)
          .attr("visibility", "visible")
          .style("fill", "purple");*/
    // draw the destination
       

    var svg = d3.select("#svg8");
    svg.call(d3.behavior.zoom().scaleExtent([1, 200]).on("zoom", zoom));

    function zoom() {
      svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }// end zoom
  
}//Ende PostCtrl
