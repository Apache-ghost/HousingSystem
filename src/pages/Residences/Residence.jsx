import React from 'react';
import './Residence.css';
import SearchBar from "../../components/SearchBar/SearchBar"
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import data from '../../utils/slider.json';
const Residence = () => {
   // const {data, isError, isLoading} = useResidencedence()
    //console.log(data)
    return (
        <div className = "wrapper">
            <div className="flexColCenter paddings innerWidth properties-container">
                <SearchBar/>
                <div className = "paddings flexCenter Residence">
                    {
                        data.map((card, i) => (<PropertyCard card={card} key = {i}/>))
                    }
                </div>
            </div>
        </div>
    )
}
export default Residence;