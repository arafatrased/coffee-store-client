
import {useLoaderData} from "react-router-dom";
import Header from "./Header.jsx";
import Swal from "sweetalert2";
import {useState} from "react";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers);


    const handleUserDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`,{
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingUser = users.filter(user=> user._id !== id);
                            setUsers(remainingUser);
                        }
                    })
            }
        });

    }

    return (
        <div>
            <Header></Header>
            <h2 className="text-5xl text-center my-8">Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User Creation Time</th>
                        <th>User Last Login</th>
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>

                                <td>
                                    <button onClick={() => handleUserDelete(user._id)} className="btn">X</button>
                                    <button className="btn">Edit</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;