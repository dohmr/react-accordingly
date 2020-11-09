import React from "react";
import Card from "../Card";


function CardList ({ data }) { 
    return (
        data.map(employee => (
            <Card
                key={employee.id}
                image={employee.image}
                name={employee.name}
                job={employee.occupation}
                home={employee.location}
                phone={employee.phone}
            />
            ))
    )
}

export default CardList;