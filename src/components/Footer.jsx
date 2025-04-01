import React from 'react'
import logo from "../../src/logo.png"

const footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 p-8 mt-12">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-semibold">Need warehouse space?</h2>
      <p className="mt-2 text-lg">Let’s match you with the ideal location!</p>
      <button className="mt-4 border border-black px-6 py-2 rounded-lg hover:bg-gray-200">
        Register Now
      </button>
    </div>

    {/* Footer Links */}
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mt-8 text-center md:text-left">
      <div>
        <h3 className="font-semibold">Navigation</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Warehouses</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Others</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="hover:underline">FAQ</a></li>
          <li><a href="#" className="hover:underline">Support</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Legal</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Use</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Social</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="hover:underline">Facebook ↗</a></li>
          <li><a href="#" className="hover:underline">Instagram ↗</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="container mx-auto text-center mt-8 border-t pt-6">
      <img src={logo} alt="WFN Logo" className="mx-auto h-8" />
      <p className="text-sm mt-2">&copy; 2025 Warehouseexchange. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default footer