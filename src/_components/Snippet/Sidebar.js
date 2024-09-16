import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, sendOpenStatus }) => {

    return (

        <div className={`fixed top-0 ${isOpen ? "left-0 w-64" : "-left-full w-0"} h-screen bg-gray-800 p-5 pt-8 z-20 transition-all duration-300 overflow-hidden`} style={{ borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }}
        >
            {/* Toggle Button */}
            {isOpen && (
                <button className="absolute right-2 px-3 text-sm text-white top-2 bg-gray-800 border border-gray-700 rounded-full p-1" onClick={() => sendOpenStatus(false)} > Close </button>
            )}

            {/* Sidebar content */}
            {isOpen && (
                <div>
                    <div className="flex items-center gap-x-4 mt-3">
                        <div className="bg-blue-500 w-10 h-10 rounded-full"></div>
                        <h1 className="text-white font-medium text-2xl">Studio Hub</h1>
                    </div>

                    {/* Navigation */}
                    <ul className="pt-6">
                        <NavLink to={'/'} className={({isActive , isPending})=>{
                            return isActive ? "bg-gray-700" : isPending ? "inherit" : "";
                        }}>
                            <li className="flex items-center gap-x-4 p-2 hover:bg-gray-700 rounded-md cursor-pointer text-white" onClick={()=> sendOpenStatus(false)}>
                                <span className="text-lg">🏠</span>
                                <span>Home</span>
                            </li>
                        </NavLink>
                        <li className="flex items-center gap-x-4 p-2 hover:bg-gray-700 rounded-md cursor-pointer text-white">
                            <span className="text-lg">🔍</span>
                            <span>Search</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
