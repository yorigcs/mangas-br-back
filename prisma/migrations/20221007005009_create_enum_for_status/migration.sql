/*
  Warnings:

  - The `status` column on the `mangas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ongoing', 'paused', 'dropped');

-- AlterTable
ALTER TABLE "mangas" ALTER COLUMN "followed_by" SET DEFAULT 0,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ongoing';
