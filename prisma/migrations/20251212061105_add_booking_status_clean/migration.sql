/*
  Warnings:

  - You are about to drop the column `timeRange` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "timeRange",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';
