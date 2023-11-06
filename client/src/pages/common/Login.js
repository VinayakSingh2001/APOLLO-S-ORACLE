import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="min-h-screen flex items-center justify-center rounded bg-gray-100">
      <div className="bg-white p-8 sm:p-12 md:p-16 rounded shadow-md sm:w-96 md:w-112 lg:w-128 xl:w-144">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full border p-2 rounded "
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded "
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2"
              />
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-leaf text-white rounded p-2 hover:bg-dLeaf focus:outline-none"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">Don't have an account? <Link to="/register" className="text-leaf">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
