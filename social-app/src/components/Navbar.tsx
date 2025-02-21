"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineHistory, MdOutlineNotificationsActive } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import Modal from "./MobileMenu";
import Link from "next/link";
import { BsPeople } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <div className="flex items-center justify-between p-4 ">
      {/* Left Section */}
      <div className="flex items-center text-lg md:text-2xl font-bold">
        <Image className="w-8 h-8 md:w-16 md:h-16" src={logo} alt="logo" />
        <span className="ml-2">Glimpse</span>
      </div>

      {/* Center Section */}
      <div className="hidden md:flex">
        <ul className="flex items-center space-x-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-base">
            <IoHomeOutline className="text-teal-400" size={24} />
            Home Page
          </Link>
          <Link href="/friends" className="flex items-center gap-2 font-semibold text-base">
            <LiaUserFriendsSolid className="text-teal-400" size={24} />
            Friends
          </Link>
          <Link href="/stories" className="flex items-center gap-2 font-semibold text-base">
            <MdOutlineHistory className="text-teal-400" size={24} />
            Stories
          </Link>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex">
        <div className="flex items-center justify-between h-10 bg-slate-100 shadow-md rounded-lg px-4 transition-all duration-300 hover:shadow-lg">
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
      <RiMenu4Line
        onClick={handleOpenModal}
        size={24}
        className="cursor-pointer text-blue-500 md:hidden"
      />

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        <ClerkLoading>
          <div className="h-4 w-4 animate-spin border-2 border-gray-500 rounded-full border-e-transparent"></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="flex items-center space-x-4">
              <div className="cursor-pointer">
                <BsPeople className="text-teal-400" size={24} />
              </div>
              <div className="cursor-pointer">
                <FiMessageSquare className="text-teal-400" size={24} />
              </div>
              <div className="cursor-pointer">
                <MdOutlineNotificationsActive className="text-teal-400" size={24} />
              </div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaRegUserCircle className="text-teal-400" size={24} />
              <Link href="/sign-in" className="font-semibold">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>

      {/* Modal for Mobile Menu */}
      <Modal isOpen={isOpenModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;