import { useState } from 'react';
import '../../index.css'

const Country = ({ country }) => {
    console.log((country));
    const { name, flags, population, region, ccn3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisit = () =>{
        setVisited(!visited)
        alert('you visited')
    }
    return (
        <div className='box1'>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population :{population}</p>
            <p>Region: {region}</p>
            <h5>code: {ccn3}</h5>
            <button onClick={handleVisit}>{visited? 'visited' : "visit"}</button>
        </div>
    );
    };

    export default Country;