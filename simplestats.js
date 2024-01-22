// Assuming you have a way to load your CSV data into a variable, e.g., `electionResults`
// Let's say `electionResults` is an array of objects, where each object represents a row in the CSV file

// Example of what `electionResults` might look like:
// [
//   { county: "County1", votes: 1000 },
//   { county: "County2", votes: 2000 },
//   ...
// ]

let electionResults = d3.csv("ncCountyResultsForMap.csv") 
    // Log the loaded CSV data to the console to ensure all necessary data is there
    console.log(electionResults);


    electionResults.then(data => {
        // Now 'data' is the array you want to work with
        const voteCounts = data.map(row => row.votes);
    
        // Calculate statistical measures using SimpleStatistics
        const mean = ss.mean(voteCounts);
        const median = ss.median(voteCounts);
        const max = ss.max(voteCounts);
        const min = ss.min(voteCounts);
    
        // Log or use these values as needed
        console.log(`Mean: ${mean}, Median: ${median}, Max: ${max}, Min: ${min}`);
    })
    .catch(error => {
        console.error('Error processing data:', error);
    });
// Extract the vote counts into an array
//const voteCounts = electionResults.map(row => row.votes);

// Calculate statistical measures using SimpleStatistics
//const mean = ss.mean(voteCounts);
//const median = ss.median(voteCounts);
//const max = ss.max(voteCounts);
//const min = ss.min(voteCounts);

// Log or use these values as needed
//console.log(`Mean: ${mean}, Median: ${median}, Max: ${max}, Min: ${min}`);


