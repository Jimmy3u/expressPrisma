/*
  Warnings:

  - You are about to drop the column `artistId` on the `album` table. All the data in the column will be lost.
  - Added the required column `artist` to the `album` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL
);
INSERT INTO "new_album" ("id", "name") SELECT "id", "name" FROM "album";
DROP TABLE "album";
ALTER TABLE "new_album" RENAME TO "album";
CREATE UNIQUE INDEX "album_name_key" ON "album"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
