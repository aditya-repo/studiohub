import React, { useEffect, useState } from "react";
import Card from "../_components/Snippet/Card";
import URL from "../Config/config";
import axiosInstance from "../Config/axiosConfig";
import SignupForm from "./Home/SignupForm";
import StudioCard from "./Home/StudioCard";

// const BASEURL = "http://localhost:4040/";

const AdminHome = () => {

    const [isToggled, setIsToggled] = useState(true)

    const [studio, setStudio] = useState([])


    const data = [
        { id: 1, title: "Add Client", value: 0 },
        { id: 2, title: "Total Client", value: 25 },
        { id: 3, title: "Current Client", value: 12 },
        { id: 4, title: "Expired Client", value: 13 },
    ];

    

    useEffect(() => {
        // Define the async function to fetch data
        const fetchData = async () => {
            try {
                // Make a GET request to the API
                const response = await axiosInstance.get(URL.GET_DASHBOARD_DETAILS());

                // Set the fetched data to the state
                
                setStudio(response.data)

            } catch (err) {
                // Handle errors
                console.log("Something went wrong")
            }
        };

        // Call the function to fetch data
        fetchData();
    }, []);

    const handleCloseForm = (child)=> {
        setIsToggled(child)
    }


    const closeForm = () => {
        setIsToggled(prevState => !prevState);
      };

    return (
        <div className="flex justify-center">
            <div className="w-[1500px]">

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

                                <h3 className="text-2xl font-bold">Studio Data</h3>
                                <div className="bg-indigo-600 text-white px-4 py-2 rounded-full" onClick={closeForm}> {isToggled ? 'Add New' : 'Close'}</div>
                            </div>

                            {isToggled ? (<StudioCard studio={studio} />)
                                :
                                (
                                    <SignupForm onCloseForm={handleCloseForm}  />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;