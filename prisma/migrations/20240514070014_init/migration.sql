-- CreateEnum
CREATE TYPE "Role" AS ENUM ('EMPLOYE', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'EMPLOYE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warung" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Warung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarungEmploye" (
    "id" SERIAL NOT NULL,
    "warungId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "WarungEmploye_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "Price" INTEGER NOT NULL,
    "Desc" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "warungId" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Warung_name_key" ON "Warung"("name");

-- AddForeignKey
ALTER TABLE "Warung" ADD CONSTRAINT "Warung_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarungEmploye" ADD CONSTRAINT "WarungEmploye_warungId_fkey" FOREIGN KEY ("warungId") REFERENCES "Warung"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarungEmploye" ADD CONSTRAINT "WarungEmploye_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_warungId_fkey" FOREIGN KEY ("warungId") REFERENCES "Warung"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
