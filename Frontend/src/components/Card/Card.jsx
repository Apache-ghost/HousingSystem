import { props } from "./list";
import "./Card.css";

function Card() {
  const listitems = props.map((prop) => (
    <div className="card" key={prop.id}>
      <img className="card-img" src={prop.image} alt="Profile Picture"></img>
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
        <span className="title">
          <h1 className="heady">Explore Our Latest Properties</h1>
          <p className="texty">
            See the latest uploaded properties in our platform
          </p>
        </span>

        <span className="search">
          <input type="text" placeholder="Search Location" />
          <button className="button">Search</button>
        </span>
      </div>

      <div className="property">{listitems}</div>

      <div className="socialProof">{socials}</div>
    </>
  );
}

export default Card;
