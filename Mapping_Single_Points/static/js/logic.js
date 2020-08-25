// Add console.lot to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Alternate method to create the map object with a center and zoom level,
// with {}, useful when we need to add multiple tile layers, or a background image of our map(s)
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Create the tile layer that will be the background of our map.

//  Add a marker to the map for Los Angeles, California
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add circle  to map
L.circle([34.0522, -118.2437], {
    radius: 100,
    color: "black",
    fillColor: '#ffffa1'
 }).addTo(map);

// L.circleMarker([34.0522, -118.2437], {
//     radius: 30,
//     color: "black",
//     fillColor: '#ffffa1'
// }).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id sets the map style, including options such as mapbox.streets, .light,.dark, .satellite, .streets-satellite, .wheatpaste, .streets-basic, .comic, .outdoors, .run-bike-hike, .pirates, .emerald, .high-contrast
	accessToken: API_KEY
});
// Add  'graymap' tile layer to map.
streets.addTo(map);