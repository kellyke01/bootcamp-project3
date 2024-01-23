DROP TABLE IF EXISTS ncCountyResultsforMap;

CREATE TABLE ncCountyResultsforMap AS

SELECT 
    cpwtrv.*,
    tprv.total_perc_reg_voters
FROM
    candpartywontotalregvoters cpwtrv  -- cpwtrv is an alias for candpartywontotalregvoters
LEFT JOIN 
    totalpercregvoters tprv  -- tprv is an alias for totalpercregvoters
ON 
    cpwtrv.county = tprv.county;
	
SELECT * FROM ncCountyResultsforMap;