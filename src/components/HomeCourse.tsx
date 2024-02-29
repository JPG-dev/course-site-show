import React from 'react'
import Link from 'next/link'

interface Props {
  own?: boolean;
  price?: string;
}

const HomeCourse = ({ own, price }: Props) => {
  let buttonText = own ? 'View Course' : `Buy Now ${price}`;

  return (
    <Link href="/course">
    <div className="flex flex-col p-4 rounded-md border border-blue-500  course-card cursor-pointer">
      <div className="text-3xl font-extrabold mb-4">Venture Capital Launchpad</div>
      <p className="mb-4">Light yet substantive introduction exposure to the world of venture capital in Southeast Asia:</p>
      <ul className="list-disc list-inside mb-4 pb-5">
        <li>3 or 6 months access</li>
        <li>13 core modules and hands-on activities</li>
        <li>5+ hours of explainer videos</li>
        <li>5+ hours of explainer videos</li>
      </ul>

      {
        own ? <Link href="/course" className="px-4 py-2 rounded-md w-full mt-auto text-center button">
        {buttonText}
      </Link> :
          <Link href="/checkout" className="px-4 py-2 rounded-md w-full mt-auto text-center button">
            {buttonText}
          </Link>
      }
    </div>
    </Link>
    
  )
}

export default HomeCourse