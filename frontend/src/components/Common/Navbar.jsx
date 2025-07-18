import React from 'react'
import { Link } from "react-router-dom";
import {HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight, HiShoppingBag} from "react-icons/hi2";
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <>
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Logo */}
        <div>
            <Link to="/" className="text-2xl font-medium">
             Kinetix
            </Link>
        </div>
        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-6">
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
             Men
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
             Women
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
             Top Wear
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
             Bottom Wear
            </Link>
        </div>
        {/* Right Icons */}
        <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700"/>
            </Link>
            <button className="relative hover:text-black">
                <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"/>
                <span className="absolute -top-1 bg-kinetix-red text-white text-xs rounded-full px-2 py-0.5">
                    4
                </span>
            </button>
            {/* Search */}
            <SearchBar />
            <button className="md:hidden">
                <HiBars3BottomRight className="h-6 w-6 text-gray-700"/>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar