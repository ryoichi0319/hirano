// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)


  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

}

model User {
  id                 String               @id @default(cuid())
  email              String?              @unique
  emailVerified      DateTime?
  name               String?
  introduction       String?
  image              String?
  hashedPassword     String?
  createdAt          DateTime             @default(now())
  updatedAt          DateTime             @updatedAt
  post               Post[]
  accounts           Account[]
  sessions           Session[]
}

model Post {
  id    String @id @default(cuid())
  userId String
  title String
  content String
  image String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}