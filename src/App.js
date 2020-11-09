import React, { useState } from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import employees from "./data/friends.json";

function App() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
    const [ data, setEmployees ] = useState(employees);

    function handleSearchTerm(event)  {
        setSearchTerm(event.target.value)
    }

    function handleSortByName() {
        // sort array ascending or descending by first name
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSorted(false);
        }
    }



    // the filteredEmployees variable only stores employee names that start with with the matching string you type
    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Header/>
            <Container>
                <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
                <p className="mb-16 text-md">Search for an employee or sort by Name or Category.</p>
                {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                <Search
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                    // handleSortByDept={handleSortByDept}
                />
                {/* the employees array gets the filteredEmployees data via the data prop */}
                <CardList data={filteredEmployees}/>
                <Footer/>
            </Container>
        </div>
    )
}

export default App;