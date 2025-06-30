import React from 'react'

const TestiMonials = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10" >
      <h2 className="text-3xl font-bold text-center text-gray-900 my-8">What Our Customers Say</h2>
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700">"I had an amazing experience booking my flight through this service. The process was smooth and the customer support was excellent!"</p>
          <p className="mt-4 text-right text-gray-500">- John Doe</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700">"Great prices and easy to use interface. I will definitely use this service again for my future travels."</p>
          <p className="mt-4 text-right text-gray-500">- Jane Smith</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700">"Highly recommend! The booking process was quick and I found the best deals on flights."</p>
          <p className="mt-4 text-right text-gray-500">- Alex Johnson</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Your Experience</h3>
        <form className="bg-white shadow-md rounded-lg p-6">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            rows="4"
            placeholder="Write your testimonial here..."
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Submit Testimonial
          </button>
        </form>
      </div>
    </div>
  )
}

export default TestiMonials