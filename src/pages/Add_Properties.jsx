import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'house',
    category: 'sale',
    bedrooms: 0,
    bathrooms: 0,
    size: 0,
    location: '',
    images: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      images: [...formData.images, e.target.files[0]],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to save the property to the backend
    console.log(formData);
  };

  return (
    <section className="add-property">
      <h1 className="heading">add new property</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="flat">Flat</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size (sq ft)</label>
          <input
            type="number"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Images</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleImageUpload}
            required
          />
          <div className="image-preview">
            {formData.images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
                <button
                  type="button"
                  className="remove-image"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      images: formData.images.filter((_, i) => i !== index),
                    })
                  }
                >
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="btn">
          Add Property
        </button>
      </form>
    </section>
  );
};

export default AddProperty;