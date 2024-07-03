import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('formData'));
    if (storedUsers) {
      const user = storedUsers.find((user) => user.userId === userId);
      if (user) {
        setUserData(user);
      } else {
        console.error("User not found with ID:", userId);
      }
    } else {
      console.error("Error loading user data from local storage.");
    }
  }, [userId]);

  return (
    <div className="container mx-auto mt-8">
      {userData ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2" colSpan="2">User Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2"><strong>ID:</strong> {userData.userId}</td>
              <td className="px-4 py-2"><strong>Name:</strong> {userData.name}</td>
            </tr>
            <tr>
              <td className="px-4 py-2"><strong>City:</strong> {userData.city}</td>
              <td className="px-4 py-2"><strong>Phone Number:</strong> {userData.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetail;
