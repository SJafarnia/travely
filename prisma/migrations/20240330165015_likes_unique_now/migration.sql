/*
  Warnings:

  - A unique constraint covering the columns `[userEmail,travelId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Like_userEmail_travelId_key" ON "Like"("userEmail", "travelId");
