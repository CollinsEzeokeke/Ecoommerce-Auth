import { betterAuth, User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Resend } from "resend";
import prisma from "@/prisma";
import { nanoid } from "nanoid";

interface String {
  url: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    async sendVerificationEmail(url: String, user: User) {
      const verificationToken = nanoid();
      const verificationUrl = `${url}?token=${verificationToken}`;

      try {
        await resend.emails.send({
          from: "Your App <onboarding@resend.dev>",
          to: user.email,
          subject: "Verify Your Email",
          html: verificationUrl,
        });

        // Store the verification token in your database
        await prisma.user.update({
          where: { id: user.id, email: user.email },
          data: { emailVerificationToken: verificationToken },
        });

        console.log("Verification email sent successfully");
      } catch (error) {
        console.error("Error sending verification email:", error);
      }
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days,
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
  },
});
