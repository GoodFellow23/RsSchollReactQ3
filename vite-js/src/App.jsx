import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {MainPage} from "./Components/Pages/MainPage";
import {Articles} from "./Components/Articles/Articles";

function App() {
  const [searchResult, setSearchResult] = useState([])

  return (
    <div className="App">
        <MainPage setSearchResult={setSearchResult} />
        <Articles searchResult={searchResult} />
    </div>
  )
}

export default App
