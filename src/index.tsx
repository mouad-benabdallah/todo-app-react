import React from 'react'
import { createRoot } from 'react-dom/client'

type Helloprops = {
  name: string
  age?: string
}
function Hello({ name, age = '22' }: Helloprops): JSX.Element {
  return (
    <h4>
      nom : {name} , age : {age}
    </h4>
  )
}
const notes: Array<number> = [12, 13, 5, 18]
const element: JSX.Element = (
  <>
    <div>
      <Hello name="mouad"></Hello>
      <Hello name="mouad" age="35"></Hello>
      <Hello name="mouad" age="35"></Hello>
    </div>
    <div>
      <h1>Bonjour tout le monde</h1>
      <p>Coucou tout les amis</p>
    </div>
    <div>
      <ul style={{ color: 'red', backgroundColor: 'lightblue' }}>
        {notes.map((note, index) => (
          <li key={`note=${index}`}>{note}/20</li>
        ))}
      </ul>
    </div>

    <div>
      <h1>Hola</h1>
    </div>
  </>
)

const root = document.querySelector('#root')

if (!root) {
  throw new Error('Oups ... il manque la balise root dans votre index.html')
}

createRoot(root).render(element)
