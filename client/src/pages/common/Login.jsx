import React from 'react';
import { Form, Input, message } from 'antd';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { loginUser } from '../../apicalls/users';

const Login = () => {
    const onFinish = async (values) => {
        try {
            const response = await loginUser(values);
            if (response.success) {
                message.success(response.message);
                localStorage.setItem('token', response.data);
                window.location.href = "/dashboard";
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center rounded bg-gray-100">
                <div className="bg-white p-8 sm:p-12 md:p-16 rounded shadow-md sm:w-96 md:w-112 lg:w-128 xl:w-144">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
                    <Form onFinish={onFinish}>
                        <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>

                            <Input
                                type="password"
                                placeholder="Enter your password"
                            />
                        </Form.Item>
                        <button
                            type="submit"
                            className="w-full bg-leaf text-white rounded p-2 hover:bg-dLeaf focus:outline-none"
                        >
                            Log In
                        </button>
                    </Form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-leaf">
                                Signup
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
