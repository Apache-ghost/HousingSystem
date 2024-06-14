import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AddProperty from "./pages/Add_Properties";
import Services from "./pages/Our_Service";
import StepsSection from "./pages/Simple_Steps";
import AddComment from "./pages/Add_Comment";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";
import axios from 'axios';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({});

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/properties");
      setProperties(response.data.properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      alert("Error fetching properties. Please try again later.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProperty({});
  };

  const openCreateModal = () => {
    setCurrentProperty({});
    setIsModalOpen(true);
  };

  const openEditModal = (property) => {
    setCurrentProperty(property);
    setIsModalOpen(true);
  };

  const createProperty = async () => {
    fetchProperties();
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <button onClick={openCreateModal}>Add New Property</button>
      {isModalOpen && (
        <AddProperty
          onClose={closeModal}
          onCreateProperty={createProperty}
          currentProperty={currentProperty}
        />
      )}
      <Services />
      <StepsSection />
      <AddComment />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
