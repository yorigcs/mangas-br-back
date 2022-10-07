/*
  Warnings:

  - Added the required column `chapter_num` to the `chapters` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `season` on the `chapters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "chapters" ADD COLUMN     "chapter_num" INTEGER NOT NULL,
DROP COLUMN "season",
ADD COLUMN     "season" INTEGER NOT NULL;
