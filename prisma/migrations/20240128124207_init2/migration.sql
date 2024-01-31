/*
  Warnings:

  - You are about to drop the column `imgLing` on the `TravelPart` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "accessLevel" AS ENUM ('BASIC', 'ADMIN');

-- AlterTable
ALTER TABLE "Travel" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "TravelPart" DROP COLUMN "imgLing",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessLevel" "accessLevel" NOT NULL DEFAULT 'BASIC',
ADD COLUMN     "profileImg" TEXT DEFAULT '',
ALTER COLUMN "email" DROP NOT NULL;

-- CreateTable
CREATE TABLE "TravelPartImage" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "partId" TEXT,

    CONSTRAINT "TravelPartImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TravelPartImage" ADD CONSTRAINT "TravelPartImage_partId_fkey" FOREIGN KEY ("partId") REFERENCES "TravelPart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
