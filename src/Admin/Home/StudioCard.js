import React from 'react';
import { NavLink } from "react-router-dom";

const StudioCard = ({ studio }) => {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-500 border-b">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                            User ID
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                            Name
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-white">
                            Studio Code
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">
                            Password
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                            Location
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                            Phone
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {studio.map(data => (
                        <Tdatacard key={data._id} studio={data} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const Tdatacard = ({ studio }) => {
    console.log(studio);

    return (
        <tr>
            <td className="py-2 px-6 text-sm text-gray-700">{studio.userid}</td>
            <td className="py-2 px-6 text-sm text-gray-700">{studio.name}</td>
            <td className="py-2 px-6 text-sm text-gray-700">{studio.studiocode}</td>
            <td className="py-2 px-6 text-sm text-gray-700">{studio.password}</td>
            <td className="py-2 px-6 text-sm text-gray-700">{studio.location}</td>
            <td className="py-2 px-6 text-sm text-gray-700">{studio.contact1}</td>
            <td className="py-2 px-6 text-sm text-gray-700">
                <NavLink to={`/admin/${studio._id}/info`}>
                    <button className="rounded-md py-2 ring-2 ring-red-300 ring-inset bg-red-800 px-4 text-white">
                        View
                    </button>
                </NavLink>
            </td>
        </tr>
    );
}

export default StudioCard;
