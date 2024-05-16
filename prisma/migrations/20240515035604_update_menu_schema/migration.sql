/*
  Warnings:

  - You are about to drop the column `Desc` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "Desc",
DROP COLUMN "Price",
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
