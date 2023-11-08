import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    Logo
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-white">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="text-white">
                            Signup
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
