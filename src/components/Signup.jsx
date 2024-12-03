import React, {useContext} from 'react';
import Header from "./Header.jsx";
import {AuthContext} from "../providers/AuthProvider.jsx";

const Signup = () => {
    const { createUser, setUser, setLoading } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                const createdAt = user.metadata.creationTime;
                const lastSignInTime=user.metadata.lastSignInTime;

                const newUser = {name, createdAt, lastSignInTime, email};
                setUser(user);
                setLoading(false);
                // save new user info to the database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.insertedId){
                            console.log('User Created Successfully!');
                        }
                    })
            })
            .catch(error => console.log(error));
        form.reset()

    }

    return (
        <div className="bg-[#F4F3F0] min-h-screen">
            <Header></Header>
            <h2 className="text-center text-5xl my-5">Signup</h2>
            <div className="card bg-base-100 w-6/12 mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required/>

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn text-xl btn-outline">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;