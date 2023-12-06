import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userImg from '../../assets/images/avatar-icon.png';

const ProfilePage = () => {
    const navigate = useNavigate();
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

    const submitHandler = (data) => {
        // Handle form submission here (add your logic)
        console.log("Form submitted with data:", data);
    };

    const handleLogout = () => {
        // Add your logout logic here
        console.log("Logout clicked");
        // Redirect to the home page after logout
        navigate("/homepage");
    };

    return (
        <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-screen bg-white shadow-md">
            <div className="flex flex-col p-4">
                <Link to="/doctor/doctorprofile" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"> <button >Overview</button> </Link>
                <Link to="/doctor/appointmentspage" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200">
                    <button >Appointments</button> </Link>
                    <Link to="/doctor/doctorprofilepage" className="py-2 mb-2 text-sm text-gray-700 rounded hover:bg-gray-200"><button >Profile</button> </Link>
                <button className="py-2 mb-2 text-sm text-white bg-primaryColor hover:bg-gray-400">Logout</button>

            </div>
        </div>
        
        <section className="container mx-auto px-5 py-10">
            <div className="w-full max-w-sm mx-auto">
                <div className="flex items-center mb-4">
                    <img
                        src={userImg}
                        className="w-16 h-16 rounded-full cursor-pointer"
                        alt="User Profile"
                    />
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
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
        </section>
        </div>
    );
};

export default ProfilePage;
