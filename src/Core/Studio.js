import React, { useState } from 'react'
import Sidebar from '../_components/Snippet/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../_components/Snippet/Header'

const Studio = () => {
    const [isOpen, setIsOpen] = useState(false);

    const receiveOpenStatus = (isOpen)=>{
        setIsOpen(isOpen)
    }

    return (
        <div>

            <div className="relative flex">
                <Sidebar isOpen={isOpen} sendOpenStatus={receiveOpenStatus} />
                {!isOpen && (
                    <button
                        className="absolute top-2 left-5 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md z-30"
                        onClick={() => setIsOpen(true)}
                    >
                        Menu
                    </button>
                )}
            </div>
            <Header />
            <Outlet />

        </div>
    )
}

export default Studio