import React, { useEffect, useState } from 'react';
import heroImg01 from '../../assets/images/hero-img01.png';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { doctorLogOut, getMyProfile } from '../../services/auth.services';
import { useSnackbar } from 'notistack'

const DoctorProfile = () => {
    const navigate = useNavigate();
    // Replace with actual data fetched from an API or state management
    const [doctorProfile, setDoctorProfile] = useState({
        name: "Dylan Kaufman",
        reviews: 0,
        about: "Lorem ipsum dolor sit amet...",
        education: "Harvard University, MD",
        experience: "10 years at General Hospital",
        imageUrl: "/path-to-doctor-image.jpg", // Replace with actual image path
    });
    const [userContext, setUserContext] = useUser();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        getMyProfile(userContext.token).then((res) => (res.data.data.doctor)).then((doctor) => {
            setDoctorProfile(oldValues => (
                { ...oldValues, name: doctor.name, email: doctor.email, specialization: doctor.specialization, doctorPhotoLink: doctor.doctorPhotoLink }
            ))
        })
    }, [])
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 h-screen bg-white shadow-md">
                <div className="flex flex-col p-4">
                    <Link to="/doctorprofile" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"> <button >Overview</button> </Link>
                    <Link to="/appointmentspage" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200">
                        <button >Appointments</button> </Link>
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

            {/* Profile Content */}
            <div className="flex-1 p-10">
                {/* Alert box */}
                <div className="p-4 mb-6 text-yellow-800 bg-yellow-200 border-l-4 border-yellow-600" role="alert">
                    <p>To get approval please complete your profile. We'll review manually and approve within 3days.</p>
                </div>

                {/* Doctor Info Card */}
                <div className="p-6 bg-white rounded shadow-md">
                    <div className="flex items-center mb-4">
                        <img src={doctorProfile.doctorPhotoLink ? doctorProfile.doctorPhotoLink : heroImg01} alt="Profile" className="w-24 h-24 mr-4 rounded-full" />
                        <div>
                            <h2 className="text-xl font-semibold">{doctorProfile.name}</h2>
                            <p className="text-gray-600">⭐ {doctorProfile.reviews} (0)</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold">About of {doctorProfile.name}</h3>
                        <p className="mb-4 text-gray-700">{doctorProfile.about}</p>
                        <h3 className="mb-2 text-lg font-semibold">Specialization</h3>
                        <p className="mb-4 text-gray-700">{doctorProfile.specialization}</p>
                        <h3 className="mb-2 text-lg font-semibold">Experience</h3>
                        <p className="text-gray-700">{doctorProfile.experience}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorProfile;
