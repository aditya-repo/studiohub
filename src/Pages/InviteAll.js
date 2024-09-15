import React from 'react'
import { NavLink } from 'react-router-dom'

const InviteAllCard = () => {
    return (
        <div>

            <div className='p-4'>
                <p>Home {' > '} Invites {' > '} Wedding Card</p>
            </div>

            <div className='wedding-section'>
                <p className='text-xl py-2 px-4'>Wedding Cards</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 py-3">
                    <NavLink to={'/123456/invites/wedding-card/1001'}>
                    
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 1</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    </NavLink>
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 2</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 3</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 4</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 4</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 4</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 4</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 4</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card mb-5'>
                        <div class="bg-gray-200 p-4 h-[540px]">Item 4</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InviteAllCard