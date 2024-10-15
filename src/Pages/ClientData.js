import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axiosStudioInstance from '../Config/axiosStudioConfig';
import URL from '../Config/config';

const ClientDataApi = () => {
  const [data, setData] = useState({});
  const { clientid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosStudioInstance.get(URL.GET_PUBLIC(clientid));
      setData(response.data);
    };
    fetchData();
  }, [clientid]);

  const totalimage = (data) => {
    return data.folder?.reduce((total, folder) => total + (folder.count || 0), 0) || 0;
};

  return (
    <div>
      {/* Navigation section */}
      <div className='flex justify-center'>
        <div className='flex items-center gap-4 sm:gap-3 mt-5 flex-wrap'>
          <div className='rounded-full px-4 py-1 border-gray-500 border'><div>All -  <small> {totalimage(data)} File</small></div></div>

          {data && data.folder && data.folder.length > 0 ? (
            data.folder.map((single, index) => (
              <NavLink to={`/${clientid}/client-data/${single.foldername}`} key={index}>
                <div className='rounded-full px-4 py-1 border-gray-500 border'>
                  <div>{single.foldername} - <small> {single.count} File</small></div>
                </div>
              </NavLink>
            ))
          ) : (
            <div>No folders available</div>
          )}

          <div className='rounded-full px-4 py-1 border-gray-500 border'><div>Public</div></div>
        </div>
      </div>

      {/* Grid section */}
      {data && data.folder && data.folder.length > 0 ? (
        data.folder.map((single, index) => (
          <div key={index} className='flex justify-center'>
          <div>
            <div className='flex justify-between'>
              <p className='text-2xl py-2 px-4'>{single.foldername}</p>
              <p className='text-md py-2 px-4'>Total Count : {single.count}</p>
            </div>

            {/* Responsive grid with fixed item size */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6  xl:grid-cols-8 gap-4 px-5 py-3'>
              {Array.from({ length: single.count }, (_, itemIndex) => (
                <div key={itemIndex} className='p-2'>
                <NavLink to={`/${clientid}/invites/wedding-card/${itemIndex + 1}`}>
                  <div className='item-card mb-3 w-[120px]'> {/* Fixed width */}
                    <div className="bg-gray-200 p-4 h-[170px] flex items-center justify-center">
                      {/* Placeholder for image */}
                      <span className="text-center text-xs">Item {itemIndex + 1}</span>
                    </div>
                    <div className='flex justify-between items-center p-2'>
                      <p className='text-xs'>IMG_{itemIndex + 1}_0001</p>
                    </div>
                  </div>
                </NavLink>
                </div>
              ))}
            </div>
            </div>
            </div>
        ))
      ) : (
        <div>No folders available</div>
      )}
    </div>
  );
};

export default ClientDataApi;
