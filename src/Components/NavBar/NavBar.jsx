import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white py-4 px-6 flex items-center justify-between relative">
            {/* Left: Logo */}
            <h1 className="text-xl font-bold text-gray-900">Book Vibe</h1>

            {/* Middle: Navigation Links */}
            <ul className="hidden md:flex items-center space-x-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive
                            ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                            : "text-gray-700 hover:text-[#23BE0A]"
                        }`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/ListedBooks"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive
                            ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                            : "text-gray-700 hover:text-[#23BE0A]"
                        }`
                    }
                >
                    Listed Books
                </NavLink>

                <NavLink
                    to="/pages-to-read"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive
                            ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                            : "text-gray-700 hover:text-[#23BE0A]"
                        }`
                    }
                >
                    Pages to Read
                </NavLink>

            </ul>

            {/* Right: Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
                <button className="bg-[#23BE0A] text-white font-semibold px-4 py-2 rounded-lg transform transition-transform duration-200 hover:scale-105">
                    Sign In
                </button>
                <button className="bg-[#59C6D2] text-white font-semibold px-4 py-2 rounded-lg transform transition-transform duration-200 hover:scale-105">
                    Sign Up
                </button>
            </div>

            {/* Hamburger Icon */}
            <button
                className="md:hidden text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 md:hidden z-10">
                    <ul className="flex flex-col items-center space-y-4 w-full">
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `w-11/12 text-center px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive
                                    ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                                    : "text-gray-700 hover:text-[#23BE0A]"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/ListedBooks"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `w-11/12 text-center px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive
                                    ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                                    : "text-gray-700 hover:text-[#23BE0A]"
                                }`
                            }
                        >
                            Listed Books
                        </NavLink>

                        <NavLink
                            to="/pages-to-read"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `w-11/12 text-center px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive
                                    ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                                    : "text-gray-700 hover:text-[#23BE0A]"
                                }`
                            }
                        >
                            Pages to Read
                        </NavLink>
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
