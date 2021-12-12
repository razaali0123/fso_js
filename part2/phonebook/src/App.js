import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:+923326029209}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setnewNumber] = useState(0)

  const onChanger = (event) => {
    setNewName(event.target.value)
  }

  const onChangerNumber = (event) =>{
    setnewNumber(event.target.value)
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
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
          {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
           </ul>
        </div>

    </div>
  )
}

export default App;
