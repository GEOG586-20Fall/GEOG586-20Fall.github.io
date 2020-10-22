


<script>


function Popups(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    };
};

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [51.3203761, 35.7398037]
    }
};

L.geoJSON(geojsonFeature, {
    onEachFeature: Popups
}).addTo(map);



	</script>
	
