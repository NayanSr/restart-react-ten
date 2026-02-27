import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries]= useState([]);

    const handleVisitedCountries=(country)=>{
        if(visitedCountries.includes(country)){
            const removedArray= visitedCountries.filter(vc=>vc!=country)
            setVisitedCountries(removedArray)
        }
        else{const newCountries= [...visitedCountries, country];
        setVisitedCountries(newCountries)}
        



        alert(country);
        console.log(country)
    }
    const data= use(countriesPromise);
const countries= data.countries;
    return (
        <div>
            All Countries: {countries.length}
            <p>Total countries visited: {visitedCountries.length}</p>
            <ol>{visitedCountries.map((ct,index)=><li key={index}>{ct}</li>)}</ol>
            <div className="countries">

            {countries.map((country,index)=><Country key={index} country={country} handleVisitedCountries={handleVisitedCountries}/>) }
            {/* {countries.map(country=><Country key={country.name.official} country={country}/>) } */}
            </div>
        </div>
    );
};

export default Countries;