import React from 'react';
import './Residence.css';
import SearchBar from "../../components/SearchBar/SearchBar"
//import useResidence from '../../hooks/useResidence';
const Residence = () => {
   // const {data, isError, isLoading} = useResidencedence()
    //console.log(data)
    return (
        <div className = "wrapper">
            <div className="flexColCenter paddings innerWidth properties-container">
                <SearchBar/>
            </div>
        </div>
    )
}
export default Residence;