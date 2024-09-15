import React from 'react'
import { NavLink } from 'react-router-dom'

const InvitesCardType = () => {
    return (
        <div>
            <div className='wedding-section'>
                <p className='text-xl py-2'>Wedding Cards</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-3">
                    <div className='item-card'>
                        <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 1</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card'>
                        <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 2</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card'>
                        <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 3</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card'>
                        <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 4</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                    <div className='item-card'>
                        <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 4</div>
                        <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <NavLink to={'/123456/invites/wedding-card'} >
                        <div className='mt-3 px-[140px] border bg-grey-100 text-xl py-4 hover:bg-grey-300'>View all</div>
                    </NavLink>
                </div>
            </div>

            <div className='wedding-section'>
                <p className='text-xl py-2'>Invitation Video</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-3">
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 1</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 2</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 3</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 4</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 4</div>
                </div>
                <div className='flex justify-center'>
                    <NavLink to={'/123456/invites/wedding-card'} >
                        <div className='mt-3 px-[140px] border bg-grey-100 text-xl py-4 hover:bg-grey-300'>View all</div>
                    </NavLink>
                </div>
            </div>

            <div className='wedding-section'>
                <p className='text-xl py-2'>Save The Date</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-3">
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 1</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 2</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 3</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 4</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 4</div>
                </div>
                <div className='flex justify-center'>
                    <div className='mt-3 px-[140px] border bg-grey-100 text-xl py-4'>View all</div>
                </div>
            </div>

            <div className='wedding-section'>
                <p className='text-xl py-2'>Birthday Invitation</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-3">
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 1</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 2</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 3</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 4</div>
                    <div class="bg-gray-200 p-4 h-[540px] rounded-md">Item 4</div>
                </div>
                <div className='flex justify-center'>
                    <div className='mt-3 px-[140px] border bg-grey-100 text-xl py-4'>View all</div>
                </div>
            </div>
        </div>
    )
}

export default InvitesCardType