//Table of All Beacons with there Cordination
			var BeaconsTab= [

												{	"uuid": "B9407F30-F5F8-466E-AFF9-25556B571219",	"x": 129.080,	"y":44.278	 },
			      						{	"uuid": "B9407F30-F5F8-466E-AFF9-25556B571218",	"x": 123.309,	"y":51.178   },
												{	"uuid": "B9407F30-F5F8-466E-AFF9-25556B571211",	"x": 131.780, "y":52.441   },
												{	"uuid": "B9407F30-F5F8-466E-AFF9-25556B571210",	"x": 126.130,	"y":59.102	 },
												{	"uuid": "B9407F30-F5F8-466E-AFF9-25556B571209",	"x": 133.958,	"y":59.968   }];


//Begin of all functions
function PosCtrl($scope){
			$scope.panel = 0;
			//function search()
			$scope.search = function(){
						$scope.panel   = 1;
						startRangingBeacons();
						//accelerationDevice();
						//orientationDevice();
						//Sensorfusion();
			}

//function StartRangin to check all beacons in the Area
	function startRangingBeacons(){
		// Request authorisation.
				estimote.beacons.requestAlwaysAuthorization();
				estimote.beacons.startRangingBeaconsInRegion(
					{}, // Empty region matches all beacons.
					function(beaconInfo) {
						var t_beacon=[];//Array to stock Data from Beacons what we found
						$.each(beaconInfo.beacons, function(key, beacon){
											beaconInfo.beacons.sort(function(beacon1, beacon2) {
											return beacon1.distance > beacon2.distance; });

											t_beacon.push({ "uuid" :beacon.proximityUUID,"distance" : beacon.distance});
						});
						getXY(t_beacon);//GetXY get UUID from Beacon and search for X and Y in The Table BeaconsTab
						t_beacon.length=3;
						// for(var i=0;i<t_beacon.length;i++){
						// 	alert("uuid :"+t_beacon[i].uuid+" x :"+t_beacon[i].x+" y :"+t_beacon[i].y+" distance :"+t_beacon[i].distance);
						// }
						//Algorithme Trilateration to find the Position
						var pos = calculate_Tri(t_beacon);

						
						alert("x : "+pos.x+" y : "+pos.y);
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
		// 	function createBeaconHTML(beacon)
		// {
		// 	var htm = '<div><table><tr><td>UUID</td><td>' 			+ beacon.proximityUUID
		// 	  			+ '</td></tr><tr><td>Minor</td><td>' 				+ beacon.major
		// 					+ '</td></tr><tr><td>Minor</td><td>' 				+ beacon.minor
		// 					+ '</td></tr><tr><td>RSSI</td><td>' 				+ beacon.rssi
		// 	if (beacon.proximity)
		// 	{	htm 	+= '</td></tr><tr><td>Proximity</td><td>'		+ beacon.proximity		}
		// 	if (beacon.distance)
		// 	{	htm 	+= '</td></tr><tr><td>Distance</td><td>'		+ beacon.distance		}
		// 	htm += '</td></tr><tr><td>--------</td><td>--------</td></tr></table></div>';
		// 	return htm;
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
											// 	 function(result) { alert('x: ' + result.x);}
											// 	 , function(error) {alert('FusionError: ' + error.code);});

											 navigator.fusion.watchSensorFusion(function (result) {
										 	 					alert('yaw : '+ result.eulerAngles.yaw+' | pitch : '+ result.eulerAngles.pitch+' | roll : '+ result.eulerAngles.roll);
								 								}, function (err) { console.log('error', err); }, { frequency: 1000});
					   }
		}//Ende Of Sensorfusion



		//Get the power 2 of
		var sqr = function (a) {	return Math.pow(a, 2);};
		//get back vector
		var vector = function (x, y) {	return {x: x,	y: y};};


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

								// k = (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].dis) + sqr(beacons[1].dis)) / (2 * (beacons[0].y - beacons[1].y)) - (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[2].x) - sqr(beacons[2].y) - sqr(beacons[0].dis) + sqr(beacons[2].dis)) / (2 * (beacons[0].y - beacons[2].y));
								// j = (beacons[2].x - beacons[0].x) / (beacons[0].y - beacons[2].y) - (beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y);
								// x = k / j;
								// y = ((beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y)) * x + (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].dis) + sqr(beacons[1].dis)) / (2 * (beacons[0].y - beacons[1].y));

								 return { x: x,	 y: y };
			}//Ende of calculate_Tri

}//Ende PostCtrl
