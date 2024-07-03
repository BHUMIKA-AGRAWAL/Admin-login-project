import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('formData'));
    if (storedUsers && Array.isArray(storedUsers)) {
      const filteredUsers = validateUsers(storedUsers);
      setUsers(filteredUsers);
    } else {
      console.error("Error loading user data from local storage.");
    }
  }, []);

  const validateUsers = (users) => {
    return users.filter(user => user.userId && user.name && user.name.trim() !== '');
  };

  const handleUserClick = (userId) => {
    if (userId) {
      navigate(`/admin/UserList/${userId}`);
    } else {
      console.error("Invalid user ID.");
    }
  };

  const handleDeleteUser = (userId) => {
    if (userId) {
      const updatedUsers = users.filter(user => user.userId !== userId);
      setUsers(updatedUsers);
      localStorage.setItem('formData', JSON.stringify(updatedUsers));
    } else {
      console.error("Invalid user ID.");
    }
  };

  const getBoxClassName = (user) => {
    
    if (user.name.startsWith('A')) {
      return 'special-box';
    }
    
    return 'regular-box';
  };

  return (
    <div className="container mx-auto mt-8">
      {users.map((user, index) => (
        <div key={user.userId} className={`box ${getBoxClassName(user)}`}>
          <div className="userId">{user.userId}</div>
          <div className="userName"><Link to={`/admin/UserList/${user.userId}`}>{user.name}</Link></div>
          
        </div>
      ))}
    </div>
  );
};

export default UserList;
