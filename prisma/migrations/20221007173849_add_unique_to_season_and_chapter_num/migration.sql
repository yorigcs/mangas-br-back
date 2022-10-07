/*
  Warnings:

  - A unique constraint covering the columns `[season,chapter_num]` on the table `chapters` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "chapters_season_chapter_num_key" ON "chapters"("season", "chapter_num");
