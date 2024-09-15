import React from 'react';

const Card = (props) => {
    const {title, value} = props.data
  return (
    <div className="p-4 bg-white shadow rounded-md border bg-gray-100 ">
        <div className='header text-xl'>{title}</div>
        <p className='text-right text-3xl'>{value}</p>
    </div>
  );
};

export default Card;
