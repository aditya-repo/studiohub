import React, { useEffect, useState } from "react";
import Card from "../_components/Snippet/Card";
import axiosStudioInstance from "../Config/axiosStudioConfig";
import URL from "../Config/config";
import ClientTable from "../_components/Dashboard/ClientTable";
import ClinetSignup from "../_components/Dashboard/ClientSignup";

// const BASEURL = "http://localhost:4040/";

const Home = () => {

  const [isActive, setIsActive] = useState(true)
  const [dashboard, getDashboard] = useState()

  const data = [
    { id: 1, title: "Credit", value: 0 },
    { id: 2, title: "Total Client", value: 25 },
    { id: 3, title: "Current Client", value: 12 },
    { id: 4, title: "Expired Client", value: 13 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosStudioInstance.get(URL.GET_STUDIO_DASHBOARD())
        getDashboard(response.data)
      } catch (error) {
        console.error("Something went wrong", error)
      }
    }

    fetchData()
  }, [])

  console.log(dashboard);
  
  const closeForm = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((carddata) => (
          <Card data={carddata} key={carddata.id} />
        ))}
      </div>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400"></hr>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200 ">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold">Client Data</h3>
          <div className="py-2 px-5 bg-indigo-600 rounded-full text-white" onClick={closeForm}>{isActive ? ("Add Client"): ("Close Form")}</div>
        </div>
          <div className="overflow-x-auto">
              {isActive ? (<ClientTable />) : (<ClinetSignup />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;