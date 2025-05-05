import React from 'react';

const Offer = () => {
  return (
    <div className="h-[90vh] pt-4 bg-orange-300 ">
      {/* <Header /> */}
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Available Offers
        </h1>
        <ul className="space-y-4">
          <li className="bg-yellow-200 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <strong className="text-xl font-semibold">FLAT50</strong>: Get flat ₹50 off on orders above ₹299.
          </li>
          <li className="bg-green-200 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <strong className="text-xl font-semibold">FREEDINE</strong>: Enjoy free delivery on your first 3 orders.
          </li>
          <li className="bg-blue-200 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <strong className="text-xl font-semibold">BUY1GET1</strong>: Buy one get one free on selected items.
          </li>
          <li className="bg-pink-200 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <strong className="text-xl font-semibold">SWIGGYIT</strong>: 20% off up to ₹100 on all restaurants.
          </li>
          <li className="bg-purple-200 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <strong className="text-xl font-semibold">FOODIE30</strong>: Get 30% off on your second order this week.
          </li>
          <li className="bg-red-200 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <strong className="text-xl font-semibold">MEALDEAL</strong>: Combo meals starting at just ₹99.
          </li>
          <li className="bg-indigo-200 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <strong className="text-xl font-semibold">EXTRASAVE</strong>: Extra ₹20 cashback on payments via UPI.
          </li>
        </ul>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Offer;