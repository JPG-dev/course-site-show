import React, { useState, useRef } from 'react';

const Checkout = () => {
  // I prefer to use useRef rather than useState unless absolutely needed to prevent re-rendering
  const emailRef = useRef(null)
  const cardNumberRef = useRef(null)
  const expiryDateRef = useRef(null)
  const cvcRef = useRef(null)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle payment processing logic here
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Enter Payment Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          placeholder='Email'
          ref={emailRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Card Number</label>
        <input
          type="text"
          placeholder='Card Number'
          ref={cardNumberRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          pattern="\d*"
          required
        />
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
          <input
            type="text"
            ref={expiryDateRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="MM/YY"
            pattern="\d{2}/\d{2}"
            required
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block text-gray-700 font-medium mb-2">CVC</label>
          <input
            type="text"
            ref={cvcRef}
            placeholder="CVC"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            pattern="\d*"
            required
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
        Make Payment
      </button>
    </form>
  );
};

export default Checkout;
