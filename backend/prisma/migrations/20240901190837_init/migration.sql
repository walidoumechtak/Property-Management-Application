/*
  Warnings:

  - You are about to drop the column `contactInfo` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Tenant` table. All the data in the column will be lost.
  - Added the required column `contact` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "contactInfo",
DROP COLUMN "fullName",
ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
