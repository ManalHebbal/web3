/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const person = {
      content: newName,
      id: String(persons.length+1)
    }
  
    setPersons(persons.concat(person))
    setNewName('') 
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value ={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
      {persons.map(person =>
          <Person key={person.id} name={person} />
        )}
      </ul>

      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App