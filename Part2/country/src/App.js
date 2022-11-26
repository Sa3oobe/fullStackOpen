import { useState , useEffect } from "react";
import axios from "axios";

const App = () => {

  const [countries, setCountries] = useState([])
  const [filterd, setFilterd] = useState('')
  const country = () => {axios.get('https://restcountries.com/v3.1/all').then(res => setCountries(res.data))}
  
  useEffect(country, [])

  /* const countryToShow = filterd ?
  countries.filter(country => country.name.common.toLowerCase().includes(filterd)) : countries; */

  const handleFilterd = (event) =>{
    console.log('====================================');
    console.log(event.target.value);
    console.log('====================================');
    setFilterd(event.target.value)
  }
  
  console.log('searching for...',filterd);
  //console.log('country to show is ',countryToShow);
  return (
    <div>
      <h2>Country Information</h2>
        <div>Find Countries <input value={filterd} onChange={handleFilterd}/></div>
        <ul>
          {/* {countryToShow.map(country => (<li>{country.name}</li>))} */}
          {countries.filter(country => country.name.common.toLowerCase().includes(filterd))}
        </ul>
    </div>
  );
}

export default App;
