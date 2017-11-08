//Table of All Beacons with there Cordination
      var BeaconsTab= [

                        { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571219", "x": 129.080, "y":44.278   },
                        { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571218", "x": 123.309, "y":51.178   },
                        { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571211", "x": 131.780, "y":52.441   },
                        { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571210", "x": 126.130, "y":59.102   },
                        { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571209", "x": 133.958, "y":59.968   }];


function PosCtrl($scope){
	$(function(){
    var logOb;

function fail(e) {
	console.log("FileSystem Error");
	console.dir(e);
}

$scope.panel = 0;


	$scope.search = function(){

	// to switch between the panels
	$scope.panel  = 1;
  startRangingBeacons();
  findWay();
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




function startRangingBeacons(){

  window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
         console.log("got main dir",dir);
         dir.getFile("log.txt", {create:true}, function(file) {
             console.log("got the file", file);
             logOb = file;
             writeLog("App started");
             readfile();
         });
     });



  var pos_cercle=false;
      }//End Of startRangingBeacons
      function writeLog(str) {
          if(!logOb) return;
          var log = str + " [" + (new Date()) + "]\n";
          console.log("going to log "+log);
          logOb.createWriter(function(fileWriter) {

              fileWriter.seek(fileWriter.length);

              var blob = new Blob([log], {type:'text/plain'});
              fileWriter.write(blob);
              console.log("ok, in theory i worked");
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
      }//End of GetXY

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
      function orientationDevice(){
        var acc;
        $('#ShowBeacons').empty();
        setInterval(function(){
            navigator.compass.getCurrentHeading(
              function(heading){
                  acc +='<p>Heading : ' + heading.magneticHeading + '</p>\n<p>------------------</p>';
                  $('#ShowBeacons').append(acc);
            }
              , function(error){
                alert('CompassError: ' + error.code);
              });

        },5000);
      }//Ende of orientationDevice



      //Begin of createBeaconHTML()
    //  function createBeaconHTML(beacon)
    // {
    //  var htm = '<div><table><tr><td>UUID</td><td>'       + beacon.proximityUUID
    //          + '</td></tr><tr><td>Minor</td><td>'        + beacon.major
    //          + '</td></tr><tr><td>Minor</td><td>'        + beacon.minor
    //          + '</td></tr><tr><td>RSSI</td><td>'         + beacon.rssi
    //  if (beacon.proximity)
    //  { htm   += '</td></tr><tr><td>Proximity</td><td>'   + beacon.proximity    }
    //  if (beacon.distance)
    //  { htm   += '</td></tr><tr><td>Distance</td><td>'    + beacon.distance   }
    //  htm += '</td></tr><tr><td>--------</td><td>--------</td></tr></table></div>';
    //  return htm;
    // } ende of createBeaconHTML


    //Begin of Sensor Fusion (Accelerometer+Gyroscope+Compass) with Kahlman filter for Device Orientation
    function Sensorfusion(){
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
    }//Ende Of Sensorfusion



    //Get the power 2 of
    var sqr = function (a) {  return Math.pow(a, 2);};
    //get back vector
    var vector = function (x, y) {  return {x: x, y: y};};


        //Trilateration function to get the X and Y of Device From X,Y of 3 Beacons
        function calculate_Tri (beacons) {
                  //var j, k, x, y;
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
                       var ra = beacons[0].distance;
                       var rb = beacons[1].distance;
                       var rc = beacons[2].distance;

                 var S = (Math.pow(xc, 2.) - Math.pow(xb, 2.) + Math.pow(yc, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(rc, 2.)) / 2.0;
                 var T = (Math.pow(xa, 2.) - Math.pow(xb, 2.) + Math.pow(ya, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(ra, 2.)) / 2.0;
                 var y = ((T * (xb - xc)) - (S * (xb - xa))) / (((ya - yb) * (xb - xc)) - ((yc - yb) * (xb - xa)));
                 var x = ((y * (ya - yb)) - T) / (xb - xa);

                //  k = (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].dis) + sqr(beacons[1].dis)) / (2 * (beacons[0].y - beacons[1].y)) - (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[2].x) - sqr(beacons[2].y) - sqr(beacons[0].dis) + sqr(beacons[2].dis)) / (2 * (beacons[0].y - beacons[2].y));
                //  j = (beacons[2].x - beacons[0].x) / (beacons[0].y - beacons[2].y) - (beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y);
                //  x = k / j;
                //  y = ((beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y)) * x + (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].dis) + sqr(beacons[1].dis)) / (2 * (beacons[0].y - beacons[1].y));

                 return { x: x,  y: y };
      }//Ende of calculate_Tri

/*
== end tkharbi9 dial ayoub
==
==
*/

    function findWay(){


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

    $("#"+id_room).css("fill","#c0392b")
                  .attr("r",2);



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


       // draw the line of the points

var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");

d3.select("#layer7").append("path")
                  .attr("d", lineFunction(points))
                  .attr("id","theWay")
                  .attr("stroke", "#3498db")
                  .attr("stroke-width", 1)
                  .attr("fill", "none");
// zoom

var svg = d3.select("#svg8");
  svg.call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoom));

function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

// end zoom


//alert("kolni");
// $("#ana-hna").html("kolni");
}// end finWay

});
}//Ende PostCtrl
