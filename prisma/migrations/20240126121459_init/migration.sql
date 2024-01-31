-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Travel" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelPart" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imgLing" TEXT NOT NULL,
    "mapData" JSONB NOT NULL,
    "recommendations" JSONB,
    "travelId" TEXT NOT NULL,

    CONSTRAINT "TravelPart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Travel_id_key" ON "Travel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TravelPart_id_key" ON "TravelPart"("id");

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelPart" ADD CONSTRAINT "TravelPart_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
