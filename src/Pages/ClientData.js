import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axiosStudioInstance from '../Config/axiosStudioConfig'
import URL from '../Config/config'

const ClientDataApi = () => {
    const [data, setdata] = useState({})

    const { clientid } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosStudioInstance.get(URL.GET_PUBLIC(clientid))
            setdata(response.data)
        }
        fetchData()
    }, [clientid])

    console.log(data);


    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex items-center gap-4 sm:gap-3 mt-5 flex-wrap'>
                    <div className='rounded-full px-4 py-1 border-gray-500 border'><div>All</div></div>

                    {data && data.folder && data.folder.length > 0 ? (
                        data.folder.map((single, index) => (
                            <NavLink to={`/${clientid}/client-data/${single.foldername}`}>
                                <div key={index} className='rounded-full px-4 py-1 border-gray-500 border'>
                                    <div>{single.foldername}</div>
                                </div>
                            </NavLink>
                        ))
                    ) : (
                        <div>No folders available</div>
                    )}

                    <div className='rounded-full px-4 py-1 border-gray-500 border'><div>Public</div></div>
                </div>
            </div>

            {data && data.folder && data.folder.length > 0 ? (
                data.folder.map((single, index) => (
            <div className='kjldsnlke'>
                <div className='flex justify-between'>
                    <p className='text-2xl py-2 px-4'>{single.foldername}</p>
                    <p className='text-md py-2 px-4'>Total Count : {single.count}</p>
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
                </div>
            </div>

        ))
    ) : (
        <div>No folders available</div>
    )}
        </div>
    )
}

export default ClientDataApi