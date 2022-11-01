-- CreateTable
CREATE TABLE "Guestbook" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "message" VARCHAR(100) NOT NULL,

    CONSTRAINT "Guestbook_pkey" PRIMARY KEY ("id")
);
