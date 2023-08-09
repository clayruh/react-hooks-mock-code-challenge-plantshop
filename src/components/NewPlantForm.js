import React, {useState} from "react";

function NewPlantForm({handleNewPlant}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  function handleName(e) {
    setName(e.target.value)
  }
  function handleImage(e) {
    setImage(e.target.value)
  }
  function handlePrice(e) {
    setPrice(e.target.value)
  }

  function handleSubmit(e) {
    //this is where I want to POST the new data to the db.json. I'll need to eventually set the setPlantArray with the new data and use a spread operator

    const OPTIONS = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, image, price })
    }
    fetch('http://localhost:3000/plants', OPTIONS)
    .then(res => res.json())
    .then(data => handleNewPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleName} placeholder="Plant name" />
        <input type="text" name="image" value={image} onChange={handleImage} placeholder="Image URL" />
        <input type="number" name="price" value={price} onChange={handlePrice} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
