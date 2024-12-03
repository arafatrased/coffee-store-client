import React from 'react';
import Header from "./Header.jsx";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee= {name, quantity, supplier, taste, category, details, photo};

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${name} is Added successfully!`,
                    showConfirmButton: false,
                    timer: 1000
                });
            })
        form.reset();

    }


    return (
        <div className="bg-[#F4F3F0]">
            <Header></Header>
            <h2 className="w-8/12 text-4xl mx-auto my-5">Add New Coffee</h2>
            <form onSubmit={handleAddCoffee} className="bg-[#F4F3F0] pb-8">
                <div className="flex flex-col gap-5">
                    <div className="md:flex w-8/12 mx-auto gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered input-error w-full"/>
                        <input
                            type="text"
                            name="quantity"
                            placeholder="quantity"
                            className="input input-bordered input-error w-full"/>
                    </div>
                    {/*form row*/}
                    <div className="md:flex w-8/12 mx-auto gap-4">

                        <input
                            type="text"
                            name="supplier"
                            placeholder="supplier name"
                            className="input input-bordered input-error w-full"/>
                        <input
                            type="text"
                            name="taste"
                            placeholder="Taste"
                            className="input input-bordered input-error w-full"/>
                    </div>
                    <div className="md:flex w-8/12 mx-auto gap-4">

                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            className="input input-bordered input-error w-full"/>
                        <input
                            type="text"
                            name="details"
                            placeholder="Details"
                            className="input input-bordered input-error w-full"/>
                    </div>
                    {/*form row*/}
                    <div className="md:flex w-8/12 mx-auto gap-4">

                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered input-error w-full"/>

                    </div>
                    <div className="md:flex w-8/12 mx-auto gap-4">

                        <input
                            type="submit"
                            placeholder="Photo URL"
                            value="Add Coffee"
                            className="input bg-[#D2B48C] input-bordered input-error w-full"/>

                    </div>

                </div>
                {/*form row*/}


            </form>
        </div>
    );
};

export default AddCoffee;