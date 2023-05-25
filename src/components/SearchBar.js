import React, { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <div className="search-bar-container">
        <form onSubmit={handleSearch}>
      <input
        className="input"
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="search-bar-button">Search</button>
    </form>
    </div>


    
  );
}

export default SearchBar;