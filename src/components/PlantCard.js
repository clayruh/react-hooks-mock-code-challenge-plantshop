import React, {useState} from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)

  function handleStock() {
    setInStock(!inStock)
  }

  // creating a DELETE doesn't require the state to be updated, BUT we do need to write a function where the data is coming through to plantArray.filter( plant => plant.id !== deletedPlant.id ) aka filter for everything BUT the object that was clicked on
  function deletePlant() {
    const OPTIONS = { method: 'DELETE' }
    fetch(`http://localhost:3000/plants/${plant.id}`, OPTIONS)
    .then(res => res.json())
    .then(plant => console.log(plant))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={handleStock} className="primary">In Stock</button> // Create a ternary here that toggles between "In Stock" : "Sold Out" depending on the state. If I wanted it to persist, I'd add a PATCH into the handleStock() right?
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <br/>
      <button onClick={deletePlant} style={{background: 'red', color: 'white'}}>Throw Away</button>
    </li>
  );
}

export default PlantCard;
