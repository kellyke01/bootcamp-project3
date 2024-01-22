CREATE TABLE NC2020ElectionCand (
	state VARCHAR,
	county VARCHAR,
	candidate VARCHAR,
	party VARCHAR,
	total_votes INT,
	won BOOLEAN
);

SELECT * FROM NC2020ElectionCand;

CREATE TABLE CountyRegVoters (
	county VARCHAR,
	total_reg_voters INT
);

SELECT * FROM CountyRegVoters;
