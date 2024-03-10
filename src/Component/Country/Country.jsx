import { useState } from 'react';
import '../../index.css'
const Country = ({country}) => {
    const {name, flags, population, region} = country;
    const [visited, setVisited] = useState(false);
    const handleVist =()=>{
        setVisited(!visited)
    }
    return (
        <div className='box1'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Region : {region}</p>
            <button onClick={handleVist}>{visited ? 'Visited' : 'Visit'}</button>
            {visited && ' Wow you visited'}
        </div>
    );
};
export default Country;