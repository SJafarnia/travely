-- CreateTable
CREATE TABLE "Follower" (
    "followed_user" TEXT NOT NULL,
    "follower" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Follower_followed_user_follower_key" ON "Follower"("followed_user", "follower");

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followed_user_fkey" FOREIGN KEY ("followed_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_follower_fkey" FOREIGN KEY ("follower") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
