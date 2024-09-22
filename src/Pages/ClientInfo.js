import React, { useEffect, useState } from "react";
import BasicInfo from "../_components/Details/Basic-Info";
import UserAccess from "../_components/Details/User-Access";
import { useParams } from "react-router-dom";
import axiosInstance from "../Config/axiosConfig";
import URL from "../Config/config";
import axiosStudioInstance from "../Config/axiosStudioConfig";


const ClientCard = () => {

  const {clientid, studio} = useParams()

  const [studiodata, setStudiodata] = useState({})
  

  useEffect(()=>{
    const fetchData = async ()=>{
      if (studio === undefined) {
        const result = await axiosStudioInstance.get(URL.GET_SINGLE_CLIENT(clientid))
        setStudiodata(result.data)
        console.log(result.data);
        
        return 
      }
      const result = await axiosInstance.get(URL.GET_ADMIN_SINGLE_CLIENT(clientid))
        setStudiodata(result.data)
      return 
    }
    fetchData()
  }, [clientid, studio])

  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
          <div className="lg:col-span-6">
            <h3 className="text-xl pb-2">Basic Info</h3>
            <BasicInfo clientData={studiodata} />
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xl pb-2">User Access</h3>
            <UserAccess />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
