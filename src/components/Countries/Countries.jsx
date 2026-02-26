import { use } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const data= use(countriesPromise);
const countries= data.countries;
    return (
        <div>
            All Countries: {countries.length}
            <div className="countries">

            {countries.map((country,index)=><Country key={index} country={country}/>) }
            {/* {countries.map(country=><Country key={country.name.official} country={country}/>) } */}
            </div>
        </div>
    );
};

export default Countries;