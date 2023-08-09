import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// I think this is where I want to fetch my data because it isn't needed in the header component. Then I want to map it inside the Plant List

function PlantPage() {

  const [plantArray, setPlantArray] = useState([])

  useEffect( () => {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(plant => setPlantArray(plant)) // I'll want to take the plantsArray I receive and run them through the map function inside PlantList [soooo, setting the variable state to the data coming in works----interesting, don't fully understand that]
  },[] )

  function handleNewPlant(newPlant) {
    setPlantArray( [newPlant,...plantArray] )
  }

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/> 
      <Search /> 
      <PlantList plantArray={plantArray}/>
    </main>
  );
}

export default PlantPage;
