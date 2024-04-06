-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "travelId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Like_id_key" ON "Like"("id");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
