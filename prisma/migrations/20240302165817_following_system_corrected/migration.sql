/*
  Warnings:

  - You are about to drop the column `followed_user` on the `Follower` table. All the data in the column will be lost.
  - You are about to drop the column `follower` on the `Follower` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[followed_user_id,follower_id]` on the table `Follower` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `followed_user_id` to the `Follower` table without a default value. This is not possible if the table is not empty.
  - Added the required column `follower_id` to the `Follower` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_followed_user_fkey";

-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_follower_fkey";

-- DropIndex
DROP INDEX "Follower_followed_user_follower_key";

-- AlterTable
ALTER TABLE "Follower" DROP COLUMN "followed_user",
DROP COLUMN "follower",
ADD COLUMN     "followed_user_id" TEXT NOT NULL,
ADD COLUMN     "follower_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Follower_followed_user_id_follower_id_key" ON "Follower"("followed_user_id", "follower_id");

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followed_user_id_fkey" FOREIGN KEY ("followed_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
