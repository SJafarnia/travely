-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_authorId_fkey";

-- DropForeignKey
ALTER TABLE "TravelPart" DROP CONSTRAINT "TravelPart_travelId_fkey";

-- DropForeignKey
ALTER TABLE "TravelPartImage" DROP CONSTRAINT "TravelPartImage_partId_fkey";

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelPart" ADD CONSTRAINT "TravelPart_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelPartImage" ADD CONSTRAINT "TravelPartImage_partId_fkey" FOREIGN KEY ("partId") REFERENCES "TravelPart"("id") ON DELETE CASCADE ON UPDATE CASCADE;
