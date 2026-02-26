
const Country = ({country}) => {
    const {name, flags, population}= country;
    console.log(country)
    return (
        <div style={{"border":"2px solid green"}}>
            <img src={flags.flags.png} alt={flags.flags.alt} />
            <h3>Name: {name.common} </h3>
            <p>Population : {population.population}</p>
        </div>
    );
};

export default Country;