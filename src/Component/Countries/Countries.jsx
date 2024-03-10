import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCouintries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCouintries(data))
    }, [])
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {
                countries.map(country => <Country key={country.name.common} country={country}></Country> )
            }
        </div>
    );
};

export default Countries;