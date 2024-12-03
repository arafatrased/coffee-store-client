import React from 'react';
import Header from "./Header.jsx";
import {useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;
    const handleUpdateCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updatedCoffee)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Updated successfully!`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <h2>Update Coffee</h2>
            <form onSubmit={handleUpdateCoffee} className="bg-[#F4F3F0] pb-8">
                <div className="flex flex-col gap-5">
                    <div className="md:flex w-8/12 mx-auto gap-4">
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            placeholder="name"
                            className="input input-bordered input-error w-full"/>
                        <input
                            type="text"
                            name="quantity"
                            defaultValue={quantity}
                            placeholder="quantity"
                            className="input input-bordered input-error w-full"/>
                    </div>
                    {/*form row*/}
                    <div className="md:flex w-8/12 mx-auto gap-4">

                        <input
                            type="text"
                            name="supplier"
                            defaultValue={supplier}
                            placeholder="supplier name"
                            className="input input-bordered input-error w-full"/>
                        <input
                            type="text"
                            name="taste"
                            defaultValue={taste}
                            placeholder="Taste"
                            className="input input-bordered input-error w-full"/>
                    </div>
                    <div className="md:flex w-8/12 mx-auto gap-4">

                        <input
                            type="text"
                            name="category"
                            defaultValue={category}
                            placeholder="Category"
                            className="input input-bordered input-error w-full"/>
                        <input
                            type="text"
                            name="details"
                            defaultValue={details}
                            placeholder="Details"
                            className="input input-bordered input-error w-full"/>
                    </div>
                    {/*form row*/}
                    <div className="md:flex w-8/12 mx-auto gap-4">

                        <input
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Photo URL"
                            className="input input-bordered input-error w-full"/>

                    </div>
                    <div className="md:flex w-8/12 mx-auto gap-4">

                        <input
                            type="submit"
                            placeholder="Photo URL"
                            value="Update Coffee"
                            className="input bg-[#D2B48C] input-bordered input-error w-full"/>

                    </div>

                </div>
                {/*form row*/}


            </form>
        </div>
    );
};

export default UpdateCoffee;