import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p className="text-sm">
          Follow us on{' '}
          <a href="https://twitter.com" className="text-blue-400 hover:underline">
            Twitter
          </a>{' '}
          and{' '}
          <a href="https://facebook.com" className="text-blue-400 hover:underline">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer