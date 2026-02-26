import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const[visited, setVisited]=useState(false)
    const {name, flags, population, area}= country;

    // console.log(country)

    const handleVisite=(country)=>{
        console.log( country);
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited && 'country-visited'}`}>
        {/* <div style={{"border":"2px solid green"}}> */}
        <div className='imgdiv'>

            <img src={flags.flags.png} alt={flags.flags.alt} />
        </div>
            <h3>Name: {name.common} </h3>
            <p>Population : {population.population}</p>
            <p>Area: {area.area}, {area.area>300000?"Big Country":"Small Country"}</p>
            <p>{visited?"Visited":"Not Visited"}</p>
            <button onClick={()=>handleVisite(name.common)}>{visited?"Visited":"Not Visited"}</button>
        </div>
    );
};

export default Country;