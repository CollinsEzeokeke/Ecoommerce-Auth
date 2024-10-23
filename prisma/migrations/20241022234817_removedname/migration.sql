/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "name",
ALTER COLUMN "userName" DROP NOT NULL,
ALTER COLUMN "FirstName" DROP NOT NULL,
ALTER COLUMN "LastName" DROP NOT NULL,
ALTER COLUMN "SureName" DROP NOT NULL;
