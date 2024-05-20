import React, { useState } from 'react';

const HouseForm = () => {
  const [house, setHouse] = useState({
    address: '',
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
  });

  const handleChange = (e) => {
    setHouse({
      ...house,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to save the house data
    console.log(house);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={house.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bedrooms:</label>
        <input
          type="number"
          name="bedrooms"
          value={house.bedrooms}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bathrooms:</label>
        <input
          type="number"
          name="bathrooms"
          value={house.bathrooms}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={house.price}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add House</button>
    </form>
  );
};

export default HouseForm;