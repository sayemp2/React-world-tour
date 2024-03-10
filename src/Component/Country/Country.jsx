import '../../index.css'
const Country = ({country}) => {
    console.log((country));
    const{name, flags, population, region}= country
    return (
        <div className='box1'>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population :{population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;