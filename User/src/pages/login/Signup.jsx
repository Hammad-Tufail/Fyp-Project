import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { useUser } from '../../context/UserContext';
import { userSignUp } from "../../services/auth.services";
import { useSnackbar } from 'notistack'

function Signup() {
  const navigate = useNavigate();
  const [userContext, setUserContext] = useUser();
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
    // userPhoto: null,
  });

  const signupFunction = async (formData) => {
    try {
      let response = await userSignUp(formData);
      if (response.status == 200) {

        let data = await response.data.data;
        console.log('returned data', data);
        setUserContext(oldValues => {
          return {
            ...oldValues,
            token: data.token,
            // userPhotoLink: data.user.userPhotoLink || '/images/admin/defaultProfile.jpg',
            name: data.user.name,
            email: data.user.email
          }
        })
        navigate('/');
      }
    }
    catch (error) {
      enqueueSnackbar(error.response.data.message, {
        variant: "error", anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }
      });
    }
  }

  const [errors, setErrors] = useState({});

  const getBackgroundHeight = () => {
    const h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (h * 70) / 100; // Adjust the percentage as needed
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (formData.name.trim() === "") {
      newErrors.name = "Name is Required";
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = "Invalid Email Format";
    }

    // Validate password length and complexity
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // Validate password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    // Validate phone number as 11-digit number
    const phoneRegex = /^\d{11}$/;
    if (!formData.number.match(phoneRegex)) {
      newErrors.number = "Invalid Phone Number (should be 11 digits)";
    }
    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (validateForm()) {
      signupFunction(formData);
    } else {
      console.log("Form validation failed");
    }
  };

  // const handleImageUpload = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setFormData({ ...formData, userPhoto: selectedImage });
  // };

  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ minHeight: getBackgroundHeight() }}
      >
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Sign Up as User
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                value={formData.number}
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.value })
                }
              />
              {errors.number && (
                <p className="text-red-500 mt-1">{errors.number}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {errors.password && (
                <p className="text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              {errors.confirmPassword && (
                <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
              )}
            </div>


            {/* Image Upload
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Upload Your Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                onChange={handleImageUpload}
              />
            </div> */}

            {/* Role Selection */}
            {/* ... (same as your existing code) */}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account? Login */}
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
