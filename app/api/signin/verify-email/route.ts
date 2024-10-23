import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    
    if (!token) {
      return NextResponse.json(
        { message: "Token is required" },
        { status: 400 }
      );
    }
    
    // Find the user with the provided token
    const user = await prisma.user.findFirst({
      where: {
        emailVerificationToken: token
      }
    });
    
    if (!user) {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 401 }
      );
    }
    
    // Compare the stored token with the provided token
    if (user.emailVerificationToken === token) {
      return NextResponse.json(
        { message: "Token is valid", user: { id: user.id, name: user.userName } },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Token mismatch" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}