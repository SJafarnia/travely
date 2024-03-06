/*
  Warnings:

  - Made the column `id` on table `Follower` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Follower" ALTER COLUMN "id" SET NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
