/*
  Warnings:

  - A unique constraint covering the columns `[page_num,chapter_id]` on the table `pages` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "pages_page_num_key";

-- CreateIndex
CREATE UNIQUE INDEX "pages_page_num_chapter_id_key" ON "pages"("page_num", "chapter_id");
