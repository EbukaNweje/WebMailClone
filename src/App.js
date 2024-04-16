import React from 'react'
import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    
      <div style={{width: "100%", height: "auto", backgroundColor: "#fff"}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element= { <Login/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    
    </>
  )
}

export default App