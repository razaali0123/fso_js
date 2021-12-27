import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';


const Show = (result) => {
  if (result.lst.length === 0){
    
    
    return <p>No items found</p>
  }
  else if (result.lst[0].length === 1){
    console.log(result.lst[0][0])
    return(
  <>

  <h1>{result.lst[0][0].name.common}</h1>
  <p>Capital {result.lst[0][0].capital}</p>
  <p>Population {result.lst[0][0].population}</p>
  <h2>Languages</h2>
  <ul>
  {Object.values(result.lst[0][0].languages).map(obj => <li key={obj}>{obj}</li>)}
  </ul>
  <img src={result.lst[0][0].flags.png} />
  </>
)
  }
  else if (result.lst[0].length >=10){
    return <p>Too many matches, please be specific</p>
  }

  else if (result.lst[0].length <10){
    return (
      <ul>
    {result.lst[0].map(object =><li key={object.name.common}>{object.name.common}</li>)}
    </ul>
    )

  }
  else{
    return <p>See Search Results here ...</p>
  }

}



const App = () => {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([]) 

  const Changer = (event) =>{
    if (event.target.value === ''){
      setSearch(event.target.value)
      setResult([])
      return
    }
    else{
    const regex = new RegExp('^'.concat(event.target.value.toLowerCase()));
    const filtered = country.filter(obj => regex.test((obj.name.common).toLowerCase()))
    setSearch(event.target.value)
    setResult([filtered])
    }
  }

  const hook = ()=> {
    axios.get("https://restcountries.com/v3.1/all").then(resposes =>{
      setCountry(resposes.data)
    })
  }
  useEffect(hook, [])
  return (
    
  <form>
    find countries
  <input type="text" value = {search} onChange = {Changer}/>
  {<Show lst = {result} />}
  </form>
  )
  

}

export default App;
