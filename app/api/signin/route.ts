import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/prisma";
import { nanoid } from "nanoid";
import { Resend } from "resend";
import  EmailVerification from "@/emails";
import { render } from "@react-email/render";
import { Prisma } from "@prisma/client";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    // Check if the user is already existing and break creation of multiple users
    const existingUserbyEmail = await prisma.user.findUnique({
      where: { email },
    });

    console.log(existingUserbyEmail + `i am being displayed`);
    if (existingUserbyEmail) {
      return NextResponse.json(
        { message: "Email already exists and Username already exist" },
        { status: 400 }
      );
    }

    // Hashes the users password and generates a unique token that would be sent to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const VerificationToken = nanoid(6);
    const expiresAt = new Date(Date.now() + 3600000 + 1800000); // Token expires by an hour and thirty minutes

    const userData: Prisma.UserCreateInput = {
      name,
      email,
      password: hashedPassword,
      emailVerificationToken: VerificationToken,
      tokenExpiresAt: expiresAt,
    };
    const user = await prisma.user.create({ data: userData });

    const url = `${process.env.BETTER_AUTH_URL}/auth/verify?token=${VerificationToken}`;

    const {data, error} = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you",
      react: render(React.createElement(EmailVerification, { name, VerificationToken, url })),
    });

    if (error) {
      NextResponse.json({message: "this is a major error" + error})
    }

    return NextResponse.json(
      {
        message: `User created successfully` + user + `email sent successfully`,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(`Registration of new user failed ${err}`);
    NextResponse.json({
      message: `Registration Failed`,
    });
  }
}
