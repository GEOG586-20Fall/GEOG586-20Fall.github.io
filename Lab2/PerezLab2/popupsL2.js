//3 FCs used to allow for color-coding and separate by phase, more explanation in report.//
var ontheway = {
        "type" : "FeatureCollection",
        "features" : [
            {"type":"Feature", 
            "properties":{
                "name":"Sicamous",
                "place":"onward",
                "popupContent":"<h4> Sicamous, BC</h4> <strong> Where I met Stickshift (my worst enemy).</strong><br> On our way to BC, driving a standard car for the first time.",
                                "img":"<img src= outofcalg.jpg>"},
                "geometry":{
                    "type":"Point",
                    "coordinates":[-118.9768,50.8378]}},
            
            {"type":"Feature", 
            "properties":{
                "name":"Calgary",
                "place":"onward",
                "popupContent":"<h4>Calgary, AB</h4> <strong>Where it all began!</strong> <br>A beautiful sunset in Calgary, AB.",
                                "img":"<img src= calgary.jpg>"},
                "geometry":{
                    "type":"Point",
                    "coordinates":[-114.0593, 51.0478]}}]};

var van = {
     "type" : "FeatureCollection",
        "features" : [
            {"type":"Feature", 
            "properties":{
                "name":"Stanley",
                "place":"van",
                "popupContent":"<h4>Stanley Park, Vancouver, BC. AB</h4> <strong>Where we climbed trees and explored nature.</strong>",
                                "img":"<img src= stanley.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-123.1443, 49.3043]}},
            
            {"type":"Feature", 
            "properties":{
                "name":"VCoffee",
                "place":"van",
                "popupContent":"<h4>Bean Around the World, Vancouver, BC</h4> <strong>Where I fell in love with a coconut latte.</strong> <br> My friend enjoying the magnificent coffee from Bean Around the World.",
                                "img":"<img src= coffee.jpg>"},
                "geometry":{
                    "type":"Point",
                    "coordinates":[-123.1090, 49.2762]}},
            
            {"type": "Feature",
            "properties": {
                "name": "Granville",
                "place":"van",
                "popupContent": "<h4>Grandville Island, Vancouver, BC</h4> <strong>Where I had top notch fish and chips.</strong> <br> These boats are lined up along the coast of Granville Island, most (if not all) are privately owned.",
                                "img":"<img src= granville.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-123.1340,49.2712]}},
 
            {"type": "Feature",
            "properties": {
                "name": "Terminal",
                "place":"van",
                "popupContent": "<h4>Tsawwassen Terminal</h4> <strong>Where we took off for the island.</strong>",
                                "img":"<img src= Ferry.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-123.1304,49.0069]}}]};

    var ukee = {
     "type" : "FeatureCollection",
        "features" : [
            {"type": "Feature",
            "properties": {
                "name": "Long beach",
                "place":"ukee",
                "popupContent": "<h4>Long Beach, Tofino, BC</h4> <strong>Where I surfed until I died.</strong><br> I took a break on some fallen trees far from shore as the tide slowly came in to splash my feet.",
                                "img":"<img src=longbeach.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-125.7538, 49.0689]}},
            
            {"type": "Feature",
            "properties": {
                "name": "Ucluelet",
                "place":"ukee",
                "popupContent": "<h4> Ucluelet, BC</h4> <strong>Where we stayed and relaxed every night.</strong><br>This rocky shore was my favourite view when looking out into the ocean.",
                                "img":"<img src= Ukee.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-125.5463,48.9416]}},
            
             {"type": "Feature",
            "properties": {
                "name": "Tofinobrewing",
                "place":"ukee",
                "popupContent": "<h4> Tofino Brewing Co, Tofino, BC</h4> <strong>Where you can get some pretty good beer!</strong> <br> Although, nothing compares to AB's selection.",
                                "img":"<img src= tofinobeer.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-125.8934459,49.1393078]}}, 
            
            {"type": "Feature",
            "properties": {
                "name": "Victoria",
                "place":"ukee",
                "popupContent": "<h4> Victoria, BC</h4> <strong>Where we explored Mile 0, Chinatown, and its spooky and ghostly downtown areas.</strong> <br> This alley is notorious for being where all of the underground gambling occured back in the day.",
                                "img":"<img src= victoria.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-123.3656,48.4284]}}]};
        