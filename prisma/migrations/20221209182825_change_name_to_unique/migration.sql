/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `chapters` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "chapters_name_key" ON "chapters"("name");
