import { useState } from "react";

const ContactForm = ({ existingProperty = {}, updateCallback = () => {} }) => {
  const [category, setCategory] = useState(existingProperty.category || "");
  const [cost, setCost] = useState(existingProperty.cost || "");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(existingProperty.location || "");
  const [description, setDescription] = useState(existingProperty.description || "");

  const updating = Object.keys(existingProperty).length !== 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", category);
    formData.append("cost", cost);
    formData.append("location", location);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    const url = `http://127.0.0.1:5000/${updating ? `update_property/${existingProperty.propertyId}` : `create_property`}`;
    const options = {
      method: updating ? "PUT" : "POST",
      body: formData,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        updateCallback();
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cost">Cost:</label>
        <input
          type="text"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">{updating ? "Update" : "Create"}</button>
    </form>
  );
};

export default ContactForm;
