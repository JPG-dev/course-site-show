import React from 'react'

interface Props {
  own?: boolean;
  price?: string;
}

const HomeCourse = ({ own, price }: Props) => {
  let buttonText = own ? 'View Course' : `Buy Now ${price}`;

  return (
    <div className="p-4 rounded-md text-black border border-blue-500 text-white">
        <h3 className="text-xl font-semibold mb-2">Product 1</h3>
        <p className="mb-4">Description of Product 1 goes here.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">{buttonText}</button>
      </div>
  )
}

export default HomeCourse