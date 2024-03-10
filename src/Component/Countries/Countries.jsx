import { useEffect } from "react";
import { useState } from "react";
import '../../index.css'
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="box">
            <h1>Countries: {countries.length}</h1>
            { 
            countries.map(country=> <Country key='' country={country}></Country>)
            }
        </div>
    );
};

export default Countries;