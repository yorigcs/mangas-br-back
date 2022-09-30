/*
  Warnings:

  - Made the column `is_admin` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_moderator` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "profile_picture" DROP DEFAULT,
ALTER COLUMN "is_admin" SET NOT NULL,
ALTER COLUMN "is_moderator" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;
