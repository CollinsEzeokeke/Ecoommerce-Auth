/*
  Warnings:

  - You are about to drop the `PasswordResetToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tokenExpiresAt" TIMESTAMP(3),
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "PasswordResetToken";

-- DropTable
DROP TABLE "VerificationToken";
