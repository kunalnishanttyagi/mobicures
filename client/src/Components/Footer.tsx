import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#020627] text-white py-6">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold">Mobicures</h2>
                <p className="mb-4">Your trusted online door service electronic repair.</p>
                <ul className="flex justify-center space-x-6 mb-4">
                    <li><a href="#about" className="hover:underline">About Us</a></li>
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                    <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="border-t border-white py-4">
                <p>&copy; 2023 Mobicures. All rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer
