
// the zone and their cordinations 
zones= [

    { "zone": "A", "x": 296.0,   "y":32.39  },
    { "zone": "B", "x": 296.0,   "y":32.39  },
    { "zone": "C", "x": 267.40,  "y":32.39  },
    { "zone": "D", "x": 267.40,  "y":32.39   },
    { "zone": "E", "x": 219.15,  "y":32.39  },
    { "zone": "F", "x": 167.42,  "y":32.39  },
    { "zone": "J", "x": 167.42,  "y":32.39 },
    { "zone": "H", "x": 144.66,  "y":32.39   },
    { "zone": "I", "x": 144.66,  "y":32.39  },
    { "zone": "G", "x": 82.84,   "y":32.39  },
    { "zone": "K", "x": 34.05,   "y":32.39   },
    { "zone": "L", "x": 34.05,   "y":32.39  },
    ];

// data of the each beacon 
BeaconsTab= [

    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571218", "x": 329.668, "y":14.841   },
    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571219", "x": 215.903, "y":47.905 },
    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571221", "x": 144.688,  "y":2.081},
    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571222", "x": 60.185, "y":46.975 },
    { "uuid": "B9407F30-F5F8-466E-AFF9-25556B571211", "x": 2.507,"y":15.749  }
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
    "circle17":     {"x": 303.959, "y": 31.436 },
    "circle18":     {"x": 253.412, "y": 31.326},
    "circle19":     {"x": 176.345, "y": 31.407},
    "circle20":     {"x": 118.141, "y": 31.352},
    "circle21":     {"x": 50.718,  "y": 30.878},
    "circle22":     {"x": 11.673,  "y": 31.173}
        };// end mapCoordinates

// the graph of the map, so the distance between each circl in the map
map = {  circle17:{circle18:3},
  	     circle18:{circle17:3,circle19:3},
  	     circle19:{circle18:3,circle20:3},
  	     circle20:{circle19:3,circle21:3},
  	     circle21:{circle20:3,circle22:3},
  	     circle22:{circle21:3}
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

{ "zone":"A",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -71.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -79},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -79.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -89.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -83.5}
]}, 
{ "zone":"B",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -64.33333333333333},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -70.81818181818181},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -84.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -94.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -91.5}
]}, 
{ "zone":"C",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -67.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -70.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -74.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -89.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -78.22222222222223}
]}, 
{ "zone":"D",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -66.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -72.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -75.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -85.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -81.3}
]}, 
{ "zone":"E",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -71.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -55},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -68.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -84.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -82}
]}, 
{ "zone":"F",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -73.33333333333333},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -73.45454545454545},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -71.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -85.22222222222223},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -73.3}
]}, 
{ "zone":"J",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -85.125},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -69.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -61},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -79.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -77.3}
]}, 
{ "zone":"H",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -80.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -74.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -60},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -71.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -64.7}
]}, 
{ "zone":"I",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -79.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -77},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -59.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -76.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -74.55555555555556}
]}, 
{ "zone":"G",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -78.11111111111111},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -79.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -69.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -63.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -68.22222222222223}
]}, 
{ "zone":"K",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -77},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -86.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -77.72727272727273},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -73.81818181818181},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -67.5}
]},
{ "zone":"L",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -88.25},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -83.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -76.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -69},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -64.4}
]} 

];
//end northHeatMap
southHeatMap = [
{ "zone":"A",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -74},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -94.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -92.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -94.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -87.8}
]}, 
{ "zone":"B",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -56.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -89.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -89.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -93.625},
]}, 
{ "zone":"C",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -65},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -78.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -76.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -94},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -84.4}
]}, 
{ "zone":"D",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -77.625},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -82.0909090909091},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -76.66666666666667},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -85.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -77.33333333333333}
]}, 
{ "zone":"E",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -70.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -81.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -64},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -87.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -73}
]}, 
{ "zone":"F",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -81.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -74.45454545454545},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -68},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -92.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -72.66666666666667}
]}, 
{ "zone":"J",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -84.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -75.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -60.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -80.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -87.4}
]}, 
{ "zone":"H",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -73.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -78.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -64.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -74.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -69.6}
]}, 
{ "zone":"I",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -93},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -72.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -69.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -75.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -89}
]}, 
{ "zone":"G",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -83},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -88},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -74.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -68.54545454545455},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -69.125}
]}, 
{ "zone":"K",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -82.33333333333333},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -84.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -76.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -68.27272727272727},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -64.22222222222223}
]},
{ "zone":"L",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -89.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -90.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -87.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -77.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -63.9}
]} 

];
// end south

westHeatMap = [

{ "zone":"A",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -62.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -82.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -87.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -94.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -79.6}
]}, 
{ "zone":"B",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -67.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -77.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -89.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -91.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -84}
]}, 
{ "zone":"C",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -73.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -79},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -80.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -94.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -91.4}
]}, 
{ "zone":"D",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -86.88888888888889},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -77.81818181818181},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -79.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -85.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -93.11111111111111}
]}, 
{ "zone":"E",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -82.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -73.76923076923077},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -75.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -78.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -73.66666666666667}
]}, 
{ "zone":"F",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -78.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -83.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -62.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -87},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -74.6}
]}, 
{ "zone":"J",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -92.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -85},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -65.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -83.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -74.8}
]}, 
{ "zone":"H",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -89.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -95},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -68.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -83.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -72.6}
]}, 
{ "zone":"I",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -93.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -93},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -81.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -65.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -75}
]}, 
{ "zone":"G",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -90},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -92.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -87.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -63},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -64.4}
]}, 
{ "zone":"K",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -88.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -90.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -88},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -73},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -61.6}
]},
  { "zone":"L",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -89.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -95.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -91.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -75.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -57.4}
]} 
];
//end westHeatMap
eastHeatMap = [

{ "zone":"A",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -54.666666666666664},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -89.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -85.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -92.1}
]}, 
{ "zone":"B",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -65.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -90.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -95.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -97.57142857142857},
]}, 
{ "zone":"C",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -67},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -82.54545454545455},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -85},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -96.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -92}
]}, 
{ "zone":"D",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -60.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -72},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -85.2},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -92.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -88}
]}, 
{ "zone":"E",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -61.77777777777778},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -59.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -68.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -96},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -85.1}
]}, 
{ "zone":"F",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -67.42857142857143},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -69.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -67.07692307692308},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -90.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -84.2}
]}, 
{ "zone":"J",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -82.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -65},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -80.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -89},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -82.4}
]}, 
{ "zone":"H",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -75.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -81},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -58.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -87.3},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -83.7}
]}, 
{ "zone":"I",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -79.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -72.4},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -60.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -78.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -77.3}
]}, 
{ "zone":"G",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -84.6},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -77.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -66.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -67.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -77.4}
]}, 
{ "zone":"K",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -76.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -82.9},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -74.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -64.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -67.1}
]}, 
{ "zone":"L",
 "listBeacons":[
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571218", "rssi": -87.7},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571219", "rssi": -91.8},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571221", "rssi": -85.5},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571222", "rssi": -63.1},
{"uuid":"b9407f30-f5f8-466e-aff9-25556b571211", "rssi": -75.1}
]}

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
