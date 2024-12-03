import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex items-center justify-center w-full mx-auto gap-5 px-5 py-2 bg-gray-500">
            <Link to={`/`} className="btn">Home</Link>
            <Link to={`/addcoffee`} className="btn">Add Coffee</Link>
            <Link to={`/signup`} className="btn">SignUp</Link>
            <Link to={`/login`} className="btn">Login</Link>
            <Link to={`/users`} className="btn">Users</Link>
        </div>
    );
};

export default Header;