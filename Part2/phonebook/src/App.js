import { useState , useEffect } from 'react'
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
//import axios from 'axios';
import perServices from './services/perServices';
import Notification from './components/Notification'

const App = () => {
  /* const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: '040-1234567',
    id: 1,  //has to be initiated
  }
  
]) */
  
//newName state is meant for controlling form input element
const [persons, setPersons] = useState([])//TWO days, i had to set persons to ([]) instead of (''),(array instead of text)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterdName, setFilterdName] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
// Using useEffect
  useEffect(() => {
    console.log('effect');
    perServices
      .getAll()
      .then(initialPersons => {
        //console.log('promise fulfilled',initialPersons)
        setPersons(initialPersons)
      }).catch(err => alert(err))
  },[])

  //console.log('persons (after) useEffect', persons);
  //console.log('render', persons.length,'PERSONS');
  
  const addName = (event) => {
    event.preventDefault()
    const perObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (!newName || !newNumber) {
      alert("Please enter both name and phone number")
      return
    }
    //console.log('This is PerObject', perObject);
    //person exist in database
    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (existingPerson && existingPerson.number === newNumber){
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    //chenage number for existing person
    if (existingPerson && existingPerson.number !== newNumber) {
      if(
        window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with the new one?`)
      ){
        const changedPerson = {...existingPerson, number:newNumber}
        const id = existingPerson.id

        perServices
        .update(id, changedPerson)
        .then(returnedPerson => {
          setPersons(
            persons.map((person) => (person.id !== id ? person : returnedPerson))
          )
          setSuccessMessage(`Updated ${changedPerson.name}' number successfuly`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
          //setErrMessage(`${changedPerson.name} Has been changed successfully`)
        }).catch(err => {
          console.log(err);
          setErrorMessage(`Information of ${changedPerson.name} has already been removed.`)
          /* if(err.response.data){
            //console.log(err.response.data.error);
            //setErrorMessage(err.response.data.error)
            setErrorMessage(err.error)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          } else {
            setErrorMessage(`Information of ${changedPerson.name} has already been removed.`)
          } */
        })
      }
    }
    
    else{
      perServices
        .create(perObject).then(returndPer => {
          setPersons(persons.concat(returndPer))
          setNewName('')
          setSuccessMessage(`${perObject.name} Has been added successfully`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })/* .catch(error => {
          setErrMessage(`${perObject} Has been added successfully`)
        }) */
    }
  }
  
  const handleShowName = (event) => {
    setNewName(event.target.value)
  }

  const handleShowNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handlefilterdName = (event) => {
    setFilterdName(event.target.value)
    //console.log(filterdName);
  }
  
  //Sometimes it can be useful to render state and other variables as text for debugging purposes.
  //You can temporarily add the following element to the rendered component: <div>debug: {newName}</div>

  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete this person")) {
      /* console.log('====================================');
      console.log('confirm');
      console.log('===================================='); */
      perServices
        .del(id)
        .then(() => {
          setSuccessMessage(`Deleted ${persons.find((person) => person.id === id).name}`)
          /* console.log('====================================');
          console.log(successMessage);
          console.log('===================================='); */
          setPersons(persons.filter((person) => person.id !== id))
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch((err) => {
          alert(err)
          setErrorMessage(`Information of ${persons.find((person) => person.id === id).name} has already been removed.`)
        })
    } else {
      return
    }
  }
  return (
    <div>
      <h2> Phonebook</h2>
      <Notification successMessage={successMessage} errorMessage={errorMessage} />
      <Filter filterdName={filterdName} handlefilterdName={handlefilterdName} />
      <h2>Add a New</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleShowName={handleShowName}
        newNumber={newNumber}
        handleShowNumber={handleShowNumber}
      />
      <h2>Numbers</h2>
      <Persons filterdName={filterdName} persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App;