import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const onChanger = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event)=> {
    event.preventDefault()
    const allNames =  persons.map(x => x.name)
    if (allNames.includes(newName)){
      window.alert(`${newName} already exists`)
      return
    }
    // if allNames.includes(newName){

    // }
    const personObj = {name: newName}
    setPersons(persons.concat(personObj))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={addName}>
        <div>
          <ul>
          {persons.map(person => <li key={person.name}>{person.name}</li>)}
           </ul>
        </div>
        <div>
          name: <input value={newName} onChange={onChanger}  />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App;
