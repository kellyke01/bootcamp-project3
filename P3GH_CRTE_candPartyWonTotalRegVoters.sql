DROP TABLE IF EXISTS candPartyWonTotalRegVoters;

CREATE TABLE candPartyWonTotalRegVoters AS

SELECT 
    county,
    candidate,
    party,
    won,
    total_reg_voters,
	perc_reg_voters
FROM 
    ncCountyResults
WHERE won = 'true';

SELECT * FROM candPartyWonTotalRegVoters;