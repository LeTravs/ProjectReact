import React, { useState } from 'react';
import './App.css';

const ObjectUpdateExample = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: 0,
    email: ''
  });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      [name]: value
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    // Here you can save the user info, e.g., to a backend server
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div className="container">
      <input
        type="text"
        name="name"
        value={userInfo.name}
        onChange={handleInputChange}
        placeholder="Name"
        disabled={!editMode}
      />
      <input
        type="number"
        name="age"
        value={userInfo.age}
        onChange={handleInputChange}
        placeholder="Age"
        disabled={!editMode}
      />
      <input
        type="email"
        name="email"
        value={userInfo.email}
        onChange={handleInputChange}
        placeholder="Email"
        disabled={!editMode}
      />
      {editMode ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <div className="user-info">
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Age:</strong> {userInfo.age}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
      </div>
    </div>
  );
};

export default ObjectUpdateExample;
