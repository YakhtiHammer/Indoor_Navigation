
// data of the each beacon 
BeaconsTab= [

    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571218", "x": 29.570, "y":3.889   },
    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571219", "x": 63.470, "y":103.075 },
    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571221", "x": 5.521,  "y":164.232 },
    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571222", "x": 81.836, "y":233.641 },
    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571211", "x": 28.9400,"y":290.950 }
    ];// end the array of data beacon;


//the names of the zimmer to search 
zimmer_name = [
      { room: 'zimmer 322' },
      { room: 'zimmer 321' },
      { room: 'zimmer 320' },
      { room: 'zimmer 319' },
      { room: 'zimmer 318' },
      { room: 'zimmer 317' }
    ];

//the zimmer with their ids
zimmerNameId ={
"zimmer322":"circle22",
"zimmer321":"circle21",
"zimmer320":"circle20",
"zimmer319":"circle19",
"zimmer318":"circle18",
"zimmer317":"circle17"
};
 
// the cordinates of the maps, the x and y of each circle on the map 
mapCoordnidates ={
    "circle17":     {"x": 44.175, "y": 27.480 },
    "circle18":     {"x": 44.175, "y": 70.673},
    "circle19":     {"x": 44.175, "y": 147.072},
    "circle20":     {"x": 44.175, "y": 189.934},
    "circle21":     {"x": 44.175, "y": 253.302},
    "circle22":     {"x": 44.175, "y": 282.714}
        };// end mapCoordinates

// the graph of the map, so the distance between each circl in the map
map = {  circle22:{circle21:3},
	     circle21:{circle22:3,circle20:3},
	     circle20:{circle21:3,circle19:3},
	     circle19:{circle20:3,circle18:3},
	     circle18:{circle19:3,circle17:3},
	     circle17:{circle18:3}
            };// end of the graph
//heatmap
/*
northHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-93},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-94},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-96},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-81},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-95},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-89},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-97},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
]}
];
//end northHeatMap
southHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-86},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-57},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-91},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-55},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-93},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-84},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-89},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-57},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-94},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-43},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-92},
]}
];
//end southHeatMap
westHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-89},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-92},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-87},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-81},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-93},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-99},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-93},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-56},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-85},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-51},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
]}
];
//end westHeatMap
eastHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-94},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-94},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-98},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-93},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-93},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-55},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-92},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-94},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-96},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-59},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-87},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-96},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-58},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-84},
]}
];*/
//end eastHeatMap

// 5 beacons with 8 directions


/*
 ==
 data with  three beacons
 ==
*/
//heatmap
/*northHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-93},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-94},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-96},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-81},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-95},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-89},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-97},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
]}
];
//end northHeatMap
southHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-86},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-57},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-91},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-55},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-93},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-84},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-89},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-57},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-94},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-43},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-92},
]}
];
//end southHeatMap
westHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-89},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-92},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-87},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-81},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-93},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-99},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-93},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-56},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-85},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-51},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
]}
];
//end westHeatMap
eastHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-94},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-94},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-98},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-93},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-93},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-55},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-92},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-94},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-96},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-59},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-87},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-96},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-58},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-84},
]}
];*/
//end eastHeatMap



// data with five beacons in n, w, s, e
/*
//heatmap
northHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-91},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-93},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-93},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-96},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-95},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-95},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-85},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-87},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-79},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-82},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-91},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-57},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
]}
];
//end northHeatMap
southHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-89},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-57},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-89},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-91},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-89},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-90},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-88},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-93},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-89},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-87},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-59},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-58},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-94},
]}

];
//end southHeatMap
westHeatMap = [

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-89},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-83},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-91},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-55},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-77},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-59},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-80},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-80},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-86},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-93},
]},
 { "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-55},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-89},
]}

];
//end westHeatMap
eastHeatMap = [

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-97},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-97},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-98},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-93},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-95},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-93},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-94},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-90},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-83},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-92},
]}

];

//end eastHeatMap
*/

// start the heat map in four directions with the new algorithms

//heatmap
northHeatMap = [

];
//end northHeatMap
southHeatMap = [


];
// end south

westHeatMap = [

  { "zone":"A",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-67.36363636363636},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80.36363636363636},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77.27272727272727},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-94.33333333333333},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76.36363636363636},
  ]},
  { "zone":"B",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-75.28571428571429},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75.73333333333333},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83.36363636363636},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92.27272727272727},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90.36363636363636},
  ]},
  { "zone":"C",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-80.81818181818181},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70.27272727272727},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-86},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92.81818181818181},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-88},
  ]},
  { "zone":"D",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-74.72727272727273},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-80.63636363636364},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-81.9090909090909},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-94.72727272727273},
  ]},
  { "zone":"E",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-87.6},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-58.81818181818182},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-74.81818181818181},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-88},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83.0909090909091},
  ]},
  { "zone":"F",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88.36363636363636},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75.9090909090909},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-66.0909090909091},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-94},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-68.81818181818181},
  ]},
  { "zone":"J",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82.8},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77.72727272727273},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-64.0909090909091},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-94.27272727272727},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-85.0909090909091},
  ]},
  { "zone":"I",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-87.7},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90.1},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-67.0909090909091},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-77.72727272727273},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78.81818181818181},
  ]},
  { "zone":"H",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-84.4},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91.0909090909091},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-73.66666666666667},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-90.72727272727273},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76.88888888888889},
  ]},
  { "zone":"G",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-91.5},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-92.72727272727273},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-79.18181818181819},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-84.58333333333333},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72.4},
  ]},
  { "zone":"K",
   "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-81.3},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-96.0909090909091},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-84.54545454545455},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-81.26666666666667},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78.875},
  ]},
  { "zone":"L",
  "listBeacons":[
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-90.63636363636364},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-97.72727272727273},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-90},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-81.54545454545455},
  {"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-57.45454545454545},
  ]},
];
//end westHeatMap
eastHeatMap = [


];

//end eastHeatMap

// end the heatMap

// data with five beacons in n, w, s, and 8 directions
/*
south =[

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-90},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-52},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-90},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-93},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-89},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-74},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-86},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-83},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-79},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-83},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-86},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-94},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-98},
]},

];

sw =[
{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-93},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-54},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-94},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-87},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-90},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-80},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-85},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-84},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-59},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-96},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-55},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-93},
]}

];

west =[

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-97},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-89},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-95},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-86},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-84},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-92},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-94},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-91},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-92},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-97},
]}

];

nw =[

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-89},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-94},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-95},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-96},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-95},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-84},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-87},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-95},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-92},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-96},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-94},
]}

];

north =[

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-95},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-87},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-84},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-58},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-90},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-87},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-87},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-76},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-81},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-62},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-84},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-88},
]}

];

ne =[

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-92},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-60},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-96},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-93},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-95},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-57},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-88},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-61},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-80},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-82},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-86},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-81},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-73},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-81},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-82},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
]}

];

east =[

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-93},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-98},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-94},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-67},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-97},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-84},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-93},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-64},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-95},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-95},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-95},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-92},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-86},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-87},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-88},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-76},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-83},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-86},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82},
]},

{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-65},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-78},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-91},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-93},
]}

];


se =[

{ "zone":"A",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-93},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-96},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-96},
]},
{ "zone":"B",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-63},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-95},
]},
{ "zone":"C",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-81},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-92},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-95},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-95},
]},
{ "zone":"D",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-72},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-95},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-95},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-97},
]},
{ "zone":"E",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-58},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-79},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-97},
]},
{ "zone":"F",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-66},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-87},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-90},
]},
{ "zone":"J",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-77},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-94},
]},
{ "zone":"H",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-68},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-92},
]},
{ "zone":"I",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-74},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-89},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-96},
]},
{ "zone":"G",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-80},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-82},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-89},
]},
{ "zone":"K",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-69},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-75},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-85},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-90},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-93},
]},
{ "zone":"L",
 "listBeacons":[
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi":-70},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571223", "rssi":-71},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi":-88},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi":-96},
{"UUID":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi":-97},
]}
];
*/
