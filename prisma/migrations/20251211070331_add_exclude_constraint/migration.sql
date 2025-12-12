-- This is an empty migration.
--1. Add a tsrange column
ALTER TABLE "Booking"
ADD COLUMN "timeRange" tsrange
GENERATED ALWAYS AS (tsrange("startTime", "endTime", '[)')) STORED;

--2. ADD required PostgreSQl extension for EXCLUDE constraints
CREATE EXTENSION IF NOT EXISTS btree_gist;

--3.Prevent overlapping time ranges per barber
ALTER TABLE "Booking"
ADD CONSTRAINT "no_overlapping_bookings"
EXCLUDE USING GIST (
    "barberId" WITH =,
    "timeRange" WITH &&
);