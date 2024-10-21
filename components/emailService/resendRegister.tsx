import * as React from 'react';
// import Image from "next/image"
import { Button } from "@/components/ui/button"

interface EmailTemplateProps {
  url: string;
  VerificationToken: string;
  name: string;
}

export const EmailVerification: React.FC<Readonly<EmailTemplateProps>> = ({
    url, VerificationToken, name
  }) => (   
    <div className='h-screen mt-80 w-full flex items-end justify-center'>
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48 sm:h-64 lg:h-80">
          
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Welcome, {name}!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Step into a world of comfort and style with our exclusive collection of shoes. 
            From casual sneakers to elegant formal wear, we offer a diverse range of footwear 
            to suit every occasion and preference. Our carefully curated selection combines 
            the latest trends with timeless classics, ensuring you'll find the perfect pair 
            to express your unique style. With top-quality materials and expert craftsmanship, 
            our shoes are designed to provide lasting comfort and durability. Browse our 
            collection today and take the first step towards elevating your footwear game!
          </p>
          <div className="mb-6 p-4 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-600 mb-2">Your unique token:</p>
            <p className="text-xl font-bold text-gray-800 break-all">{VerificationToken}</p>
          </div>

          <Button className="w-full sm:w-auto">
            <a href={url}>
            Verify Email
            </a>
          </Button>
        </div>
      </div>
    </div>
    </div>
  )