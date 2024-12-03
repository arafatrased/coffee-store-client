import React from 'react';
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const { _id, name, quantity, supplier, taste, category, details, photo} = coffee;
    const navigate = useNavigate();
    const showDetails = (id) =>{
        navigate(`/coffeedetails/${id}`);
    };

    const handleUpdate = (id) =>{
        navigate(`/updatecoffee/${id}`)
    }

    const handleDelete = id => {
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

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount>0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter((coffee) => coffee._id !== _id);
                            setCoffees(remaining);
                        }


                    })
            }
        });

    }
    return (
        <div className="card card-side bg-[#F4F3F0] flex">
            <figure>
                <img
                    className="p-4 rounded-2xl"
                    src={photo}
                    alt="Movie"/>

            </figure>
            <div className="flex flex-row ml-8 w-full items-center justify-between">
                <div className="flex-grow ">
                    <h2 className="card-title">Title: {name}</h2>
                    <p>{details}</p>
                    <p>Category: {category}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="flex flex-col gap-3 mr-5 justify-end">
                    <button onClick={()=>showDetails(_id)} className="btn">Details</button>
                    <button onClick={() => handleUpdate(_id)} className="btn">EDIT</button>
                    <button onClick={()=> handleDelete(_id)} className="btn">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;