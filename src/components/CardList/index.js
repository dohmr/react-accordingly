import React from "react";
import Card from "../Card";


function CardList ({ data }) { // another fancy destructuring to avoid typing props.data.map down below
    return (
        data.map(employee => (
            <Card
                key={employee.id}
                image={employee.image}
                name={employee.name}
                dept={employee.occupation}
                email={employee.location}
                phone={employee.phone}
            />
            ))
    )
}

export default CardList;