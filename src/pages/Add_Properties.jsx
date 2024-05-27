import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const AddProperty = ({ onClose, onCreateProperty, currentProperty }) => {
  const [formData, setFormData] = useState({
    description: currentProperty.description || '',
    cost: currentProperty.cost || '',
    category: currentProperty.category || 'sale',
    location: currentProperty.location || '',
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
      images: [...formData.images, ...e.target.files],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('description', formData.description);
    form.append('cost', formData.cost);
    form.append('category', formData.category);
    form.append('location', formData.location);
    formData.images.forEach(image => {
      form.append('image', image);
    });

    try {
      if (currentProperty.id) {
        await axios.put(`http://127.0.0.1:5000/update_property/${currentProperty.id}`, form);
      } else {
        await axios.post("http://127.0.0.1:5000/create_property", form);
      }
      onCreateProperty();
      onClose();
    } catch (error) {
      console.error("Error submitting property:", error);
      alert("Error submitting property. Please try again later.");
    }
  };

  return (
    <section className="add-property">
      <h1 className="heading">Add New Property</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleInputChange}
            required
          />
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
          {currentProperty.id ? "Update Property" : "Add Property"}
        </button>
      </form>
    </section>
  );
};

export default AddProperty;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProperty = ({ properties, setProperties }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     cost: '',
//     category: 'sale',
//     location: '',
//     images: [],
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageUpload = (e) => {
//     setFormData({
//       ...formData,
//       images: [...formData.images, e.target.files[0]],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData();
//     form.append('title', formData.title);
//     form.append('description', formData.description);
//     form.append('cost', formData.cost);
//     form.append('category', formData.category);
//     form.append('location', formData.location);
//     formData.images.forEach((image, index) => {
//       form.append('image', image);
//     });

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/properties', form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       const newProperty = response.data; // Assuming the backend returns the new property object
//       setProperties([...properties, newProperty]); // Add the new property to the properties list
//       setFormData({
//         title: '',
//         description: '',
//         cost: '',
//         category: 'sale',
//         location: '',
//         images: [],
//       }); // Reset the form data after submission
//     } catch (error) {
//       console.error('Error adding property', error);
//     }
//   };

//   return (
//     <section className="add-property">
//       <h1 className="heading">Add New Property</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="cost">Cost</label>
//           <input
//             type="number"
//             id="cost"
//             name="cost"
//             value={formData.cost}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="category">Category</label>
//           <select
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="sale">For Sale</option>
//             <option value="rent">For Rent</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="location">Location</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="images">Images</label>
//           <input
//             type="file"
//             id="images"
//             name="images"
//             multiple
//             onChange={handleImageUpload}
//             required
//           />
//         </div>
//         <button type="submit" className="btn">
//           Add Property
//         </button>
//       </form>
//     </section>
//   );
// };

// export default AddProperty;


// import React, { useState } from 'react';
// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Replace with your actual API URL

// const AddProperty = () => {
//   const [formData, setFormData] = useState({
//     category: '',
//     cost: '',
//     location: '',
//     description: '',
//     image: null,
//   });

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageUpload = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('category', formData.category);
//     formData.append('cost', formData.cost);
//     formData.append('location', formData.location);
//     formData.append('description', formData.description);
//     formData.append('image', formData.image);

//     try {
//       const response = await axios.post(`${API_URL}/create_property`, formData);
//       console.log('Property created:', response.data);
//       setSuccess(true);
//       setFormData({
//         category: '',
//         cost: '',
//         location: '',
//         description: '',
//         image: null,
//       });
//     } catch (error) {
//       console.error('Error creating property:', error);
//       setError(error.response.data.message || 'An error occurred while creating the property.');
//     }
//   };

//   const handleUpdate = async (propertyId) => {
//     try {
//       const formData = new FormData();
//       formData.append('category', formData.category);
//       formData.append('cost', formData.cost);
//       formData.append('location', formData.location);
//       formData.append('description', formData.description);
//       formData.append('image', formData.image);

//       const response = await axios.put(`${API_URL}/update_property/${propertyId}`, formData);
//       console.log('Property updated:', response.data);
//       setSuccess(true);
//       setFormData({
//         category: '',
//         cost: '',
//         location: '',
//         description: '',
//         image: null,
//       });
//     } catch (error) {
//       console.error('Error updating property:', error);
//       setError(error.response.data.message || 'An error occurred while updating the property.');
//     }
//   };

//   const handleDelete = async (propertyId) => {
//     try {
//       await axios.delete(`${API_URL}/delete_property/${propertyId}`);
//       console.log('Property deleted');
//       // Optionally, you can also update the UI to remove the deleted property
//     } catch (error) {
//       console.error('Error deleting property:', error);
//       setError(error.response.data.message || 'An error occurred while deleting the property.');
//     }
//   };

//   return (
//     <section className="add-property">
//       <h1 className="heading">Add New Property</h1>
//       {success && (
//         <div className="success-message">Property created successfully!</div>
//       )}
//       {error && (
//         <div className="error-message">Error: {error}</div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="cost">Cost:</label>
//           <input
//             type="number"
//             id="cost"
//             name="cost"
//             value={formData.cost}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label htmlFor="image">Image:</label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             onChange={handleImageUpload}
//           />
//         </div>
//         <button type="submit" className="btn">
//           Add Property
//         </button>
//       </form>
//     </section>
//   );
// };

// export default AddProperty;