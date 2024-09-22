import React, { useEffect, useState } from "react";
import ClientCardList from "../_components/Snippet/ClientListCard";
import { NavLink, useParams } from "react-router-dom";
import AddClientForm from "../_components/Form/Add-client";
import axiosInstance from "../Config/axiosConfig";
import URL from "../Config/config";

// Use random data for demonstration purposes


const ClientList = () => {

  const [openForm, setOpenForm] = useState(false)

  const [formdata, setFormData] = useState([])

  const formStatus = () => {
    setOpenForm(openForm => !openForm)
  }

  const { studiocode } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(URL.GET_ADMIN_ALL_CLIENT(studiocode));
        setFormData(response.data);
        

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  }, [studiocode])


  return (
    <div className="flex justify-center">
      <div className="w-[1100px]">
        <div className="lg:col-span-3">
          <div className="flex justify-between mb-1">
            <h3 className="text-xl pb-2">Client List</h3>
            <div className="bg-indigo-600 rounded-full px-5 py-1 text-white hover:bg-indigo-800" onClick={formStatus}>{(!openForm) ? "Add Client" : "Close"}</div>
          </div>
          {openForm ? (
            <div className="flex justify-center">
              <AddClientForm onCloseForm={formStatus} />
            </div>
          ) : (
              formdata.map((data, index) => (
                <NavLink key={index} to={`/admin/${studiocode}/client/${data.clientId}/client-info`} >
                  <ClientCardList formdata={data} />
                </NavLink>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientList;
