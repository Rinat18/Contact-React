import React, { useContext, useState } from 'react'
import { productContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {
  const {addContact} = useContext(productContext)
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  function addBtn(){
    if(!name || !image || !phone) return
    const obj ={
      name: name,
      image: image,
      phone: phone
    }
    addContact(obj)
    setName("")
    setImage("")
    setPhone("")
    navigate("/")
  }
  return (
    <div>
      <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
      <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)}/>
      <button onClick={addBtn} className='addContact'>Add</button>
    </div>
  )
}

export default AddContact
