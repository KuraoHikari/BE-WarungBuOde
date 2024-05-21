/*
  Warnings:

  - Added the required column `warungId` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "warungId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_warungId_fkey" FOREIGN KEY ("warungId") REFERENCES "Warung"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
