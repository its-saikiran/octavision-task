import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Error from './Error'
import Display from './Display'

const HandleRouter = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/create' element={ <Create /> } />
                <Route path='/display' element={ <Display /> } />
                <Route path='/error' element={ <Error /> } />
            </Routes>
        </Router>
    </div>
  )
}

export default HandleRouter