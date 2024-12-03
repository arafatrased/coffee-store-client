import React, {useContext} from 'react';
import Header from "./Header.jsx";
import {AuthContext} from "../providers/AuthProvider.jsx";

const Login = () => {
    const { logInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // update last login time
                const lastSignInTime = user.metadata.lastSignInTime;
                const loginInfo = {email, lastSignInTime};
                fetch(`http://localhost:5000/users`,{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data =>{
                        console.log("sign in info updated in db",data);
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <Header></Header>
            <h2 className="text-center text-5xl my-8">Login</h2>
            <div className="card bg-base-100 w-6/12 mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary text-xl">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;