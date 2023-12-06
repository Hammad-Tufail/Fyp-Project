import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userImg from '../../assets/images/avatar-icon.png';
import { Link } from "react-router-dom";
import { userLogOut, updateMyProfile } from "../../services/auth.services";
import { useUser } from '../../context/UserContext';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [userContext, setUserContext] = useUser();
    const isUserProfile = window.location.pathname.startsWith("/profile/user");

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const handleEdit = async (data) => {
        try {
            // Create a FormData object to handle both text and file data
            const formData = new FormData();
            formData.append('name', data.user.name);
            formData.append('email', data.user.email);
            formData.append('userPhoto', data.user.userPhoto);

            // Call the updateUserProfile function with the FormData object
            const response = await updateMyProfile(userContext.token, formData);

            // Assuming updateUserProfile returns updated user data
            setUserContext(oldValues => ({
                ...oldValues,
                name: response.name,
                email: response.email,
                // Add other fields you might get from the response
            }));

            closeModal();
        } catch (error) {
            console.error('Error updating profile:', error);
            // Handle error, show error message, etc.
        }
    };

    const handleLogout = () => {
        // Add your logout logic here
        console.log("Logout clicked");
        // Redirect to the home page after logout
        navigate("/login");
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleImageUpload = (event) => {
        event.preventDefault();
        // Logic to handle image upload
        // For simplicity, you can update the profile picture source with the selected file
        const file = event.target.querySelector('input[type="file"]').files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Update the profile picture with the new image
                // You can use the URL.createObjectURL method for a local preview
                const newProfilePicture = reader.result;
                // Add your logic to save the new profile picture to the server or state
                // For now, let's update the UI
                setUserContext(oldValues => {
                    return { ...oldValues, profilePicture: newProfilePicture }
                });
                closeModal(); // Close modal after updating the image
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className="container mx-auto px-5 py-10">
            <div className="w-64 h-screen bg-white shadow-md">
                <div className="flex flex-col p-4">
                    <Link to="/profile/user" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"> <button >View Profile</button> </Link>
                    <Link to="/profile/user/appointment" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200">
                        <button >Appointments</button> </Link>

                    <button onClick={() => {
                        userLogOut(userContext.token).then(
                            (data) => {
                                setUserContext(oldValues => {
                                    return { ...oldValues, token: null }
                                })
                                navigate('/login')
                            }
                        )
                    }} className="py-2 mb-2 text-sm text-white bg-primaryColor hover:bg-gray-400">Logout</button>

                </div>
            </div>
            <div className="w-full max-w-sm mx-auto">
                <div className="flex items-center mb-4">
                    <img
                        src={userContext.profilePicture || userImg} // Use userContext.profilePicture if available, else fallback to default
                        className="w-16 h-16 rounded-full cursor-pointer"
                        alt="User Profile"
                        onClick={openModal}
                    />
                </div>
                <form onSubmit={handleSubmit(handleEdit)}>
                    <div className="flex flex-col mb-6 w-full">
                        <label
                            htmlFor="name"
                            className="text-[#5a7184] font-semibold block"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", {
                                minLength: {
                                    value: 1,
                                    message: "Name length must be at least 1 character",
                                },
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                            })}
                            placeholder="Enter name"
                            className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"
                                }`}
                        />
                        {errors.name?.message && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col mb-6 w-full">
                        <label
                            htmlFor="email"
                            className="text-textColor font-semibold block"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", {
                                pattern: {
                                    value:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Enter a valid email",
                                },
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                            })}
                            placeholder="Enter email"
                            className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"
                                }`}
                        />
                        {errors.email?.message && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col mb-6 w-full">
                        <label
                            htmlFor="password"
                            className="text-textColor font-semibold block"
                        >
                            New Password (optional)
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            placeholder="Enter new password"
                            className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"
                                }`}
                        />
                        {errors.password?.message && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="bg-primaryColor text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        Update
                    </button>
                </form>

                {/* Conditionally render logout button and disable toggle menu */}
                {isUserProfile ? (
                    <button
                        className="bg-red-500 text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : null}
            </div>

            {isModalOpen && (
                <div className="modal fixed inset-0 flex items-center justify-center">
                    <form onSubmit={handleImageUpload} className="bg-white p-8 rounded-lg shadow-md">
                        <input type="file" accept="image/*" />
                        <div className="flex justify-between mt-4">
                            <button className='bg-primaryColor text-white font-bold text-lg py-2 px-4 rounded-lg' type="submit">Upload</button>
                            <button className='bg-red-500 text-white font-bold text-lg py-2 px-4 rounded-lg' onClick={closeModal}>Close</button>
                        </div>
                    </form>
                </div>

            )}
        </section>
    );
};

export default ProfilePage;
