import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

    return (
        <div className="flex justify-between items-center p-2 bg-white">
            <div className='flex'>
            <div className='w-20'></div>
            <div className="text-2xl">ADMIN PANEL</div>
            </div>
            <div className="flex items-center mr-5">
                <div className='mr-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>
                <div className='mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "32px", height: "32px" }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                </div>
                <div>
                    <div onClick={toggleDropdown}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "32px", height: "32px" }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                {isOpen && (
                    <div className="absolute right-4 mt-2 bg-white shadow-lg rounded border" ref={dropdownRef}>
                      <ul>
                        <li className="px-5 pt-2 py-1 hover:bg-gray-100 cursor-pointer">Profile</li>
                        <li className="px-5 py-1 hover:bg-gray-100 cursor-pointer">Setting</li>
                        <li className="px-5  py-1 pb-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                      </ul>
                    </div>
                  )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;