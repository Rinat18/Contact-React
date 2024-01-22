import React, { useContext, useEffect } from 'react'
import { productContext } from '../context/ProductContext'
import ContactItem from './ContactItem'

const ContactList = () => {
    const {viewContact, contacts} = useContext(productContext)
    useEffect(() => {
        viewContact()
    },[])
  return (
    <div className='list2'>
        {contacts.map((elem) => (
            <ContactItem key={elem.id} {...elem} />
        ))}
    </div>
  )
}

export default ContactList
