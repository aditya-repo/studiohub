import { NavLink } from "react-router-dom"

const ClientTable = ()=>{
    return(

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-500 border-b">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
              Client ID
            </th>
            <th className="py-3 px-6 text-left text-sm font-medium text-white">
              Project Name
            </th>
            <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">
              Type
            </th>
            <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
              Date
            </th>
            <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
              Client Name
            </th>
            <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">
              Address
            </th>
            <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">
              Contact
            </th>
            <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-6 text-sm text-gray-700">894390</td>
            <td className="py-2 px-6 text-sm text-gray-700">
              Punam Weds Pankaj
            </td>
            <td className="py-2 px-6 text-sm text-gray-700">Wedding</td>
            <td className="py-2 px-6 text-sm text-gray-700">
              12-06-2023
            </td>
            <td className="py-2 px-6 text-sm text-gray-700">
              Aditya Raj
            </td>
            <td className="py-2 px-6 text-sm text-gray-700">
              70 Feet Road, Patna - 800002
            </td>
            <td className="py-2 px-6 text-sm text-gray-700">
              7050020659
            </td>
            <td className="py-2 px-6 text-sm text-gray-700">
              <NavLink to={`/123456/client-info`}>
                <button className="rounded-md py-2 ring-2 ring-red-300 ring-inset bg-red-800 px-4 text-white">
                  View
                </button>
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    )
}

export default ClientTable