// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import prisma from "@/prisma";
// import { nanoid } from "nanoid";
// import resend from "@/resend";
// import EmailVerification from "@/emails";
// import { Prisma } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { Username, FirstName, LastName, SurName, email, password } =
//       await request.json();
//     // Check if the user is already existing and break creation of multiple users
//     const existingUserbyEmail = await prisma.user.findUnique({
//       where: { email },
//     });

//     console.log(existingUserbyEmail + `i am being displayed`);
//     if (existingUserbyEmail) {
//       return NextResponse.json(
//         { message: "Email already exists and Username already exist" },
//         { status: 400 }
//       );
//     }

//     // Hashes the users password and generates a unique token that would be sent to the database
//     const hashedPassword = await bcrypt.hash(password, 10);
//     let VerificationToken = nanoid(6);
//     const expiresAt = new Date(Date.now() + 3600000 + 1800000); // Token expires by an hour and thirty minutes

//     const userData: Prisma.UserCreateInput = {
//       userName: Username,
//       FirstName: FirstName,
//       LastName: LastName,
//       SureName: SurName,
//       email,
//       password: hashedPassword,
//       emailVerificationToken: VerificationToken,
//       tokenExpiresAt: expiresAt,
//       name: Username + FirstName + LastName
//     };
//     const user = await prisma.user.create({ data: userData });

//     const url = `${process.env.BETTER_AUTH_URL}/auth/verify?token=${VerificationToken}`;

//     const { data, error } = await resend.emails.send({
//       from: "Chiflex <onboarding@resend.dev>",
//       to: [email],
//       subject:
//         "Get the best life has to offer with premium footwear that'll leave you speechless.Complete yout sign up and Walk into the spotlight",
//       react: EmailVerification({ url, VerificationToken, Username }),
//     });

//     if (error) {
//       NextResponse.json({ message: "this is a major error" + error });
//     }

//     return NextResponse.json(
//       {
//         message: `User created successfully` + user + `email sent successfully`,
//       },
//       { status: 201 }
//     );
//   } catch (err) {
//     console.log(`Registration of new user failed ${err}`);
//     NextResponse.json({
//       message: `Registration Failed`,
//     });
//   }
// }

export async function POST(request:Request) {
  try{
    const { email, password } = await request.json();

    return NextResponse.json({message: "done"},{status: 200})
  } catch (error){
    console.log(error)
    NextResponse.json({message: `you have an error ${error}`},{status: 400})
  }
}