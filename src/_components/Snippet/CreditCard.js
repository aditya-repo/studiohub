import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Config/axiosConfig'
import URL from '../../Config/config'
import { useParams } from 'react-router-dom'

const CreditCard = () => {

    const [isactive, setIsactive] = useState(true)

    const { studiocode } = useParams()

    const [wallet, setWallet] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosInstance.get(URL.GET_ADMIN_SINGLE_STUDIO_CREDIT(studiocode))
            setWallet(response.data)
            console.log(response.data);
        }

        fetchData()
    }, [studiocode])

    const [formData, setFormData] = useState({ clientName: wallet.amount });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axiosInstance.post(URL.POST_ADMIN_SINGLE_STUDIO_CREDIT(studiocode), {formData})
      setWallet(response.data)
      activeStatus()
    };


  const activeStatus = () => {
    setIsactive(isactive => !isactive)
  }


    return (
        <div className="p-4 bg-white shadow rounded-md border bg-gray-100 ">
            <div className='flex justify-between items-center'>
                <div className='header text-xl'>Credit</div>
                <div className='bg-indigo-600 hover:bg-indigo-800 rounded-full px-5 py-1 text-white' onClick={activeStatus}>Update</div>
            </div>
            
            {isactive ? (<p className='text-center text-5xl mt-10 mb-10'>{wallet.amount}</p>): 
        
            <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Amount</label>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </form>

        
        }

        </div>
    )
}

export default CreditCard