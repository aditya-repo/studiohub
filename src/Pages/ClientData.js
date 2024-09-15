import React from 'react'
import { NavLink } from 'react-router-dom'

const ClientDataApi = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex items-center gap-3 mt-5'>
                    <div className='rounded-full px-4 py-1 border-gray-500 border'><div>All</div></div>
                    <div className='rounded-full px-4 py-1 border-gray-500 border'><div>Barat</div></div>
                    <div className='rounded-full px-4 py-1 border-gray-500 border'><div>Varmala</div></div>
                    <div className='rounded-full px-4 py-1 border-gray-500 border'><div>Mandap</div></div>
                    <div className='rounded-full px-4 py-1 border-gray-500 border'><div>Video</div></div>
                    <div className='rounded-full px-4 py-1 border-gray-500 border'><div>Public</div></div>
                </div>

            </div>
            <div className='flex justify-between'>
            <p className='text-2xl py-2 px-4'>Baraat</p>
            <p className='text-md py-2 px-4'>Total Count : 450</p>

            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4 px-5 py-3">
                <NavLink to={'/123456/invites/wedding-card/1001'}>

                    <div className='item-card mb-3'>
                        <div class="bg-gray-200 p-4 h-[180px]">Item 1</div>
                        <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                    </div>
                </NavLink>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 2</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 3</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
                <div className='item-card mb-3'>
                    <div class="bg-gray-200 p-4 h-[180px]">Item 4</div>
                    <div className='flex justify-between items-center p-2'><p className='text-xs'>IMG_01_0001</p></div>
                </div>
            </div>
        </div>
    )
}

export default ClientDataApi