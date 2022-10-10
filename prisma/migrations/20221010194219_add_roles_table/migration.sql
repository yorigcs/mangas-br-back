/*
  Warnings:

  - You are about to drop the column `is_admin` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `is_moderator` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('admin', 'user', 'moderator');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "is_admin",
DROP COLUMN "is_moderator",
ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'user';
