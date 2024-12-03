import {useLoaderData} from "react-router-dom";
import Header from "./Header.jsx";


const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const {name, quantity, supplier, taste, category, details, photo} = coffee;
    return (
        <div>
            <Header></Header>

            <div className="p-10 w-10/12 mx-auto bg-[#F4F3F0] shadow-xl">
                <div className="w-full flex items-center justify-between">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>Description: {details}</p>
                        <p>Coffee Quantity Available: {quantity}</p>
                        <p>Suplier Name: {supplier}</p>
                        <p>Taste: {taste}</p>
                        <p>Category{category}</p>
                    </div>
                    <div>
                        <img src={photo} alt=""/>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;