-- CreateTable
CREATE TABLE "Airline" (
    "name" TEXT NOT NULL,
    "iata" TEXT NOT NULL PRIMARY KEY,
    "european" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Airline_iata_key" ON "Airline"("iata");
