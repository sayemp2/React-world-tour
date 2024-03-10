import '../../index.css'
const Country = ({country}) => {
    const {name, flags} = country
    return (
        <div className='box'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
        </div>
    );
};
export default Country;