import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function Signup() {
    function vh(percent) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (percent * h) / 100;
    }
    function getBackgroundHeight() {
        let height = vh(100) - 60 - 64;
        return height;
    }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate first name and last name (only alphabets allowed)
    const nameRegex = /^[a-zA-Z]+$/;
    if (!formData.firstName.match(nameRegex)) {
      newErrors.firstName = 'First name must contain only alphabets';
    }
    if (!formData.lastName.match(nameRegex)) {
      newErrors.lastName = 'Last name must contain only alphabets';
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate password length and complexity
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    // Validate password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Send the form data to your backend or perform further actions
      console.log('Form data:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <>
    
    <div className="flex items-center justify-center "
    style={{ minHeight: getBackgroundHeight()}}>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
            
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600 text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600 text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600 text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Signup As:</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  value="doctor"
                  checked={formData.role === 'doctor'}
                  onChange={() => setFormData({ ...formData, role: 'doctor' })}
                />
                Doctor
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  value="admin"
                  checked={formData.role === 'admin'}
                  onChange={() => setFormData({ ...formData, role: 'admin' })}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  value="user"
                  checked={formData.role === 'user'}
                  onChange={() => setFormData({ ...formData, role: 'user' })}
                />
                User
              </label>
            </div>
          </div>


          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account? Login */}
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/homepage/Login" className="text-blue-500 hover:underline">
          Login
        </Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Signup;
