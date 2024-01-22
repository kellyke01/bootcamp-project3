SELECT * FROM nc2020electioncand
WHERE state = 'North Carolina';

--UPDATE nc2020electioncand
--SET county = UPPER(county);

UPDATE nc2020electioncand 
SET county = REPLACE(county, ' County', '');

DROP TABLE IF EXISTS ncCountyResults;

CREATE TABLE ncCountyResults AS

SELECT 
    nc2020electioncand.*,
    countyregvoters.total_reg_voters,
    ROUND((nc2020electioncand.total_votes::numeric / countyregvoters.total_reg_voters) * 100, 2) 
    AS perc_reg_voters
FROM 
    nc2020electioncand
LEFT JOIN 
    countyregvoters 
ON 
    nc2020electioncand.county = countyregvoters.county
WHERE state = 'North Carolina';

SELECT * FROM ncCountyResults;