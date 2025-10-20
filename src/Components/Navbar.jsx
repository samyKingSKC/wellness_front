import React, { useState } from "react";
import business from "../config/business";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "Home", href: `/?b=${business.name}` },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Contact", href: "/#booking" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm transition">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Name */}
                <a
                    href="/"
                    className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${business.theme.primary}`}
                >
                    {business.name}
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 dark:text-gray-100 font-medium hover:text-emerald-500 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Contact Button */}
                <Link
                    to="/book"
                    className="hidden md:inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
                >
                    Book Now
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl text-gray-700 dark:text-gray-100"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Nav */}
            {open && (
                <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-emerald-100/30 dark:hover:bg-emerald-800/20 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                    <Link
                        to={`/book`}
                        className="block px-6 py-3 text-emerald-600 font-semibold"
                    >
                        Book Now
                    </Link>
                </nav>
            )}
        </header>
    );
}
