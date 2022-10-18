/*
  Warnings:

  - You are about to drop the column `season` on the `chapters` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chapter_num]` on the table `chapters` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "chapters_season_chapter_num_key";

-- AlterTable
ALTER TABLE "chapters" DROP COLUMN "season",
ADD COLUMN     "price" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "chapters_chapter_num_key" ON "chapters"("chapter_num");
