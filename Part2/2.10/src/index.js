import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'A',
    number: 652441789
  },
  {
    id: 2,
    name: 'SAMPAT',
    number: 895564123
  },
  {
    id: 3,
    name: 'KUMAR',
    number: 9438677000
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
