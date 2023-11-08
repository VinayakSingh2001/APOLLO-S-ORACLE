import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../apicalls/users';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async ({ email, username, password, values }) => {
        try {
            const response = await registerUser({ email, username, password, values });
            if (response.success) {
                toast.success('Registration Successful', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        } catch (error) {
            toast.error(error);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 sm:p-12 md:p-16 rounded shadow-md sm:w-96 md:w-112 lg:w-128 xl:w-144">
                <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">Username</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}



                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.values)}

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}



                        />
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
                        Already have an account?{' '}
                        <Link to="/login" className="text-leaf">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;
