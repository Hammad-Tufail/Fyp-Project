import React, { useContext, useState } from 'react';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { userSignIn } from '../../services/auth.services';
import { useSnackbar } from 'notistack'

function Login() {
  const navigate = useNavigate();
  const [userContext, setUserContext] = useUser();
  const { enqueueSnackbar } = useSnackbar();

  const signinFunction = async (event) => {
    try {
      let response = await userSignIn(
        {
          email: email,
          password: password
        });
      if (response.status == 200) {

        let data = await response.data.data;
        console.log(data);
        setUserContext(oldValues => {
          return {
            ...oldValues,
            token: data.token,
            userPhotoLink: data.user.userPhotoLink || '/images/admin/defaultProfile.jpg',
            name: data.user.name,
            email: data.user.email
          }
        })
        navigate('/profile/user');
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
  };

  const [role, setRole] = useState('');
  function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  function getBackgroundHeight() {
    let height = vh(100) - 60 - 64;
    return height;
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    console.log('Selected role:', role);
    // Replace this with your authentication logic.
    // Password validation
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else if (!/\d/.test(password) || !/[A-Z]/.test(password)) {
      setError('Password must contain at least one digit and one uppercase letter.');
    } else {
      // Perform authentication here.
      // You can add your authentication logic, such as calling an API or checking credentials.
      // If authentication is successful, you can navigate to the next page.
    }

    // For simplicity, we're just checking if the email and password are empty.
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      // Perform authentication here.
      // You can add your authentication logic, such as calling an API or checking credentials.
      // If authentication is successful, you can navigate to the next page.
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation using a regular expression.
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <div className="flex justify-center items-center"
        style={{ minHeight: getBackgroundHeight() }}>
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center mb-4">User Login</h1>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            onClick={signinFunction}
          >
            Login
          </button>
          <p className="text-center mt-4">
            Want to create an account? {' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
