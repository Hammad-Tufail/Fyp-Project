import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doctorLogOut } from '../../services/auth.services';
import { useUser } from '../../context/UserContext';

const AppointmentsPage = () => {
  const navigate = useNavigate();
  const [userContext, setUserContext] = useUser();

  // Dummy data for the appointments
  const appointments = [
    { name: "Alice Smith", gender: "Female", payment: "Insurance", price: "$200", bookedOn: "2023-10-01" },
    { name: "Bob Johnson", gender: "Male", payment: "PayPal", price: "$250", bookedOn: "2023-10-05" },
    { name: "Charlie Daniels", gender: "Male", payment: "Credit Card", price: "$150", bookedOn: "2023-10-10" },
    { name: "Dana Lee", gender: "Female", payment: "Cash", price: "$180", bookedOn: "2023-10-15" },
    // ... more appointments
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 h-screen bg-white shadow-md">
        <div className="flex flex-col p-4">
          <Link to="/doctorprofile" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"> <button >Overview</button> </Link>
          <Link to="/appointmentspage" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"><button >Appointments</button> </Link>
          <Link to="/doctorprofilepage" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"><button >Profile</button> </Link>
          <button onClick={() => {
            doctorLogOut(userContext.token).then(
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

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Notification Banner */}
        <div className="p-4 mb-6 text-yellow-800 bg-yellow-200 border-l-4 border-yellow-600" role="alert">
          <p>To get approval please complete your profile. We'll review manually and approve within 3days.</p>
        </div>

        Appointments Table
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            {/* Table Head */}
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Booked On
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {appointment.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{appointment.gender}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{appointment.payment}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{appointment.price}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{appointment.bookedOn}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppointmentsPage;
