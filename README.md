**Milestone Project 3**

Star Members:
Cam Wilson 
Jai’lyn Jones
Rufin Perez
Kyndall Kelly
Kristina Swanson

**THEME**

**Central Question: Where are the voters?**:

With the next presidential election coming up we came upon some inspiration. We were reminded of the political climate of the 2020 presidential election and wanted to take a deeper look into it. We started to ask questions like: How many people were registered to vote in North Carolina? With a statewide focus, looking into all 100 counties in the state of North Carolina registered to vote, we see not only the percentage of votes each candidate received, but also the percentage of registered voters who participated in the 2020 presidential election. In the last election, how many registered voters are in each county and what political party is that county affiliated with? The purpose of our visualization map is for a user (e.g., a political party) to use our map to see where they can focus their resources in the next election.

**Pillars of Focus**:

- Number of registered voters in each county of North Carolina
- Percentage of registered voters in each county who participated 
- Breakdown of the major political parties in the 2020 election

**CODING APPROACH and DATA WRANGLING TECHNIQUES**

**Dataset Resources**:

https://www.kaggle.com/code/roydatascience/us-election-results-2020/input?select=president_county.csv

president_county_candidate.csv

https://www.kaggle.com/datasets/unanimad/us-election-2020

countyRegVoters.csv

Our datasets included at least 100 records.

**Ethical Consideration**: 

We reviewed the datasets to ensure there were no personal identifiable information of voters.

**USE OF POSTGRES**:

Our team used Postgres to create the tables. We then applied SQL code to perform:
- CREATE TABLES (for resulting tables from the original two tables from above)
- JOINS
- FILTERING using WHERE
- PERFORMING CALCULATIONS (to obtain percentage of total voters per winning candidate)
- EXPORTED/EXTRACTED resulting tables to CSV files

**FINAL VISUALIZAION**:

Base form of the State of North Carolina with all 100 counties. Our final design will include this map along with the three views
- Blue/Red Counties
- Total Registered Voters
- Total Percentage of Registered Voters that Voted

Our visualization map included the following user-driven interactions:
- Textboxes with text formatting in HTML for County, Candidate, Party, Pecentage of Registered Voters
- Control Toggle Box for the above three views
  
**Seaborn Python Library**:

This Python Library was one not convered during class. Using Jupyter Notebook, we used Seaborn for the enhanced color palette, specifically for the color-blind palette, since we wanted the data in the bar chart to be usable by all. 

**Primary GitHub Repository Link**: 

https://github.com/kellyke01/bootcamp-project3.git
