#!/bin/bash
psql -v ON_ERROR_STOP=1 -d webapp --username "$POSTGRES_USER" <<-EOSQL 
CREATE TABLE "Players"
(
  id serial NOT NULL,
  name character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT "Players_pkey" PRIMARY KEY (id)
);

CREATE TABLE "SequelizeMeta"
(
  name character varying(255) NOT NULL,
  CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name)
);

CREATE TABLE "Deaths"
(
  id serial NOT NULL,
  map character varying(255),
  "matchId" character varying(255),
  "time" time without time zone,
  "killerPlacement" double precision,
  "killerPositionX" double precision,
  "killerPositionY" double precision,
  "victimPlacement" double precision,
  "victimPositionX" double precision,
  "victimPositionY" double precision,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "killerId" integer,
  "victimId" integer,
  CONSTRAINT "Deaths_pkey" PRIMARY KEY (id),
  CONSTRAINT "Deaths_killerId_fkey" FOREIGN KEY ("killerId")
      REFERENCES "Players" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT "Deaths_victimId_fkey" FOREIGN KEY ("victimId")
      REFERENCES "Players" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE pubg(
    killed_by text,
    killer_name text,
    killer_placement float8,
    killer_position_x float8,
    killer_position_y float8,
    "map" text,
    match_id text,
    "time" int,
    victim_name text,
    victim_placement float8,
    victim_position_x float8,
    victim_position_y float8
);

COPY pubg FROM '/csvdata/example.csv' WITH CSV HEADER DELIMITER AS ',';

INSERT INTO "Players"("name", "createdAt","updatedAt") SELECT DISTINCT(name), now(), now() FROM (
	SELECT killer_name AS name FROM pubg
	UNION ALL
	SELECT victim_name AS name FROM pubg
) AS names WHERE name != '';

INSERT INTO "Deaths"(
"map", 
"matchId",
"killerPlacement",
"killerPositionX",
"killerPositionY",
"victimPlacement",
"victimPositionX",
"victimPositionY",
"createdAt", 
"updatedAt", 
"killerId", 
"victimId"
) SELECT
"map",
"match_id",
"killer_placement",
"killer_position_x",
"killer_position_y",
"victim_placement",
"victim_position_x",
"victim_position_y",
now(),
now(),
(SELECT id FROM "Players" WHERE name = killer_name),
(SELECT id FROM "Players" WHERE name = victim_name)
FROM "pubg";

EOSQL