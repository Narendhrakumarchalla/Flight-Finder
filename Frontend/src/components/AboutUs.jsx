import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are a team of passionate individuals dedicated to providing the best service possible. Our mission is to create a platform that connects people and fosters community.
          </p>
          <p className="text-lg text-gray-700">
            With years of experience in the industry, we strive to innovate and improve continuously. Thank you for being a part of our journey!
          </p>
          <button onClick={()=> navigate('#contact')} className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
              Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs