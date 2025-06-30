import { ChevronLeft } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminUsers = () => {
  const {users} = useContext(AuthContext)
  const [loading, setLoading] = useState(true);

  // Sample data for demonstration
  useEffect(() => {
    
    setLoading(false);
  }, []);

  if (loading) return <div className="flex justify-center items-center h-40 text-lg font-medium">Loading users...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Users</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-blue-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.length === 0 && (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">No users found.</td>
              </tr>
            )}
            {users.map(user => (
              <tr key={user.id || user._id} className="hover:bg-blue-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={
                      user.role === 'admin'
                        ? 'bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold'
                        : user.role === 'operator'
                        ? 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold'
                        : 'bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold'
                    }
                  >
                    {user.role === 'admin'
                      ? 'Admin'
                      : user.role === 'operator'
                      ? 'Flight Operator'
                      : 'User'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/" className=" flex items-center justify-center  mt-4 text-blue-500 hover:underline absolute top-0 right-60 p-4">
        <ChevronLeft />
        Back
      </Link>
    </div>
  );
};

export default AdminUsers;
