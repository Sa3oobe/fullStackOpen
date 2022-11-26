import React from 'react'
//import perServices from '../services/perServices'
const Persons = (props) => {
  // personsToShow sets the condition whether showing the filterd names or origenal names
  //console.log(props);
    const personsToShow = props.filterdName ?
    props.persons.filter(person => person.name.toLowerCase().includes(props.filterdName)) :
    props.persons
    return(
      <ul>
        {personsToShow.map(person => (
          <li key={person.id} className={person}>  {/* the key has to be initiated first from persons useState */}
              {person.name} {person.number}
              {<button type="button" onClick={() => props.handleDelete(person.id)}>
                delete
              </button>}
          </li>
        ))
        }
      </ul>
    )
  }
export default Persons