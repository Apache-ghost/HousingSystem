//import { props } from "./list";
import "./Card.css";
import React from 'react'

function Card({props}) {
  const listitems = props.map((prop) => (
    <div className="card" key={prop.property_id}>
      <img className="card-img" src={`http://127.0.0.1:5000${prop.image}`} alt="House Picture"></img>
      <p className="card-text">{prop.cost} FCFA</p>
      <h2 className="card-title">{prop.location}</h2>
      <p className="card-text">{prop.category}</p>
      {/* <p className='card-text'>Description: {prop.description}</p>*/}
    </div>
  ));

  const proofs = [
    { id: 1, value: "20+", var: "Years in the industry" },
    { id: 2, value: "90%", var: "Customers satisfaction" },
    { id: 3, value: "10K", var: "Properties Sold" },
    { id: 4, value: "50+", var: "Country Served" },
  ];

  const socials = proofs.map((proof) => (
    <div className="social-card" key={proof.id}>
      <h2 className="socials-value">{proof.value}</h2>
      <p className="card-text">{proof.var}</p>
    </div>
  ));

  return (
    <>
      <div className="heading">
        <div className="title">
          <h1 className="heady">Explore Our Latest Properties</h1><br/>
          <p className="texty">
            See the latest uploaded properties in our platform
          </p>
        </div>

        <div className="search">
          <input type="text" placeholder="Search Location" />
          <button className="button">Search</button>
        </div>
      </div>

      <div className="property">{listitems}</div>

      <div className="socialProof">{socials}</div>
    </>
  );
}

export default Card;
