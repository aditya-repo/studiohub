import React, { useState } from 'react';

const UserAccess = () => {
  // State to store user access details
  const [users, setUsers] = useState([{ username: '7050020659', password: '123456' }]);
  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const [isAddingUser, setIsAddingUser] = useState(false); // To toggle form visibility

  // Function to handle input change for new user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Function to add a new user
  const handleAddUser = () => {
    if (newUser.username && newUser.password) {
      setUsers([...users, newUser]);
      setNewUser({ username: '', password: '' });
      setIsAddingUser(false); // Hide the form after adding
    }
  };

  // Function to remove a user by index
  const handleRemoveUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md mb-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl pb-2">User Login</h3>
        <button
          onClick={() => setIsAddingUser(true)}
          className="bg-green-600 px-3 py-2 text-sm text-white rounded-md hover:bg-green-800"
        >
          Add New
        </button>
      </div>

          {/* Conditional rendering of form for adding a new user */}
          {isAddingUser && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Add New User</h4>
                <input
                  type="text"
                  name="username"
                  value={newUser.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  className="border p-2 mb-2 rounded-md w-full"
                />
                <input
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="border p-2 rounded-md w-full"
                />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleAddUser}
                  className="bg-blue-600 px-3 py-2 text-white rounded-md hover:bg-blue-800"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsAddingUser(false)}
                  className="bg-gray-500 px-3 py-2 text-white rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

      <div className="mt-4 border-t border-gray-100">
        <div className="px-4 sm:px-6">
          <div className="flex px-4 py-3 border-b border-gray-200">
            <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">TV CODE :</dt>
            <dd className="text-sm leading-6 text-gray-700">ASDFB045</dd>
          </div>

          {/* Existing users list */}
          {users.map((user, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">User {index + 1}:</dt>
                <dd className="text-sm leading-6 text-gray-700">
                  [ {user.username} : {user.password} ]
                </dd>
              </div>
              <div className="cursor-pointer text-red-600" onClick={() => handleRemoveUser(index)}>
                &#x274c;
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default UserAccess;