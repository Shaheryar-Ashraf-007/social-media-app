import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import request from '../../public/request.jpg';
import { MdOutlineCancel } from 'react-icons/md';
import { MdOutlineGppGood } from 'react-icons/md';

const FriendRequest = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm mt-8 flex flex-col gap-4'>
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href='/' className='text-blue-500'>See All</Link>
      </div>

      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <Image 
            src={request} 
            alt="profile" 
            width={40} 
            height={40} 
            className="rounded-full w-10 h-10 object-cover" 
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineCancel size={24} className='text-gray-300 cursor-pointer' />
          <MdOutlineGppGood size={24} className='bg-blue-500 rounded-full text-white cursor-pointer' />
        </div>
      </div>

      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <Image 
            src={request} 
            alt="profile" 
            width={40} 
            height={40} 
            className="rounded-full w-10 h-10 object-cover" 
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineCancel size={24} className='text-gray-300 cursor-pointer' />
          <MdOutlineGppGood size={24} className='bg-blue-500 rounded-full text-white cursor-pointer' />
        </div>
      </div>

      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <Image 
            src={request} 
            alt="profile" 
            width={40} 
            height={40} 
            className="rounded-full w-10 h-10 object-cover" 
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineCancel size={24} className='text-gray-300 cursor-pointer' />
          <MdOutlineGppGood size={24} className='bg-blue-500 rounded-full text-white cursor-pointer' />
        </div>
      </div>

      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <Image 
            src={request} 
            alt="profile" 
            width={40} 
            height={40} 
            className="rounded-full w-10 h-10 object-cover" 
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineCancel size={24} className='text-gray-300 cursor-pointer' />
          <MdOutlineGppGood size={24} className='bg-blue-500 rounded-full text-white cursor-pointer' />
        </div>
      </div>

    </div>
  );
}

export default FriendRequest;