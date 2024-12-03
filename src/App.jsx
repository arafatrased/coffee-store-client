

import Header from "./components/Header.jsx";
import CoffeeCard from "./components/CoffeeCard.jsx";
import {useLoaderData} from "react-router-dom";
import {useState} from "react";

function App() {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees);



  return (
    <>
        <Header></Header>
      <h1 className="text-5xl text-center my-8 font-bold">Expresso Emporium</h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                coffees.map((coffee,idx) => <CoffeeCard key={idx} coffees={coffees} setCoffees={setCoffees} coffee={coffee}/>)
            }

        </div>

    </>
  )
}

export default App
