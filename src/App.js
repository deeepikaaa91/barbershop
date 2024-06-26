import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Table from './Table/Table'


function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/table' element={<Table/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App