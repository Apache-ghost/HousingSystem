/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ContactList = ({properties, updateProperty, updateCallback}) => {
    const onDelete = async (property_id) => {
        try{
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_property/${property_id}`, options)
            if (response.status === 200){
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error){
            alert(error)
        }
    }

    return (
    <div>
        <h2>Properties</h2>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Cost</th>
                    <th>Image</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {properties.map((property) => (
                    <tr key={property.property_id}>
                        <td>{property.category}</td>
                        <td>{property.cost}</td>
                        <td>
                            {property.image && <img src={`http://127.0.0.1:5000${property.image}`} alt="Property" width="100" />}
                        </td>
                        <td>{property.location}</td>
                        <td>{property.description}</td>
                        <td>
                            <button onClick={() => updateProperty(property)}>Update</button>
                            <button onClick={() => onDelete(property.propertyId)}>Delete</button>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default ContactList
