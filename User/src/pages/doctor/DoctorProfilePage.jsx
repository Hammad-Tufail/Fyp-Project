import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { useUser } from '../../context/UserContext';
import { userLogOut } from '../../services/auth.services';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userContext, setUserContext] = useUser();
  // State for the form fields (replace with actual data from your state management or API)
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "Select",
    specialization: "Select",
    ticketPrice: "0"
  });

  // Handler for form field changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };


  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(profile);
  };

  return (
    <div className="flex  h-screen  bg-gray-100">
      <div className="w-64 h-screen bg-white shadow-md">
        <div className="flex flex-col p-4">
          <Link to="/doctorprofile" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"> <button >Overview</button> </Link>
          <Link to="/appointmentspage" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"><button >Appointments</button> </Link>
          <Link to="/doctorprofilepage" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"><button >Profile</button> </Link>
          <button onClick={() => {
            userLogOut(userContext.token).then(
              (data) => {
                setUserContext(oldValues => {
                  return { ...oldValues, token: null }
                })
                navigate('/')
              }
            )
          }} className="py-2 mb-2 text-sm text-white bg-primaryColor hover:bg-gray-400">Logout</button>
        </div>
      </div>
      <div className="flex-1 p-10">
        {/* Notification Banner */}
        <div className="p-4 mb-6 text-yellow-800 bg-yellow-200 border-l-4 border-yellow-600" role="alert">
          <p>To get approval please complete your profile. We'll review manually and approve within 3days.</p>
        </div>
        {/* Forms */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl mb-4 font-semibold text-gray-600">Profile Information</h2>
          <form style={{ 'height': '350px', overflow: 'scroll' }} onSubmit={handleSubmit}>
            {/* Existing fields */}
            {/* ... */}
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" placeholder="Name" type="text" name="name" value={profile.name} onChange={handleChange} required />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" placeholder="Email" type="email" name="email" value={profile.email} onChange={handleChange} required />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" placeholder="Number" type="tel" name="phone" value={profile.phone} onChange={handleChange} required />
            </div>

            {/* Bio Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                Bio*
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bio" placeholder="Write something about yourself" name="bio" value={profile.bio} onChange={handleChange} required />
            </div>

            {/* Gender Select */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Gender*
              </label>
              <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="gender" name="gender" value={profile.gender} onChange={handleChange} required>
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Specialization Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialization">
                Specialization*
              </label>
              <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="specialization" name="specialization" value={profile.specialization} onChange={handleChange} required>
                <option value="Select">Select</option>
                {/* Populate with actual specializations */}
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Neurology">Neurology</option>
                <option value="Neurology">Neurology</option>
                <option value="Neurology">Neurology</option>
                <option value="Neurology">Neurology</option>
                {/* ... other specializations */}
              </select>
            </div>

            {/* Ticket Price Input */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticketPrice">
                Ticket Price*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ticketPrice" type="number" name="ticketPrice" value={profile.ticketPrice} onChange={handleChange} required />
            </div>
            {/* Qualifications Heading */}
            <h3 className="text-lg mb-4 font-semibold text-gray-600">Qualifications</h3>
            <div style={{ display: 'flex' }}>

              {/* Starting Date Input */}
              <div className="flex-1 mb-4 mr-4 ml-4  ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startingDate">
                  Starting Date*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startingDate" type="date" name="startingDate" onChange={(e) => handleDateChange('startingDate', e.target.value)} required />
              </div>

              {/* Ending Date Input */}
              <div className="flex-1 mr-4 ml-4 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endingDate">
                  Ending Date*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="endingDate" type="date" name="endingDate" onChange={(e) => handleDateChange('endingDate', e.target.value)} required />
              </div>
            </div>
            <div style={{ display: 'flex' }}>

              {/* Degree Input */}
              <div className="mb-4 mr-4 ml-4 flex-1 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
                  Degree*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="degree" type="text" name="degree" placeholder="Degree" onChange={handleChange} required />
              </div>

              {/* University Input */}
              <div className="mb-4 mr-4 ml-4  flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="university">
                  University*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="university" type="text" name="university" placeholder="University" onChange={handleChange} required />
              </div>
            </div>

            {/* Experience Heading */}
            <h3 className="text-lg mb-4 font-semibold text-gray-600">Experience</h3>

            {/* Starting Date Input */}
            <div style={{ display: 'flex' }}>

              <div className="mb-4 mr-4 ml-4  flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startingDate">
                  Starting Date*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startingDate" type="date" name="startingDate" onChange={(e) => handleDateChange('startingDate', e.target.value)} required />
              </div>

              {/* Ending Date Input */}
              <div className="mb-4 mr-4 ml-4  flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endingDate">
                  Ending Date*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="endingDate" type="date" name="endingDate" onChange={(e) => handleDateChange('endingDate', e.target.value)} required />
              </div>
            </div>
            <div style={{ display: 'flex' }}>

              {/* Position Input */}
              <div className="mb-4 mr-4 ml-4  flex-1 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
                  Position*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="position" type="text" name="position" placeholder="Position" onChange={handleChange} required />
              </div>

              {/* Hospital Input */}
              <div className="mb-4 mr-4 ml-4  flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hosptial">
                  Hosptial*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="hosptial" type="text" name="hosptial" placeholder="Hosptial" onChange={handleChange} required />
              </div>
            </div>

            {/* Timeslot Input */}


            <div className="flex items-center space-x-4 mb-6">
              <div>
                <label htmlFor="day" className="block text-sm font-medium text-gray-700">Day*</label>
                <select
                  id="day"
                  name="day"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue="Saturday"
                >
                  {/* Populate with days of the week */}
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                  {/* ... other days */}
                </select>
              </div>
              <div>
                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Starting Time*</label>
                <input
                  id="startTime"
                  name="startTime"
                  type="time"
                  className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div>
                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">Ending Time*</label>
                <input
                  id="endTime"
                  name="endTime"
                  type="time"
                  className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="flex space-x-2">
                <IoIosAddCircleOutline className="text-2xl text-indigo-500 cursor-pointer" />
                <IoIosRemoveCircleOutline className="text-2xl text-red-500 cursor-pointer" />
              </div>
            </div>


            {/* Submit Button */}
            <button className="bg-primaryColor hover:bg-primaryDarkColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Update Profile
            </button>
          </form>
        </div>

      </div>



    </div>
  );
}

export default ProfilePage;
