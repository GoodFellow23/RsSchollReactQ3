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
        <main>
            {formValues.map((item, index) => {
                return <Card item={item} key={index} />
            })}
        </main>
    </div>
  );
}

export default App
