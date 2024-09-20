import { useState } from "react";
import axiosInstance from "../../Config/axiosConfig";
import URL from "../../Config/config";

const SignupForm = ({onCloseForm})=>{


    const [formData, setFormData] = useState({
        name: '',
        userid: '',
        studiocode: '',
        password: '',
        description: '',
        location: '',
        contact1: '',
        contact2: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to the server)
        console.log('Form submitted:', formData);

        const response = await axiosInstance.post(URL.POST_STUDIO_SIGNUP(), {formData})

        console.log(response);
        

        onCloseForm(true);
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission
    //     console.log(formData);
    // };


    return(
        
        <div className="flex justify-center">

        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
            <div className='flex justify-between'>

                <h2 className="text-lg font-semibold mb-4">New Client</h2>
                <div className='px-2' onClick={onCloseForm}>&#x274c;</div>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-semibold">Studio Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="userid" className="mb-2 font-semibold">Username</label>
                    <input
                        type="text"
                        id="userid"
                        name="userid"
                        value={formData.userid}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="studiocode" className="mb-2 font-semibold">Studio Code</label>
                    <input
                        type="text"
                        id="studiocode"
                        name="studiocode"
                        value={formData.studiocode}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="mb-2 font-semibold">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="location" className="mb-2 font-semibold">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="contact1" className="mb-2 font-semibold">Contact Number 1</label>
                    <input
                        type="number"
                        id="contact1"
                        name="contact1"
                        value={formData.contact1}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="contact2" className="mb-2 font-semibold">Contact Number 2</label>
                    <input
                        type="number"
                        id="contact2"
                        name="contact2"
                        value={formData.contact2}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>


                <div className="flex flex-col col-span-2">
                    <label htmlFor="description" className="mb-2 font-semibold">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>


                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
    )
}

export default SignupForm