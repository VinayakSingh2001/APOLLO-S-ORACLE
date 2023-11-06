import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username : ", username);
    console.log("Password : ", password);
    console.log("Email : ", email);
    // console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 sm:p-12 md:p-16 rounded shadow-md sm:w-96 md:w-112 lg:w-128 xl:w-144">
        <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-leaf">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
