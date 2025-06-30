import React from 'react'

const ContactUs = () => {
  return (
    <div id='contact' className=" bg-gray-100 p-8 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">We would love to hear from you! Please fill out the form below to get in touch.</p>
      <form className="space-y-4 w-full max-w-md" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
      </form>
    </div>
  )
}

export default ContactUs