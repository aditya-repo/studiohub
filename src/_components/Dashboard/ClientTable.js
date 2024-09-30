import { NavLink } from "react-router-dom"

const ClientTable = ({ client }) => {

  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-500 border-b">
        <tr>
        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[5%]">
          Sr No
        </th>
        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
          Client ID
        </th>
          <th className="py-3 px-6 text-left text-sm font-medium text-white">
            Project Name
          </th>
          <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
            Client Name
          </th>
          <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">
            Type
          </th>
          <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
            Date
          </th>
          <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">
            Venue
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
        {client.map((data, index) => (<ClientTableSnippet data={data} index={index} key={index} />))}
      </tbody>
    </table>
  )
}

const ClientTableSnippet = ({data, index}) => {

  const dateObject = new Date(data.createdAt);

// To get date in YYYY-MM-DD format
const day = dateObject.getDate();
const month = dateObject.toLocaleString('en-US', { month: 'short' });  // Short month name (e.g., 'Sep')
const year = dateObject.getFullYear();

// Format the date as "dd Mon, yyyy"
const date = `${day} ${month}, ${year}`;

  return (
    <tr>
      <td className="py-2 px-6 text-sm text-gray-700">{index + 1}</td>
      <td className="py-2 px-6 text-sm text-gray-700">{data.clientId}</td>
      <td className="py-2 px-6 text-sm text-gray-700">
        {data.occassionname}
      </td>
      <td className="py-2 px-6 text-sm text-gray-700">
        {data.clientname}
      </td>
      <td className="py-2 px-6 text-sm text-gray-700">{data.occassiontype}</td>
      <td className="py-2 px-6 text-sm text-gray-700">
        {date}
      </td>
      <td className="py-2 px-6 text-sm text-gray-700">
        {data.venue}
      </td>
      <td className="py-2 px-6 text-sm text-gray-700">
        {data.contact}
      </td>
      <td className="py-2 px-6 text-sm text-gray-700">
        <NavLink to={`/${data.clientId}/client-info`}>
          <button className="rounded-md py-2 ring-2 ring-red-300 ring-inset bg-red-800 px-4 text-white">
            View
          </button>
        </NavLink>
      </td>
    </tr>
  )
}

export default ClientTable