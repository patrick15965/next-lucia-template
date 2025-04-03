import { Prisma } from "@prisma/client";
import { prismaClient } from "../prisma";

export async function createUser(googleId: string): Promise<Prisma.UserGetPayload<null>> {
  const user = await prismaClient.user.create({
    data: {
      googleId: googleId,
    }
  })

  if (user === null) {
    throw new Error("Unexpected error");
  }
  return user;
}

export async function getUserFromGoogleId(googleId: string): Promise<Prisma.UserGetPayload<null> | null> {
  console.log("GETTING USER FROM GOOGLE ID: ", googleId)
  return await prismaClient.user.findFirst({
    where: { googleId: googleId }
  });
}
