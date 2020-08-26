// Add console.lot to check to see if our code is working
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30,30], 2);

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
// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup(`<h2>${feature.properties.name} (${feature.properties.faa})<hr/> ${feature.properties.city}, ${feature.properties.country}</h2>`);
//     }
//   }).addTo(map);


let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id sets the map style, including options such as mapbox.streets, .light,.dark, .satellite, .streets-satellite, .wheatpaste, .streets-basic, .comic, .outdoors, .run-bike-hike, .pirates, .emerald, .high-contrast
	accessToken: API_KEY
});

// // Add  'graymap' tile layer to map.
// streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    Dark: dark,
    Light: light
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [30, 30],
	zoom: 2,
	layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/ndxn/Mapping_Earthquakes/master/torontoRoutes.json";

let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Grabbing our GeoJSON data using D3
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    // L.geoJson(data).addTo(map);
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
          layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3> <hr><h3></h3>Destination: " + feature.properties.dst + "</h3> ");
         }
      })
    .addTo(map);
});


