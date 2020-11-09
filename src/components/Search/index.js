import React from "react";

function Search({ onSearch, searchTerm, handleSortByName }) { 
    return (
        <div>
            <div className="md:mb-0 mb-4">
                <button onClick={handleSortByName} >Name</button>
               
            </div>
            <form>
                <p>Search</p>
                <input
                    value={searchTerm}
                    onChange={onSearch} 
                    type="text"
                    placeholder="search employee"/>
            </form>
        </div>
    )
}

export default Search;