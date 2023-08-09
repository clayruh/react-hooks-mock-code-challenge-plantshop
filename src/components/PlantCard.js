import React, {useState} from "react";

function PlantCard({plant}) {

  const [sold, setSold] = useState(false)

  function handleStock() {
    setSold(!sold)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button onClick={handleStock} className="primary">{sold ? "Sold Out" : "In Stock" }</button> // Create a ternary here that toggles between "In Stock" : "Sold Out" depending on the state. If I wanted it to persist, I'd add a PATCH into the handleStock() right?
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
