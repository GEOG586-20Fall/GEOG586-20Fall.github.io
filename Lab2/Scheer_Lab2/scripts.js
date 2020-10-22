function bindPopups(feature, layer) {
	//var popup = L.popup({maxWidth: 600, maxHeight: 400})
    layer.bindPopup(feature.properties.popupContent+feature.properties.img);
}

var commPlaces = {
				"type" : "FeatureCollection",
					"features" : [
						{"type":"Feature", 
						"properties":{
							"name":"coop",
							"popupContent":"Co-op. A chain grocery store co-operative which sources a decent amount of local products and rewards its members with money back every year.",
							"img":"<img src=dalhousieCoop.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.146024, 51.102623]}
						},
						{"type":"Feature", 
						"properties":{
							"name":"safeway",
							"popupContent":"Safeway. Another grocery option, sometimes cheaper than Co-op.",
							"img":"<img src=dalhousieStation.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.161792, 51.106917]}
						},
						{"type":"Feature", 
						"properties":{
							"name":"library",
							"popupContent":"Nose Hill Library. A nice, equitable place to read and learn, or use a computer",
							"img":"<img src=noseHillLibrary.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.138670, 51.096534]}
						},
						{"type":"Feature", 
						"properties":{
							"name":"pubRec",
							"popupContent":"Sir Winston Churchill Aquatic & Recreation Centre. Has a pool and a gym.",
							"img":"<img src=pubRec.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.137479, 51.096871]}
						},
						{"type":"Feature", 
						"properties":{
							"name":"lrt",
							"popupContent":"Dalhousie LRT station. Provides zoomy access to jobs, education, recreation, you name it, all over the city.",
							"img":"<img src=lrt2.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.159946, 51.103284]}
						},
						{"type":"Feature", 
						"properties":{
							"name":"clinic",
							"popupContent":"A medical clinic. For when you're sick or injured, obviously.",
							"img":"<img src=clinic.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.160658, 51.105360]}
						},
						{"type":"Feature", 
						"properties":{
							"name":"pizza",
							"popupContent":"Canadian Pizza Unlimited (CPU). Essential for survival, but also just one of many other food options around for when pizza (or cheap) isn't the name of the game.",
							"img":"<img src=pizza.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.14006, 51.101344]}
						},
						{"type":"Feature", 
						"properties":{
							"name":"home",
							"popupContent":"My home. A townhouse, in one of the 4 or 5 complexes around here.",
							"img":"<img src=dalhousieDrive.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.153236, 51.103814]}
						},
						{"type":"Feature", 
						"properties":{
							"name":"outdoorPubRec",
							"popupContent":"Public outdoor tennis and basketball courts.",
							"img":"<img src=outdoorPubRec.png>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.156647, 51.104700]}
						}
						
						
					]
			}