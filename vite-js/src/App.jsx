import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Form} from './components/Form/Form'
import {Card} from './components/Card/Card'

function App() {
  const [formValues, setFormValues] = useState([])

  return (
    <div className="App">
      <Form setFormValues={setFormValues} />
    </div>
  )
}

export default App
