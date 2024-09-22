import React, { useEffect, useState } from 'react'
import axiosInstance from '../Config/axiosConfig'
import URL from '../Config/config'
import { useParams } from 'react-router-dom'

const Transaction = ()=>{

    const {studiocode} = useParams()

    const [transaction, setTransaction] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axiosInstance.get(URL.GET_ADMIN_SINGLE_STUDIO_TRANSACTION(studiocode))
            console.log(response.data);
            
            setTransaction(response.data)
        }

        fetchData()
    }, [studiocode])

    return(
        <div className='flex justify-center'>
            <div className='w-[1000px]'>
                <div>
                    <h3 className='my-3 text-bold text-2xl'>Transaction</h3>{transaction.map((data, index) => {
                        // Get the previous data, or null if it's the first item
                        const previousData = index > 0 ? transaction[index - 1] : null;

                        return (
                          <TransactionCard 
                            key={index} 
                            data={data} 
                            previousData={previousData}
                          />
                        );
                      })}
                </div>
            </div>
        </div>
    )
}

const TransactionCard = ({ data }) => {

    const dateobject = new Date(data.createdAt);
    const formattedDate = dateobject.toISOString().split('T')[0]; 
    const formattedTime = dateobject.toTimeString().split(' ')[0];

    return (
        <div className={`border rounded-md shadow py-2 px-3 mb-3 ${data.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
            <div className='flex justify-between'>
                <p>{`${Math.abs(data.amount)} tokens have been ${data.type}ed for ${(data.from).toUpperCase()} `}</p>
                <h3><span className='px-2 text-center py-1 bg-orange-300 rounded-full mr-3'>Token : {data.walletamount} </span>| {formattedDate} | {formattedTime} </h3>
            </div>
        </div>
    );
};

export default Transaction