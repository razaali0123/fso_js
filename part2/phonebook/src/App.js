import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:+923326029209}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setnewNumber] = useState(0)
  const [filterName, setFilterName] = useState(persons)

  const onChanger = (event) => {
    setNewName(event.target.value)
  }

  const onChangerNumber = (event) =>{
    setnewNumber(event.target.value)
  }

  const filerName = (event) =>{
    const regex = new RegExp('^'.concat(event.target.value))
    const filtered = persons.filter(x => regex.test(x.name.toLowerCase()))
    setFilterName(filtered)
  }

  const addNameNum = (event)=> {
    event.preventDefault()
    const allNames =  persons.map(x => x.name)
    if (allNames.includes(newName)){
      window.alert(`${newName} already exists`)
      return
    }
    const personObj = {name: newName, number: newNumber}
    setPersons(persons.concat(personObj))
    setNewName('')
    setnewNumber(0)
    setFilterName(persons.concat(personObj))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Filter Elements here</h3>
      <div>
        filter shown with <input onChange={filerName} />
      </div>
      <h3>Add New One Here</h3>
      <form  onSubmit={addNameNum}>
      <div>
          name: <input value={newName} onChange={onChanger}  /><br></br>
          number: <input value={newNumber} onChange={onChangerNumber}  />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          <ul>
            {filterName.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
           </ul>
        </div>

    </div>
  )
}

export default App;
