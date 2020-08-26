// Add console.lot to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 10);

// Add GeoJSON data.
let sanFranAirport = {
    "type":"FeatureCollection","features":[{
        "type":"Feature",
        "properties":{
            "id":"3469",
            "name":"San Francisco International Airport",
            "city":"San Francisco",
            "country":"United States",
            "faa":"SFO",
            "icao":"KSFO",
            "alt":"13",
            "tz-offset":"-8",
            "dst":"A",
            "tz":"America/Los_Angeles"},
            "geometry":{
                "type":"Point",
                "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbing GeoJSON at 1 marker
// L.geoJSON(sanFranAirport).addTo(map);

// // Grabbing GeoJSON data using pointToLayer() function.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup(`<h2>${feature.properties.name} (${feature.properties.faa})<hr/> ${feature.properties.city}, ${feature.properties.country}</h2>`);
//     }
//   }).addTo(map);

// Grabbing GeoJSON data using pointToLayer() function.
L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup(`<h2>${feature.properties.name} (${feature.properties.faa})<hr/> ${feature.properties.city}, ${feature.properties.country}</h2>`);
    }
  }).addTo(map);


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id sets the map style, including options such as mapbox.streets, .light,.dark, .satellite, .streets-satellite, .wheatpaste, .streets-basic, .comic, .outdoors, .run-bike-hike, .pirates, .emerald, .high-contrast
	accessToken: API_KEY
});
// Add  'graymap' tile layer to map.
streets.addTo(map);