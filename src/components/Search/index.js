import React from "react";

function Search({ onSearch, searchTerm, handleSortByName }) { 
    return (
        <div className="md:flex justify-between my-6">
            <div className="md:mb-0 mb-4">
                <button onClick={handleSortByName} className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 mr-4 hover:bg-yellow-500 hover:text-white">Name</button>
               
            </div>
            <form>
                <p className="mb-16 text-md">Search</p>
                <input
                    value={searchTerm}
                    onChange={onSearch} 
                    className="shadow pl-5 rounded w-full py-1"
                    type="text"
                    placeholder="search employee"/>
            </form>
        </div>
    )
}

export default Search;