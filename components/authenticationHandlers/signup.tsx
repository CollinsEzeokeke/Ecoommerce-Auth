import prisma from "@/prisma";

export async function initializeAuthClient() {
  try {
    // Create a user using Prisma
    const user = await prisma.user.create({
      data: {
        id: 'dksjdfkjd',
        email: "test@example.com",
        password: "password1234",
        name: "test",
        image: "https://example.com/image.png",
      },
    });
  } catch (error) {
    console.error("Error initializing auth client:", error);
    throw error;
  }
}