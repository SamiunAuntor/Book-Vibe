import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm py-4 px-6 flex items-center justify-between relative">
            {/* Left: Logo */}
            <h1 className="text-xl font-bold text-gray-900">Book Vibe</h1>

            {/* Middle: Navigation Links*/}
            <ul className="hidden md:flex items-center space-x-6">
                <li className="bg-white text-[#23BE0A] border border-[#23BE0A] px-4 py-2 rounded-md font-semibold">
                    Home
                </li>
                <li className="text-gray-700 font-semibold hover:text-[#23BE0A] transition-colors cursor-pointer">
                    Listed Books
                </li>
                <li className="text-gray-700 font-semibold hover:text-[#23BE0A] transition-colors cursor-pointer">
                    Pages to Read
                </li>
            </ul>

            {/* Right: Auth Buttons*/}
            <div className="hidden md:flex items-center space-x-3">
                <button className="bg-[#23BE0A] text-white font-semibold px-4 py-2 rounded-lg transform transition-transform duration-200 hover:scale-105">
                    Sign In
                </button>
                <button className="bg-[#59C6D2] text-white font-semibold px-4 py-2 rounded-lg transform transition-transform duration-200 hover:scale-105">
                    Sign Up
                </button>
            </div>

            {/* Hamburger Icon*/}
            <button
                className="md:hidden text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-10">
                    <ul className="flex flex-col items-center space-y-4">
                        <li className="bg-white text-[#23BE0A] border border-[#23BE0A] px-4 py-2 rounded-md font-semibold">
                            Home
                        </li>
                        <li className="text-gray-700 font-semibold hover:text-[#23BE0A] transition-colors cursor-pointer">
                            Listed Books
                        </li>
                        <li className="text-gray-700 font-semibold hover:text-[#23BE0A] transition-colors cursor-pointer">
                            Pages to Read
                        </li>
                    </ul>
                    <div className="flex flex-col items-center space-y-3 w-full">
                        <button className="bg-[#23BE0A] text-white font-semibold px-4 py-2 rounded-lg w-11/12 transform transition-transform duration-200 hover:scale-105">
                            Sign In
                        </button>
                        <button className="bg-[#59C6D2] text-white font-semibold px-4 py-2 rounded-lg w-11/12 transform transition-transform duration-200 hover:scale-105">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
