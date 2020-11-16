let map, heatmap, mapper;
let markers = [];
var open=false;
var customStyled = [{
    featureType: "all",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }]
 var dataa;




function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.74, lng: -73.95 },
    zoom: 11,
    disableDefaultUI: true,
  });
  map.setMapTypeId('terrain');
  map.set('styles',customStyled);
 heatmap  = new google.maps.visualization.HeatmapLayer({
    data: [],
    map: map,
  });
  
  	heatmap.set("radius",25);
  	heatmap.set("opacity", 3)
  aller();
}

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function getPoints(){
	dataa=[
  {location: new google.maps.LatLng(40.731437, -73.980576), weight: 3},
  {location: new google.maps.LatLng(40.738437, -73.980576), weight: 3},
  {location: new google.maps.LatLng(40.734437, -73.980576), weight: 3},
  {location: new google.maps.LatLng(40.765006, -73.992420), weight: 2},
	];
	return dataa;
}

function China(){
	if(open){
	italymap.setData([]);
	japmap.setData([]);
	chimap.setData([]);
	jewmap.setData([]);
	iremap.setData([]);
	germap.setData([]);
}

	var chinadata=[
	 {location: new google.maps.LatLng(40.717432, -73.996495), weight: 3},
	 {location: new google.maps.LatLng(40.713984, -73.996151), weight: 3},
	 {location: new google.maps.LatLng(40.716936, -74.000657), weight: 3},
	 {location: new google.maps.LatLng(40.716586, -74.006022), weight: 3},
	 {location: new google.maps.LatLng(40.718472, -73.998319), weight: 3},
	 {location: new google.maps.LatLng(40.712487, -73.991602), weight: 3},

	]
	setMapOnAll(null);
	var china = new google.maps.Marker({
	    position: { lat: 40.716936, lng: -74.000657 },
	    label:"Chinatown",
	    icon: "dot.png",
	    map: map
	});
	markers.push(china);
	const gradient = [
    'rgba(255, 0, 123, 0)',
     'rgba(255, 87, 168, 1)',
     'rgba(255, 0, 123, 1)'
  ];
  	heatmap.set("gradient", gradient);
  	heatmap.set("radius", 15);
	heatmap.setData(chinadata);
	heatmap.set("opacity", .4);
	heatmap.setMap(map);
}

function Japan(){
		if(open){
		italymap.setData([]);
	japmap.setData([]);
	chimap.setData([]);
	jewmap.setData([]);
	iremap.setData([]);
	germap.setData([]);
}
	var japandata=[
	 {location: new google.maps.LatLng(40.699486, -73.961893), weight: 3},
	 {location: new google.maps.LatLng(40.696818, -73.970991), weight: 3},

	 {location: new google.maps.LatLng(40.776225, -73.983059), weight: 3},
	 {location: new google.maps.LatLng(40.772154, -73.9870932), weight: 3},

	 {location: new google.maps.LatLng(40.795047, -73.968671), weight: 3},

	 {location: new google.maps.LatLng(40.809518, -73.962378), weight: 3},
	]
	setMapOnAll(null);
	var bleh = new google.maps.Marker({
	    position: { lat: 40.699486, lng: -73.961893},
	    label:"Brooklyn Navy Yard",
	    icon: "dot.png",
	    map: map
	});
	markers.push(bleh);

	var lincoln = new google.maps.Marker({
	    position: { lat:40.776225, lng: -73.983059},
	    label:"Lincoln Square",
	    icon: "dot.png",
	    map: map
	});
	markers.push(lincoln);

	var uws = new google.maps.Marker({
	    position: { lat:40.795047, lng:-73.968671},
	    label:"Upper West Side",
	    icon: "dot.png",
	    map: map
	});
	markers.push(uws);

	var morn = new google.maps.Marker({
	    position: { lat:40.809518, lng:-73.962378},
	    label:"Morningside Heights",
	    icon: "dot.png",
	    map: map
	});
	markers.push(morn);



	const gradient = [
    'rgba(224, 198, 0, 0)',
     'rgba(255, 242, 143, 1)',
     'rgba(224, 198, 0, 1)'
  	];
  	heatmap.set("gradient", gradient);
  	heatmap.set("radius",22);
	heatmap.setData(japandata);
	heatmap.set("opacity", .4);
	heatmap.setMap(map);


}

function Ireland(){
		if(open){
		italymap.setData([]);
	japmap.setData([]);
	chimap.setData([]);
	jewmap.setData([]);
	iremap.setData([]);
	germap.setData([]);
}
	var irelanddata=[
	 {location: new google.maps.LatLng(40.770684, -73.993251), weight: 3},
	 {location: new google.maps.LatLng(40.767499, -73.985956), weight: 3},
	 {location: new google.maps.LatLng(40.762494, -73.993680), weight: 3},
	 {location: new google.maps.LatLng(40.757943, -74.001834), weight: 3},
	 {location: new google.maps.LatLng(40.755602, -73.994024), weight: 3},

	 {location: new google.maps.LatLng(40.869891, -73.920465), weight: 3},

	 {location: new google.maps.LatLng(40.716586, -74.006022), weight: 3},
	]

	setMapOnAll(null);
	var hell = new google.maps.Marker({
	    position: { lat: 40.762494, lng: -73.993680},
	    label:"Hells Kitchen",
	    icon: "dot.png",
	    color: "transparent",
	    map: map
	});
	markers.push(hell);

	var inwood = new google.maps.Marker({
	    position: { lat: 40.869891, lng: -73.920465},
	    color: "white",
	    label:"Inwood",
	    icon: "dot.png",
	    map: map
	});
	markers.push(inwood);

	var five = new google.maps.Marker({
	    position: { lat: 40.716586, lng: -74.006022},
	    label:"Five Points",
	    icon: "dot.png",
	    color: "white",
	    map: map
	});
	markers.push(five);



	const gradient = [
    'rgba(0, 157, 255, 0)',
     'rgba(107, 198, 255, 1)',
     'rgba(0, 157, 255, 1)'
  ];
  	heatmap.set("gradient", gradient);
  	heatmap.set("radius",22);
	heatmap.setData(irelanddata);
	heatmap.set("opacity", 1);
	heatmap.setMap(map);

}

function Germany(){
		if(open){
		italymap.setData([]);
	japmap.setData([]);
	chimap.setData([]);
	jewmap.setData([]);
	iremap.setData([]);
	germap.setData([]);
}
		var germandata=[
	 {location: new google.maps.LatLng(40.724339, -73.980908), weight: 3},
	 {location: new google.maps.LatLng(40.720826, -73.975802), weight: 3},
	 {location: new google.maps.LatLng(40.731494, -73.981295), weight: 3},
	 {location: new google.maps.LatLng(40.738567, -73.981188), weight: 3},
	 {location: new google.maps.LatLng(40.745265, -73.985222), weight: 3},
	 {location: new google.maps.LatLng(40.742273, -73.976725), weight: 3},

	 {location: new google.maps.LatLng(40.782766, -73.843165), weight: 3},

	 {location: new google.maps.LatLng(40.768358, -73.924163), weight: 3},
	]

	setMapOnAll(null);
	var german = new google.maps.Marker({
	    position: { lat: 40.731494, lng: -73.981295},
	    label:"Little Germany",
	    icon: "dot.png",
	    map: map
	});
	markers.push(german);

	var cp = new google.maps.Marker({
	    position: { lat: 40.782766, lng: -73.843165},
	    label:"College Point",
	    icon: "dot.png",
	    map: map
	});
	markers.push(cp);

	var astoria = new google.maps.Marker({
	    position: { lat: 40.768358, lng: -73.924163},
	    label:"Astoria",
	    icon: "dot.png",
	    map: map
	});
	markers.push(astoria);



	const gradient = [
    'rgba(255, 140, 0, 0)',
     'rgba(255, 189, 110, 1)',
     'rgba(255, 140, 0, 1)'
  ];
  	heatmap.set("gradient", gradient);
  	heatmap.set("radius",25);
	heatmap.setData(germandata);
	heatmap.set("opacity", .6);
	heatmap.setMap(map);
}

function Jewish(){
		if(open){
		italymap.setData([]);
	japmap.setData([]);
	chimap.setData([]);
	jewmap.setData([]);
	iremap.setData([]);
	germap.setData([]);
		}
	var Jewishdata=[
	 {location: new google.maps.LatLng(40.724339, -73.990908), weight: 3},
	 {location: new google.maps.LatLng(40.720826, -73.975802), weight: 3},
	 {location: new google.maps.LatLng(40.731494, -73.981295), weight: 3},
	 {location: new google.maps.LatLng(40.738567, -73.981188), weight: 3},
	 {location: new google.maps.LatLng(40.745265, -73.985222), weight: 3},
	 {location: new google.maps.LatLng(40.742273, -73.976725), weight: 3},

	 {location: new google.maps.LatLng(40.672234, -73.944048), weight: 3},

	 {location: new google.maps.LatLng(40.663895, -73.912100), weight: 3},

	 {location: new google.maps.LatLng(40.812050, -73.920357), weight: 3}
	]

	setMapOnAll(null);
	var les = new google.maps.Marker({
	    position: { lat: 40.731494, lng: -73.981295},
	    label:"Lower East Side",
	    icon: "dot.png",
	    map: map
	});
	markers.push(les);

	var crown = new google.maps.Marker({
	    position: { lat: 40.672234, lng: -73.944048},
	    label:"Crown Heights",
	    icon: "dot.png",
	    map: map
	});
	markers.push(crown);

	var brown = new google.maps.Marker({
	    position: { lat: 40.663895, lng: -73.912100},
	    label:"Brownsville",
	    icon: "dot.png",
	    map: map
	});
	markers.push(brown);

	var south = new google.maps.Marker({
	    position: { lat: 40.812050, lng: -73.920357},
	    label:"South Bronx",
	    icon: "dot.png",
	    map: map
	});
	markers.push(south);



	const gradient = [
    'rgba(0, 168, 56, 0)',
     'rgba(0, 255, 85, 1)',
     'rgba(0, 168, 56, 1)'
  ];
  	heatmap.set("gradient", gradient);
  	heatmap.set("radius",25);
	heatmap.setData(Jewishdata);
	heatmap.set("opacity", .8);
	heatmap.setMap(map);
}

function Italy(){
		if(open){
	italymap.setData([]);
	japmap.setData([]);
	chimap.setData([]);
	jewmap.setData([]);
	iremap.setData([]);
	germap.setData([]);
}
	var italydata=[
	 {location: new google.maps.LatLng(40.790034, -73.953021), weight: 3},
	 {location: new google.maps.LatLng(40.787304, -73.943151), weight: 3},
	 {location: new google.maps.LatLng(40.796597, -73.941777), weight: 3},
	 {location: new google.maps.LatLng(40.801925, -73.934739), weight: 3},
	 {location: new google.maps.LatLng(40.805173, -73.941005), weight: 3},
	 {location: new google.maps.LatLng(40.808591, -73.937743), weight: 3},

	 {location: new google.maps.LatLng(40.719369, -73.997606), weight: 3},

	 {location: new google.maps.LatLng(40.734234, -74.001305), weight: 3},
	]

	setMapOnAll(null);
	var eh = new google.maps.Marker({
	    position: { lat: 40.796597, lng: -73.941777},
	    label:"East Harlem",
	    icon: "dot.png",
	    map: map
	});
	markers.push(eh);

	var ital = new google.maps.Marker({
	    position: { lat: 40.719369, lng: -73.997606},
	    label:"LIttle Italy",
	    icon: "dot.png",
	    map: map
	});
	markers.push(ital);

	var gren = new google.maps.Marker({
	    position: { lat: 40.734234, lng: -74.001305},
	    label:"Greenwich Village",
	    icon: "dot.png",
	    map: map
	});
	markers.push(gren);



	const gradient = [
    'rgba(204, 0, 255, 0)',
     'rgba(233, 145, 255, 1)',
     'rgba(204, 0, 255, 1)'
  ];
  	heatmap.set("gradient", gradient);
  	heatmap.set("radius",25);
	heatmap.setData(italydata);
	heatmap.set("opacity", .8);
	heatmap.setMap(map);
}

function aller(){
	open=true;

	heatmap.setData([]);
	var italydata=[
	 {location: new google.maps.LatLng(40.790034, -73.953021), weight: 3},
	 {location: new google.maps.LatLng(40.787304, -73.943151), weight: 3},
	 {location: new google.maps.LatLng(40.796597, -73.941777), weight: 3},
	 {location: new google.maps.LatLng(40.801925, -73.934739), weight: 3},
	 {location: new google.maps.LatLng(40.805173, -73.941005), weight: 3},
	 {location: new google.maps.LatLng(40.808591, -73.937743), weight: 3},

	 {location: new google.maps.LatLng(40.719369, -73.997606), weight: 3},

	 {location: new google.maps.LatLng(40.734234, -74.001305), weight: 3},
	]

	setMapOnAll(null);
	var marker = new google.maps.Marker({
	    position: { lat: 40.796597, lng: -73.941777},
	    label:"East Harlem",
	    icon: "dot.png",
	    map: map
	});
	markers.push(marker);

	var cp = new google.maps.Marker({
	    position: { lat: 40.713586, lng: -73.999606},
	    label:"LIttle Italy",
	    icon: "dot.png",
	    map: map
	});
	markers.push(cp);

	var astoria = new google.maps.Marker({
	    position: { lat: 40.734234, lng: -74.031305},
	    label:"Greenwich Village",
	    icon: "dot.png",
	    map: map
	});
	markers.push(astoria);


	const gradient = [
    'rgba(204, 0, 255, 0)',
     'rgba(233, 145, 255, 1)',
     'rgba(204, 0, 255, 1)'
  ];

  italymap = new google.maps.visualization.HeatmapLayer({
    data: italydata,
    map: map,
  });
    italymap.set("gradient", gradient);
  	italymap.set("radius",25);
	italymap.setData(italydata);

	italymap.setMap(map);


var Jewishdata=[
	 {location: new google.maps.LatLng(40.724339, -73.990908), weight: 3},
	 {location: new google.maps.LatLng(40.720826, -73.978802), weight: 3},
	 {location: new google.maps.LatLng(40.731494, -73.984295), weight: 3},
	 {location: new google.maps.LatLng(40.738567, -73.984188), weight: 3},
	 {location: new google.maps.LatLng(40.745265, -73.988222), weight: 3},
	 {location: new google.maps.LatLng(40.742273, -73.979725), weight: 3},

	 {location: new google.maps.LatLng(40.672234, -73.944048), weight: 3},

	 {location: new google.maps.LatLng(40.663895, -73.912100), weight: 3},

	 {location: new google.maps.LatLng(40.812050, -73.920357), weight: 3}
	]

	var les = new google.maps.Marker({
	    position: { lat: 40.72494, lng: -73.981295},
	    label:"Lower East Side",
	    icon: "dot.png",
	    map: map
	});
	markers.push(les);

	var crown = new google.maps.Marker({
	    position: { lat: 40.672234, lng: -73.944048},
	    label:"Crown Heights",
	    icon: "dot.png",
	    map: map
	});
	markers.push(crown);

	var brown = new google.maps.Marker({
	    position: { lat: 40.663895, lng: -73.912100},
	    label:"Brownsville",
	    icon: "dot.png",
	    map: map
	});
	markers.push(brown);

	var south = new google.maps.Marker({
	    position: { lat: 40.812050, lng: -73.920357},
	    label:"South Bronx",
	    icon: "dot.png",
	    map: map
	});
	markers.push(south);



	const jewishgradient = [
    'rgba(0, 168, 56, 0)',
     'rgba(0, 255, 85, 1)',
     'rgba(0, 168, 56, 1)'
  	];
    jewmap = new google.maps.visualization.HeatmapLayer({
    data: Jewishdata,
    map: map,
  });
  	jewmap.set("gradient", jewishgradient);
  	jewmap.set("radius",25);
	jewmap.setData(Jewishdata);
	jewmap.setMap(map);



	var germandata=[
	 {location: new google.maps.LatLng(40.724339, -73.980908), weight: 3},
	 {location: new google.maps.LatLng(40.720826, -73.975802), weight: 3},
	 {location: new google.maps.LatLng(40.731494, -73.981295), weight: 3},
	 {location: new google.maps.LatLng(40.738567, -73.981188), weight: 3},
	 {location: new google.maps.LatLng(40.745265, -73.985222), weight: 3},
	 {location: new google.maps.LatLng(40.742273, -73.976725), weight: 3},

	 {location: new google.maps.LatLng(40.782766, -73.843165), weight: 3},

	 {location: new google.maps.LatLng(40.768358, -73.924163), weight: 3},
	]

	
	var german = new google.maps.Marker({
	    position: { lat: 40.741494, lng: -73.981295},
	    label:"Little Germany",
	    icon: "dot.png",
	    map: map
	});
	markers.push(german);

	var cp = new google.maps.Marker({
	    position: { lat: 40.782766, lng: -73.843165},
	    label:"College Point",
	    icon: "dot.png",
	    map: map
	});
	markers.push(cp);

	var astoria = new google.maps.Marker({
	    position: { lat: 40.768358, lng: -73.924163},
	    label:"Astoria",
	    icon: "dot.png",
	    map: map
	});
	markers.push(astoria);


	const germgradient =  [
    'rgba(255, 140, 0, 0)',
     'rgba(255, 189, 110, 1)',
     'rgba(255, 140, 0, 1)'
  ];
    germap = new google.maps.visualization.HeatmapLayer({
    data: germandata,
    map: map,
  });
  	germap.set("gradient", germgradient);
  	germap.set("radius",25);
	germap.setData(germandata);
	germap.setMap(map);




	var irelanddata=[
	 {location: new google.maps.LatLng(40.770684, -73.993251), weight: 3},
	 {location: new google.maps.LatLng(40.767499, -73.985956), weight: 3},
	 {location: new google.maps.LatLng(40.762494, -73.993680), weight: 3},
	 {location: new google.maps.LatLng(40.757943, -74.001834), weight: 3},
	 {location: new google.maps.LatLng(40.755602, -73.994024), weight: 3},

	 {location: new google.maps.LatLng(40.869891, -73.920465), weight: 3},

	 {location: new google.maps.LatLng(40.716586, -74.006022), weight: 3},
	]

	
	var hell = new google.maps.Marker({
	    position: { lat: 40.762494, lng: -73.993680},
	    label:"Hells Kitchen",
	    icon: "dot.png",
	    map: map
	});
	markers.push(hell);

	var inwood = new google.maps.Marker({
	    position: { lat: 40.869891, lng: -73.920465},
	    label:"Inwood",
	    icon: "dot.png",
	    map: map
	});
	markers.push(inwood);

	var five = new google.maps.Marker({
	    position: { lat: 40.709369, lng: -74.026022},
	    label:"Five Points",
	    icon: "dot.png",
	    map: map
	});
	markers.push(five);

	const iregradient = [
    'rgba(0, 157, 255, 0)',
     'rgba(107, 198, 255, 1)',
     'rgba(0, 157, 255, 1)'
  ];


  iremap = new google.maps.visualization.HeatmapLayer({
    data: irelanddata,
    map: map,
  });
  	iremap.set("gradient", iregradient);
  	iremap.set("radius",25);

	iremap.setData(irelanddata);
	iremap.setMap(map);





	var japandata=[
	 {location: new google.maps.LatLng(40.699486, -73.961893), weight: 3},
	 {location: new google.maps.LatLng(40.696818, -73.970991), weight: 3},

	 {location: new google.maps.LatLng(40.776225, -73.983059), weight: 3},
	 {location: new google.maps.LatLng(40.772154, -73.9870932), weight: 3},

	 {location: new google.maps.LatLng(40.795047, -73.968671), weight: 3},

	 {location: new google.maps.LatLng(40.809518, -73.962378), weight: 3},
	]
	
	var bleh = new google.maps.Marker({
	    position: { lat: 40.699486, lng: -73.961893},
	    label:"Brooklyn Navy Yard",
	    icon: "dot.png",
	    map: map
	});
	markers.push(bleh);

	var lincoln = new google.maps.Marker({
	    position: { lat:40.776225, lng: -73.983059},
	    label:"Lincoln Square",
	    icon: "dot.png",
	    map: map
	});
	markers.push(lincoln);

	var uws = new google.maps.Marker({
	    position: { lat:40.795047, lng:-73.968671},
	    label:"Upper West Side",
	    icon: "dot.png",
	    map: map
	});
	markers.push(uws);

	var morn = new google.maps.Marker({
	    position: { lat:40.809518, lng:-73.962378},
	    label:"Morningside Heights",
	    icon: "dot.png",
	    map: map
	});
	markers.push(morn);



	const japangradient = [
    'rgba(224, 198, 0, 0)',
     'rgba(255, 242, 143, 1)',
     'rgba(224, 198, 0, 1)'
  	];


japmap = new google.maps.visualization.HeatmapLayer({
    data: japandata,
    map: map,
  });
  	japmap.set("gradient", japangradient);
  	japmap.set("radius",25);
  
	japmap.setData(japandata);
	japmap.setMap(map);




var chinadata=[
	 {location: new google.maps.LatLng(40.717432, -73.996495), weight: 3},
	 {location: new google.maps.LatLng(40.713984, -73.996151), weight: 3},
	 {location: new google.maps.LatLng(40.716936, -74.000657), weight: 3},
	 {location: new google.maps.LatLng(40.716586, -74.006022), weight: 3},
	 {location: new google.maps.LatLng(40.718472, -73.998319), weight: 3},
	 {location: new google.maps.LatLng(40.712487, -73.991602), weight: 3},

	]

	var china = new google.maps.Marker({
	    position: { lat: 40.719936, lng: -74.000657 },
	    label:"Chinatown",
	    icon: "dot.png",
	    map: map
	});
	markers.push(china);
	const chinagradient = [
    'rgba(255, 0, 123, 0)',
     'rgba(255, 87, 168, 1)',
     'rgba(255, 0, 123, 1)'
  ];
  setMapOnAll(null);

  chimap = new google.maps.visualization.HeatmapLayer({
    data: chinadata,
    map: map,
  });
  	chimap.set("gradient", chinagradient);
  	chimap.set("radius",25);
	chimap.setData(chinadata);
	chimap.setMap(map);


	italymap.set("opacity", 1)
  	chimap.set("opacity", 1)
  	japmap.set("opacity", 1)
  	iremap.set("opacity", 1)
  	germap.set("opacity", 1)
  	jewmap.set("opacity", 1)

  	italymap.set("opacity", .8);
	chimap.set("opacity", .4)
	japmap.set("opacity", .4)
	iremap.set("opacity", 1)
	germap.set("opacity", .6);
	jewmap.set("opacity", .8);
	


}
