/*
  Warnings:

  - Made the column `link` on table `TravelPartImage` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publicId` on table `TravelPartImage` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TravelPartImage" ALTER COLUMN "link" SET NOT NULL,
ALTER COLUMN "publicId" SET NOT NULL;
