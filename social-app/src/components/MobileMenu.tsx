import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Corrected import

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Animation variants
  const variants = {
    hidden: { opacity: 0, scale: 0.5, x: '100%' }, 
    visible: { opacity: 1, scale: 1, x: '0%' }, 
    exit: { opacity: 0, scale: 0.5, x: '100%' },
  };

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-y-0 right-0 w-64 bg-slate-100 text-black shadow-lg"
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-teal-400 transition-colors"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          <nav className="mt-8">
            <div className="space-y-4">
              <Link href='/' className="block py-2 px-4 hover:bg-teal-400 hover:text-white cursor-pointer duration-300 rounded transition-colors">
                Home
              </Link>
              <Link href='/' className="block py-2 px-4 hover:bg-teal-400 hover:text-white duration-300 cursor-pointer rounded transition-colors">
                Friends
              </Link>
              <Link href='/' className="block py-2 px-4 hover:bg-teal-400 hover:text-white duration-300 cursor-pointer rounded transition-colors">
                Groups
              </Link>
              <Link href='/' className="block py-2 px-4 hover:bg-teal-400 hover:text-white duration-300 cursor-pointer rounded transition-colors">
                Stories
              </Link>
              <Link href='/' className="block py-2 px-4 hover:bg-teal-400 hover:text-white duration-300 cursor-pointer rounded transition-colors">
                Profile
              </Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;