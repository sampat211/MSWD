import React, {useState} from "react";
import ReactDOM from "react-dom";


const Phonebook = [
	{ 
		id: 1,
		name: 'Stack', 
		number: "4328974539"
	}
	
]
const InputName = (props) => {
	return (
		<div>
			name: <input 
						type = {props.type} 
						value = {props.value} 
						onChange = {props.onChange} 
					/>
		</div>
	)
}
const InputButton = (props) => {
	return (
		<div>
			<button type={props.type}>{props.text}</button>
		</div>
	)
}
const Content = (props) => props.personsToShow.map(person => <p key = {person.id}>{person.name}</p>)
const App = (props) => {
	const [ persons, setPersons] = useState(props.Phonebook) 
  const [ searchName, setSearchName ] = useState("")
  const [ filterChange, setFilterChange ] = useState(false) 
	const [ newName, setNewName ] = useState("")
	
	
	const addNewName = (event) => {
		event.preventDefault()
		
		const personObject = {
			id: persons.length + 1, 
			name: newName,
		}
		
		const repeatOrNot = () => {
			for (let i = 0; i < persons.length; i++) {
				if (newName === persons[i].name) {
					window.alert(newName + " is already added to phonebook")
					
					setPersons(persons)
				}
				else {
					setPersons(persons.concat(personObject))
				}
			}
		}
		
		repeatOrNot()
		setNewName("")
	}
		const handleNameChange = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
	}
  const handleSearchName = (event) => {
		console.log(event.target.value)
		setSearchName(event.target.value)
		setFilterChange(true)
	}
	
	
	const filterItems = (query) => {
		const filter_result = persons.filter(person => person.name.toLowerCase().split(" ").join("").indexOf(query.toLowerCase()) !== -1)
		
		return filter_result
	}
		const personsToShow = filterChange
		? filterItems(searchName)
		: persons

		
	return (
		<div>
		
			<h2>Phonebook</h2>
			
			
			<h3>Add A New Contact</h3>
			<div>
				<form onSubmit = {addNewName}>
				<InputName type = "text" value = {newName} onChange = {handleNameChange} />
				<br />
				<InputButton type = "submit" text = "Add" />
				</form>
			</div>
			
					<h3>Numbers</h3>
			<Content personsToShow = {personsToShow} />
			
		</div>
	)
}
ReactDOM.render(
  <App Phonebook = {Phonebook} />, 
  document.getElementById('root'));
