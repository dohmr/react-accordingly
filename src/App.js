import React, { useState } from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import employees from "./data/friends.json";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sorted, setSorted] = useState(false);
    const [data, setEmployees] = useState(employees);

    function handleSearchTerm(event) {
        setSearchTerm(event.target.value)
    }

    function handleSortByName() {
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSorted(false);
        }
    }
    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Header />
            <Container>
                <h1>Employee Directory</h1>
                <p>Sort by Name.</p>               
                <Search
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                />

                <CardList data={filteredEmployees} />
                <Footer />
            </Container>
        </div>
    )
}

export default App;