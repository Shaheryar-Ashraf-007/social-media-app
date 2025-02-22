import React from 'react'
import Link from 'next/link'
import { FiLink } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";



const UserInfoCard = ({userId}:{userId?:string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm mt-8 flex flex-col gap-4'>
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href='/' className='text-blue-500'>See All</Link>
      </div>

      {/* bottom  */}

      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center justify-start gap-2">
        <span className='text-xl text-black font-semibold'>Lena Paul</span>
        <span className='text-sm'>@lenapaul</span>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quas quibusdam recusandae autem. Aperiam veniam ipsum fugiat. Deserunt voluptatum saepe dolore sapiente voluptas doloribus numquam repellat, quis aliquid dolorem nisi.
      </p>

      <div className="flex items-center justify-start gap-2">
      <FaLocationDot size={16} className='text-gray-500'/>
        <span className='text-gray-500'>Living in <b>Lahore, Pakistan</b></span>
        </div>

        <div className="flex items-center justify-start gap-2">

        <PiStudentFill size={16} className='text-gray-500'/>
        <span className='text-gray-500'>Went to <b>Lahore School of Echnomics</b>
        </span>
        </div>

        <div className="flex items-center justify-start gap-2">
        <MdWork size={16} className='text-gray-500'/>
        <span className='text-gray-500'>Work at <b>Google.com</b>
        </span>
        </div>

        <div className="flex items-center justify-between">
            <div className=" flex items-center justify-between gap-2">
        <FiLink size={16} className='text-gray-500' /> 
        <Link href='/' className='text-blue-500 text-xs'>google.com</Link>
        </div>
        <div className="text-gray-500 flex items-center justify-between gap-2">
        <FaCalendarDays />
        <span className='text-xs font-medium'>Joined November 2025</span>
        </div>
        </div>

        <button className='rounded-md px-4 py-2 text-white bg-blue-500'>Following</button>
        <button className='text-red-500  px-4 py-2 bg-slate-100'>Block User</button>
      </div>
  )
}

export default UserInfoCard