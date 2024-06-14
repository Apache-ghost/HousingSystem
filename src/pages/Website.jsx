import React from 'react'
import Hero from "../components/Hero";
import Contact from "../pages/contact/Contact"
import Navbar from "../components/Navbar";
import Property from "../pages/Property/Property";
import Value from "../pages/value/value";
import Layout from '../pages/Layout/Layout';
import Residence from './Residences/Residence';

const Website = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Property/>
            <Value/>
            <Contact/>
            <Residence/>
       </div>
    )
}
export default Website