import React from "react";

 function Card({ name, image,job, home, phone}) { 
    return (
        <div className="card" width="10rem">
            <img
                style={{ maxWidth: "40px"}}
                className="card-img-top"
                src={image}
                alt="employee"
            />
            <p>{name}</p>
            <p>{job}</p>
            <p>{home}</p>
            <p>{phone}</p>
        </div>
    )
}

//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
export default Card;