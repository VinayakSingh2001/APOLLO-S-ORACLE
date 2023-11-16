import React from 'react';
import { Form, Input, message } from 'antd';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { signupUser } from '../../apicalls/users';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../Redux/bufferSlice';


const Signup = () => {
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try{
            dispatch(ShowLoading());
            const response = await signupUser(values);
            dispatch(HideLoading());
            if(response.success){
                message.success(response.message);
            }else{
                message.error(response.message);
            }


        }catch (error){
            dispatch(HideLoading());
            message.error(error.message);
        }
    }


    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center rounded bg-gray-100">
                <div className="bg-white p-8 sm:p-12 md:p-16 rounded shadow-md sm:w-96 md:w-112 lg:w-128 xl:w-144">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Signup</h1>
                    <Form onFinish={onFinish}>
                        <Form.Item name="name" rules={[{ required: true, message: 'Please enter your username' }]}>
                            <Input
                                type="text"
                                placeholder="Enter your username"
                            />
                        </Form.Item>
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
                            Signup
                        </button>
                    </Form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-leaf">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
