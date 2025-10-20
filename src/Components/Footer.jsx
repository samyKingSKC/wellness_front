import React from "react";
import  business  from "../config/business";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">{business.name}</h2>
                    <p className="text-gray-400 text-sm mb-6">
                        {business.tagline}
                    </p>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-emerald-400 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-emerald-400 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-emerald-400 transition">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-emerald-400 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-emerald-400 transition">About</a></li>
                        <li><a href="#services" className="hover:text-emerald-400 transition">Services</a></li>
                        <li><a href="#booking" className="hover:text-emerald-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <FaEnvelope /> <a href={`mailto:${business.email}`}>{business.email}</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone /> <a href={`tel:${business.phone}`}>{business.phone}</a>
                        </li>
                        <li>{business.location}</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                    <p className="text-sm text-gray-400 mb-4">
                        Subscribe for wellness tips and exclusive offers.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-800"
                        />
                        <button
                            type="submit"
                            className="bg-emerald-500 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-emerald-600 transition"
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} {business.name}. All rights reserved.
            </div>
        </footer>
    );
}
