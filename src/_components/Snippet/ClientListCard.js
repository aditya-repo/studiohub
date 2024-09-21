import React from 'react';

const ClientCardList = ({formdata}) => {
  console.log(formdata);
  
  return (
    <div className="p-4 bg-white shadow rounded-md border bg-gray-100 mb-3">
      <div className='flex justify-between items-center px-3'>
        <div>
          <h3>{formdata.occassionname}</h3>
          <p>{formdata.occassiontype}</p>
          <p>{formdata.address}</p>
        </div>
        <div>
          <h3>{formdata.clientname}</h3>
          <p>{formdata.contact}</p>
          <p>{formdata.venue}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCardList;
