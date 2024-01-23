// Create a map centered around North Carolina
var map = L.map('map').setView([35.7596, -79.0193], 7);

// Add OpenStreetMap as the background layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON data for North Carolina counties
var ncData = "https://gis11.services.ncdot.gov/arcgis/rest/services/NCDOT_CountyBdy_Poly/MapServer/0/query?outFields=*&where=1%3D1&f=geojson";

// Load CSV data using D3.js
d3.csv("ncCountyResultsForMap.csv").then(function (csvData) {
    // Log the loaded CSV data to the console to ensure all necessary data is there
    console.log(csvData);

    // Load the GeoJSON data for North Carolina
    d3.json(ncData).then(function (geojsonData) {
        // Log the GeoJSON data to the console to ensure all necessary data is there
        console.log(geojsonData);


// first layer for the blue/red counties

        // Creating the styling logic for Blue/Red Counties
        let blueRedCounties = L.geoJson(geojsonData, {
            style: function (feature) {
                // Find the corresponding CSV data based on county name
                var matchingData = csvData.find(function (csvRow) {
                    return csvRow.county === feature.properties.CountyName;
                });

                // Determine fill color based on 'Party' data with blue being democrat and red being republican
                if (matchingData && matchingData.party === 'DEM') {
                    return {
                        color: "black",
                        fillColor: "blue",
                        fillOpacity: 0.60,
                        weight: 1.0
                    };
                } else if (matchingData && matchingData.party === 'REP') {
                    return {
                        color: "black",
                        fillColor: "red",
                        fillOpacity: 0.60,
                        weight: 1.0
                    };
                } else {
                    // Default style for counties with no matching 'Party' data (troubleshoot that no data is missing)
                    return {
                        color: "black",
                        fillColor: "gray",
                        fillOpacity: 0.60,
                        weight: 1.0
                    };
                }
            },
            onEachFeature: function (feature, layer) {
                // Set up mouse events for interaction
                layer.on({
                    mouseover: function (event) {
                        // Highlight the county on mouseover
                        layer.setStyle({
                            fillOpacity: 0.90
                        });
                    },
                    mouseout: function (event) {
                        // Reset the county style on mouseout
                        layer.setStyle({
                            fillOpacity: 0.60
                        });
                    },
                    click: function (event) {
                        // Center the map on the clicked county
                        map.fitBounds(event.target.getBounds());

                        // Find the corresponding CSV data based on county name
                        var matchingData = csvData.find(function (csvRow) {
                            return csvRow.county === feature.properties.CountyName;
                        });

                        // Generate popup content to display the text for 'candidate', 'party', and 'perc_reg_voters'
                        var popupContent = 'County: ' + feature.properties.CountyName + '<br>' +
                            'Candidate: ' + (matchingData && matchingData.candidate ? matchingData.candidate : 'N/A') + '<br>' +
                            'Party: ' + (matchingData && matchingData.party ? matchingData.party : 'N/A') + '<br>' +
                            'Percentage of Total Registered Voters: ' + (matchingData && matchingData.perc_reg_voters ? matchingData.perc_reg_voters : 'N/A');

                        // Open a popup with county information displayed
                        layer.bindPopup(popupContent).openPopup();
                    }
                });
            }
        }).addTo(map); // Add Blue/Red Counties layer to the map

//moving onto Total Registered Voters layer

        // Create GeoJSON layer for Total Registered Voters
        let totalRegVotersLayer = L.geoJson(geojsonData, {
            pointToLayer: function (feature, latlng) {
                // Find the corresponding CSV data based on county name
                var matchingData = csvData.find(function (csvRow) {
                    return csvRow.county === feature.properties.CountyName;
                });

                // Extract total registered voters from CSV data
                var totalRegVoters = (matchingData && matchingData.total_reg_voters) ? matchingData.total_reg_voters : 'N/A';

                // Create marker with pop-up content
                let marker = L.marker(latlng, {
                    title: `${feature.properties.CountyName}: ${totalRegVoters} registered voters`
                }).bindPopup(`Total Registered Voters in ${feature.properties.CountyName}: ${totalRegVoters}`);

                return marker;
            },
            onEachFeature: function (feature, layer) {
                // Set up mouse events
                layer.setStyle({
                    color: "black",
                    fillColor: "gray",
                    fillOpacity: 0.60,
                    weight: 1.0
                });

                layer.on({
                    click: function (event) {
                        // Center the map on the clicked county
                        map.fitBounds(event.target.getBounds());

                        // Find the corresponding CSV data based on county name
                        var matchingData = csvData.find(function (csvRow) {
                            return csvRow.county === feature.properties.CountyName;
                        });

                        // Extract total registered voters from CSV data
                        var totalRegVoters = (matchingData && matchingData.total_reg_voters) ? matchingData.total_reg_voters : 'N/A';

                        // Generate popup content to display the text for 'county' and 'total registered voters'
                        var popupContent = 'County: ' + feature.properties.CountyName + '<br>' +
                            'Total Number of Registered Voters: ' + totalRegVoters;

                        // Open a popup with county information displayed
                        layer.bindPopup(popupContent).openPopup();
                    }
                });
            }
        });
        totalRegVotersLayer.addTo(map); // Add Total Registered Voters layer to the map


//finally onto Percentage of Registered Voters layer

        // Create GeoJSON layer for Percentage of Registered Voters
        let percRegVotersLayer = L.geoJson(geojsonData, {
            pointToLayer: function (feature, latlng) {
                // Find the corresponding CSV data based on county name
                var matchingData = csvData.find(function (csvRow) {
                    return csvRow.county === feature.properties.CountyName;
                });

                // Extract percentage of registered voters from CSV data
                var percRegVoters = (matchingData && matchingData.total_perc_reg_voters) ? matchingData.total_perc_reg_voters : 'N/A';

                // Create marker with pop-up content
                let marker = L.marker(latlng, {
                    title: `${feature.properties.CountyName}: ${percRegVoters}% registered voters`
                }).bindPopup(`Percentage of Registered Voters in ${feature.properties.CountyName}: ${percRegVoters}%`);

                return marker;
            },
            onEachFeature: function (feature, layer) {
                // Set up mouse events
                layer.setStyle({
                    color: "black",
                    fillColor: "white",
                    fillOpacity: 0.60,
                    weight: 1.0
                });

                layer.on({
                    click: function (event) {
                        // Center the map on the clicked county
                        map.fitBounds(event.target.getBounds());

                        // Find the corresponding CSV data based on county name
                        var matchingData = csvData.find(function (csvRow) {
                            return csvRow.county === feature.properties.CountyName;
                        });

                        // Extract percentage of registered voters from CSV data
                        var percRegVoters = (matchingData && matchingData.total_perc_reg_voters) ? matchingData.total_perc_reg_voters : 'N/A';

                        // Generate popup content for 'county' and 'percentage of registered voters'
                        var popupContent = 'County: ' + feature.properties.CountyName + '<br>' +
                            'Percentage of Registered Voters Who Voted: ' + percRegVoters;

                        // Open a popup with county information
                        layer.bindPopup(popupContent).openPopup();
                    }
                });
            }
        });
        percRegVotersLayer.addTo(map); // Add Percentage of Registered Voters layer to the map

// this ends the layers information, now moving foward is the toggles to turn on and off each time the page is
// refreshed, and to also make sure all are off at initial port turn on.

// Create layer controls for toggling the layers
var overlayMaps = {
    'Blue/Red Counties': blueRedCounties,
    'Total Number of Registered Voters': totalRegVotersLayer,
    'Percentage of Registered Voters Who Voted': percRegVotersLayer
};

var layerControl = L.control.layers(null, overlayMaps, { collapsed: true }).addTo(map);

// Uncheck all layers on map load
map.eachLayer(function (layer) {
    if (layer instanceof L.GeoJSON) {
        map.removeLayer(layer);
    }
});

layerControl._update();
    });
});
