/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Follower` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Follower" ADD COLUMN     "id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Follower_id_key" ON "Follower"("id");
