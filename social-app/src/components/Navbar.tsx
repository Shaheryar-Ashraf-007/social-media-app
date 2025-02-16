"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineHistory } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import Modal from './MobileMenu';
import Link from 'next/link';

const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <div className='flex items-center justify-between'>
      {/* Left Section */}
      <div className="flex items-center justify-between text-lg md:text-2xl lg:xl sm:text-md xs:text-sm font-bold">
        <Image className='w-8 h-8 md:w-16 md:h-16' src={logo} alt='logo' />
        Glimpse
      </div>

      {/* Center Section */}
      <div className="hidden md:block">
        <ul className='flex items-center space-x-4'>
          <Link href='/' className='flex items-center justify-between gap-2 font-semibold font-xl text-base md:text-sm sm:text-xs'>
            <IoHomeOutline className='text-teal-400 md:w-6 md:h-6 sm:w-4 sm:h-4' />
            Home Page 
          </Link>
          <Link href='/friends' className='flex items-center justify-between gap-2 font-semibold font-xl text-base md:text-sm sm:text-xs'>
            <LiaUserFriendsSolid className='text-teal-400 md:w-6 md:h-6 sm:w-4 sm:h-4' />
            Friends
          </Link>
          <Link href='/stories' className='flex items-center justify-between gap-2 font-semibold font-xl text-base md:text-sm sm:text-xs'>
            <MdOutlineHistory className='text-teal-400 md:w-6 md:h-6 sm:w-4 sm:h-4' />
            Stories
          </Link>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="hidden md:block">
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-lg flex items-center justify-between h-10 bg-slate-100 shadow-md rounded-lg px-4 transition-all duration-300 hover:shadow-lg">
          <input 
              type="text" 
              placeholder="Search" 
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 h-full" 
          />
          <button className="text-gray-500 rounded-full p-2 hover:text-teal-600 transition-colors duration-200">
              <IoSearch />
          </button>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <RiMenu4Line onClick={handleOpenModal} size={24} className='cursor-pointer text-blue-500 md:hidden' />

      {/* Right Section */}
      <div className="hidden md:block">
        <span>hy</span>
      </div>

      {/* Modal for Mobile Menu */}
      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Navbar;