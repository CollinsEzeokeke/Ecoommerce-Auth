import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Preview,
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface PlaidVerifyIdentityEmailProps {
  VerificationToken: string;
  name: string;
  url: string;
}

export const EmailVerification: React.FC<PlaidVerifyIdentityEmailProps> = ({
  VerificationToken,
  name,
  url
}) => (
  <Html>
    <Head />
    <Preview>Verify your identity for Chiflex</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container className="bg-white border border-gray-200 rounded-lg shadow-lg mt-5 mx-auto max-w-[360px] py-16 px-0">
          <Text className="text-blue-500 text-xs font-bold uppercase tracking-wide text-center mt-4 mb-2">
            Verify Your Identity
          </Text>
          <Text className="text-black text-xl font-medium text-center mx-8 my-0">
            Enter the following code to finish linking Chiflex.
          </Text>
          <Section className="bg-gray-100 rounded mx-auto my-4 w-[280px]">
            <Text className="text-black text-3xl font-bold tracking-widest leading-10 py-2 text-center">
              {VerificationToken}
            </Text>
          </Section>
          <Section className="my-7 mx-auto w-auto text-center">
            <Button href={url} className="bg-[#5e6ad2] rounded px-6 py-3 font-semibold text-white text-center mx-auto">
              Sign in
            </Button>
          </Section>
          <Text className="text-gray-700 text-sm leading-6 px-10 m-0 text-center">
            Not expecting this email?
          </Text>
          <Text className="text-gray-700 text-sm leading-6 px-10 m-0 text-center">
            Contact{" "}
            <Link href="mailto:chiflex@support.com" className="text-gray-700 underline">
              Chiflex@support.com
            </Link>
            {" "}if you did not request this code.
          </Text>
        </Container>
        <Text className="text-black text-xs font-extrabold uppercase leading-6 mt-5 text-center">
          Securely powered by Chiflex.
        </Text>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailVerification;