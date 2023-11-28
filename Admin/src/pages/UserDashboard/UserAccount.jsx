import React, { useState } from 'react';

const UserAccount = () => {
  // Assuming the user data would be fetched from an API, we'll use useState for now.
  const [userData, setUserData] = useState({
    name: 'Muhibur Rahman',
    email: 'example@gmail.com',
    bloodType: 'O-',
    profilePicture: '/path-to-your-image.jpg', // Replace with the path to your user image
    bookings: [] // Assuming this would be an array of booking objects
  });

  // Handlers for Logout and Delete account that you would tie to your backend logic
  const handleLogout = () => {
    // Integrate with your backend logout functionality
    console.log('Logging out...');
  };

  const handleDeleteAccount = () => {
    // Integrate with your backend delete account functionality
    console.log('Deleting account...');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src={userData.profilePicture}
            alt="User"
          />
          <h1 className="mt-4 text-xl font-semibold text-gray-700">{userData.name}</h1>
          <p className="text-sm text-gray-500">{userData.email}</p>
          <p className="text-sm text-gray-500">Blood Type: {userData.bloodType}</p>
        </div>
        <div className="flex mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mr-2"
          >
            Logout
          </button>
          <button
            onClick={handleDeleteAccount}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Delete account
          </button>
        </div>
        <div className="flex mt-6 justify-between w-full">
          <button className="text-blue-500 hover:underline">My Bookings</button>
          <button className="text-blue-500 hover:underline">Profile Settings</button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          {userData.bookings.length === 0 ? 'You did not book any doctor yet!' : 'You have bookings.'}
        </p>
      </div>
    </div>
  );
};

export default UserAccount;
