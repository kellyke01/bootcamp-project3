DROP TABLE IF EXISTS totalPercRegVoters;

CREATE TABLE totalPercRegVoters AS

SELECT county, SUM(perc_reg_voters) AS total_perc_reg_voters
FROM ncCountyResults
GROUP BY county
ORDER BY county;

SELECT * FROM totalPercRegVoters