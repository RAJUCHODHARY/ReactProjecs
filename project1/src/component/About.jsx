import React, { useState } from 'react';
import "./css/About.css"
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

function About() {
  const [inputData, setInputData] = useState("");
  const [page, setPage] = useState(2);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
      setSearchResults([]);
    }

    setSearchResults([...searchResults, ...data.results]);
    setPage(page + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    handleSearch();
  };

  const handleShowMore = () => {
    handleSearch();
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input className='inputsser'
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Search images..."
        />
        <button className='inputsser' type="submit">Search</button>
      </form>

      <div className="search-results">
        {searchResults.map((result, index) => (
          <div key={index} className="search-result">
            <img src={result.urls.small} alt={result.alt_description} />
            {/* <a href={result.links.html} target="_blank" rel="noopener noreferrer">
              {result.alt_description}
            </a> */}
          </div>
        ))}
      </div>

      {page > 1 && (
        <button id="show-more-button" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default About;
