-- CreateTable
CREATE TABLE "Function" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "returnType" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Function_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parameter" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "defaultValue" TEXT NOT NULL,
    "functionId" INTEGER NOT NULL,

    CONSTRAINT "Parameter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Parameter" ADD CONSTRAINT "Parameter_functionId_fkey" FOREIGN KEY ("functionId") REFERENCES "Function"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
