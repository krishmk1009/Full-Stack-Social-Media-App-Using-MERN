import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home'
import Auth from './component/auth/Auth'
import Navbar from './component/Navbar/Navbar'
import { Container } from '@material-ui/core'

// import { Router } from 'react-router-dom/cjs/react-router-dom.min'
const App = () => {

  return (
    <>

      <Container maxWidth="lg">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/auth' Component={Auth} />
          </Routes>
        </BrowserRouter>

      </Container>
    </>

  )
}

export default App