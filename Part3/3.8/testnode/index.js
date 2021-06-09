const http = require('http')
const express = require('express')
const app = express()
app.use(express.json())
let persons = [
    {
      id: 1,
      "name": "A.SAMPAT KUMAR", 
      "number": "9438677110"
    },
    {
      id: 2,
      "name": "Sam", 
      "number": "7008925083"
    },
    {
      id: 3,
      "name": "Nanda", 
      "number": "7896541235"
    },
    {
      id:4,
      "name": "Pritee", 
      "number": "9140155745",
    }
  ]
  app.get("/info", (request, response) => {
	const date = new Date()
	response.send(`<h1>Phonebook has info for ${persons.length} people</h1> <h2>${date}</h2>`)
})
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  })

  app.post('/api/persons', (request, response) => {
    const person = request.body
    console.log(person)
    response.json(person)
  })

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
