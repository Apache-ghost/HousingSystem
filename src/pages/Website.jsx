import React from 'react'
import Hero from "../components/Hero";
import Contact from "../pages/contact/Contact"
import Navbar from "../components/Navbar";
import Property from "../pages/Property/Property";
import Value from "../pages/value/value";

const Website = () => {
    return(
        <div>
        <Navbar/>
        <Hero/>
        <Property/>
        <Value/>
        <Contact/>
       </div>
    )
}
export default Website