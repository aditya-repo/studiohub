import React from 'react';

const ClientCardList = (props) => {
  return (
    <div className="p-4 bg-white shadow rounded-md border bg-gray-100 mb-3">
      <div className='flex justify-between items-center px-3'>
        <div>
          <h3>Client Name</h3>
          <p>Package</p>
          <p>Occasion Date</p>
        </div>
        <div>
          <h3>Venue</h3>
          <p>Occasion Name</p>
          <p>Occasion Type</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCardList;
