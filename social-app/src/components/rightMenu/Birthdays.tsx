import React from 'react';
import Image from 'next/image';
import request from '../../../public/request.jpg';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import Link from 'next/link';


const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm mt-8 flex flex-col gap-4'>
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
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
       <button className='bg-blue-500 text-white rounded-md px-2 py-1'>Celebrate</button>
      </div>

      <div className=" bg-slate-100 p-4 rounded-md ">
        <Link href='/' className="flex items-center justify-start gap-2">
      <LiaBirthdayCakeSolid size={24} className='text-gray-300'/>

      <span className='font-semibold text-gray-800'>Upcomings Birthdays</span>
      </Link>
      <p className='text-gray-500 font-medium'>See other 16 upcoming birthdays</p>

      </div>

    </div>
  );
}

export default Birthdays;