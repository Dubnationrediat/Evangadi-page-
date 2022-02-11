import React from 'react'
import Header from './Header'
import "./bootstrap/bootstrap.css"
import "./App.css"
import Form from "./Form"
import About from "./About"
import NameList from "./NamaList"
import Academy from './Academy'

function App() {
    return (
        <div className='App'>
            <Header />
            {/* <Form /> */}
            <About />
            <NameList />
            <Academy />
        </div>
    )
}

export default App
