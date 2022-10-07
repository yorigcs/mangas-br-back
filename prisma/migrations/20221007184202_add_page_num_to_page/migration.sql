/*
  Warnings:

  - A unique constraint covering the columns `[page_num]` on the table `pages` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `page_num` to the `pages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pages" ADD COLUMN     "page_num" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pages_page_num_key" ON "pages"("page_num");
