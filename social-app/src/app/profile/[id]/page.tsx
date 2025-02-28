import React from 'react'
import LeftMenu from '../../../components/LeftMenu'
import RightMenu from '../../../components/RightMenu'
// import AddPost from '../../../components/AddPost'
// import Stories from '../../../components/Stories'
import Feed from '../../../components/Feed'
import Image from 'next/image'
import image5 from "../../../../public/image5.jpg"
import image6 from "../../../../public/image6.jpg"
const Profilepage = () => {
  return (
    <div className='flex gap-6 PT-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type='profile'/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className=" mt-8 flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src={image5} alt='' fill className="rounded-md"/>
              <Image src={image6} alt='' width={128} height={128} objectFit="cover" className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"/>
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium'>Shane Watson</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className='font-medium'>123</span>
                <span className='text-sm'>Post</span>

              </div>

              <div className="flex flex-col items-center">
                <span className='font-medium'>1.3k</span>
                <span className='text-sm'>Followers</span>

              </div>

              <div className="flex flex-col items-center">
                <span className='font-medium'>10</span>
                <span className='text-sm'>Following</span>

              </div>


            </div>
          </div>
            <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId='test'/>
      </div>
    </div>
  )
}

export default Profilepage