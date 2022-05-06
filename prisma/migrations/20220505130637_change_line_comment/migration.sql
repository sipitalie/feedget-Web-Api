/*
  Warnings:

  - You are about to drop the column `commet` on the `feedbacks` table. All the data in the column will be lost.
  - Added the required column `comment` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "srceenshot" TEXT
);
INSERT INTO "new_feedbacks" ("id", "srceenshot", "type") SELECT "id", "srceenshot", "type" FROM "feedbacks";
DROP TABLE "feedbacks";
ALTER TABLE "new_feedbacks" RENAME TO "feedbacks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
