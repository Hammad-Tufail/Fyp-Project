import React, { useState } from 'react';

const SidePanel = () => {
  const [selectedDay, setSelectedDay] = useState(''); // State to store selected day
  const [startTime, setStartTime] = useState(''); // State to store selected start time
  const [endTime, setEndTime] = useState(''); // State to store selected end time
  const [isTimeError, setIsTimeError] = useState(false); // State to track time error

  const availableTimeSlots = {
    Sunday: '10:00am-5:00pm',
    Tuesday: '10:00am-5:00pm',
    Thursday: '10:00am-5:00pm',
  };

  // Function to handle day selection
  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setStartTime(''); // Reset selected start time when the day changes
    setEndTime(''); // Reset selected end time when the day changes
  };

  // Function to handle start time selection
  const handleStartTimeSelect = (time) => {
    setStartTime(time);
  };

  // Function to handle end time selection
  const handleEndTimeSelect = (time) => {
    setEndTime(time);
  };

  // Function to check if the selected times are within the available time slots
  const areTimesValid = () => {
    if (!selectedDay || !startTime || !endTime) {
      return false;
    }
    const selectedTimeSlot = `${startTime}-${endTime}`;
    return Object.values(availableTimeSlots).includes(selectedTimeSlot);
  };

  // Function to handle appointment booking
  const handleAppointmentBooking = () => {
    if (!areTimesValid()) {
      setIsTimeError(true);
    } else {
      // Perform appointment booking logic here
      // You can navigate to the payment screen or handle the booking process as needed
      setIsTimeError(false); // Reset the time error flag
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Appointment Fee</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          Rs 500
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text-[16px] font-semibold mt-0 text-headingColor">Available Time Slots:</p>
        <ul className="mt-3">
          {Object.entries(availableTimeSlots).map(([day, timeSlot]) => (
            <li
              key={day}
              className={`flex items-center justify-between mb-2 cursor-pointer ${selectedDay === day ? 'bg-gray-100' : ''
                }`}
              onClick={() => handleDaySelect(day)}
            >
              <p className="text-[15px] leading-6 text-textColor font-semibold">{day}</p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">{timeSlot}</p>
            </li>
          ))}
        </ul>
      </div>
      {selectedDay && (
        <div className="mt-[30px]">
          <p className="text-[16px] font-semibold mt-0 text-headingColor">
            Select Appointment Times:
          </p>
          <div className="flex mt-3">
            <input
              type="text"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Start Time"
              value={startTime}
              onChange={(e) => handleStartTimeSelect(e.target.value)}
            />
            <span className="mx-2">to</span>
            <input
              type="text"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="End Time"
              value={endTime}
              onChange={(e) => handleEndTimeSelect(e.target.value)}
            />
          </div>
          {isTimeError && (
            <p className="text-red-500 mt-2">Please select valid start and end times.</p>
          )}
        </div>
      )}
      <button
        className="btn px-2 w-full rounded-md mt-4"
        onClick={handleAppointmentBooking}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
