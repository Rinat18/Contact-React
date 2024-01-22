import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import AddContact from '../components/AddContact'
import EditContact from '../components/EditContact'
import ContactDetail from '../components/ContactDetail'

const MainRoute = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/add' element={<AddContact />}/>
        <Route path='/edit/:id' element={<EditContact />}/>
        <Route path='/detail/:id' element={<ContactDetail />}/>
      </Routes>
  )
}

export default MainRoute
