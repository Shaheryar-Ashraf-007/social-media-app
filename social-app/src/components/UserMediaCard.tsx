import React from 'react';
import Link from 'next/link';
import image1 from '../../public/image1.jpg';
import image2 from '../../public/image2.jpg';
import image3 from '../../public/image3.jpg';
import image4 from '../../public/image4.jpg';
import image5 from '../../public/image5.jpg';
import image6 from '../../public/image6.jpg';
import image7 from '../../public/image7.jpg';
import image8 from '../../public/image8.jpg';
import Image from 'next/image';

const UserMediaCard = ({ userId }: { userId?: string }) => {
  const images = [


    {src:image1, alt:"image1"},
    {src:image2, alt:"image2"},
    {src:image3, alt:"image3"},
    {src:image4, alt:"image4"},
    {src:image5, alt:"image5"},
    {src:image6, alt:"image6"},
    {src:image7, alt:"image7"},
    {src:image8, alt: "image8"},
    
  ];

  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm mt-8 flex flex-col gap-4'>
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href='/' className='text-blue-500 hover:underline'>See All</Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image,index) => (
          <div key={index} className="relative">
            <Image
              src={image.src} 
              alt={image.alt}
              className='w-16 h-16 rounded-md object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserMediaCard;