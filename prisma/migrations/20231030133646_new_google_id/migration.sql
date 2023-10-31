-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "googleId" TEXT,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_user" ("avatarUrl", "createdAt", "email", "googleId", "id", "name") SELECT "avatarUrl", "createdAt", "email", "googleId", "id", "name" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_googleId_key" ON "user"("googleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
