var mymap = L.map('mapid').setView([35.738545, 51.313853], 14);
	   
	   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFoc2FzaGF5YW5mYXIiLCJhIjoiY2tmbWR5dmhxMG83ajJxcHNsNXR6M3NieSJ9.QbKUzHSVoY0Rzuyhg2wxWw'
}).addTo(mymap);

var marker = L.marker([35.738545, 51.313853]).addTo(mymap);
var circle = L.circle([35.738545, 51.313853], {
    color: 'Green',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(mymap);


marker.bindPopup("<b>Kourosh Mall</b>.").openPopup();
circle.bindPopup("Traffic Zone");

function myFunction() {
  document.getElementById("solutions").innerHTML = "1-Providing more parking space <br/>2-Increasing the service hours of the store to 24 hours <br/>3-Considering specific public transportation";
  //document.getElementById("asdf").innerHTML = " 24 hours";
}