import React from "react";
import { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import '../../App.css';

const UserDashboard = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        photo: "",
      });
    
      const handleEditProfile = () => {
        // TODO: Implement edit profile functionality
      };
    
      const handleDeleteAccount = () => {
        // TODO: Implement delete account functionality
      };
    
      return (
        <div className="flex flex-col min-h-screen bg-gray-100">
          <header className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">User Dashboard</h1>
            <div className="flex items-center space-x-4">
              <HiOutlineUser className="w-6 h-6" />
              <MdSettings className="w-6 h-6" onClick={handleEditProfile} />
            </div>
          </header>
    
          <main className="flex-1 p-4">
            <section className="mb-4">
              <h3 className="font-semibold text-lg">My Appointments</h3>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Service</th>
                    <th>Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {/* TODO: Populate this table with the user's booked appointments */}
                </tbody>
              </table>
            </section>
    
            <section>
              <h3 className="font-semibold text-lg">Settings</h3>
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" onClick={handleEditProfile}>Edit Profile</a>
                </li>
                <li>
                  <a href="#" onClick={handleDeleteAccount}>Delete Account</a>
                </li>
              </ul>
            </section>
          </main>
        </div>
      );
    };
    

export default UserDashboard
