-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "only_key" TEXT NOT NULL,
    "salt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CourseSelection" (
    "unique" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
