import React from "react";

function Search() {

  // as the change happens in search, I want the filter to .contain() the string that matches the plant.name

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
