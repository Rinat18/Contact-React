import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();
const ProductContext = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [edit,setEdit] = useState('')

  // ! create
  async function addContact(obj) {
    await axios.post(API, obj);
  }

  // ! read
  async function viewContact() {
    const { data } = await axios(API);
    setContacts(data);
    return data;
  }

  // ! delete

  async function deleteContact(id){
    await axios.delete(`${API}/${id}`)
    viewContact()
  }

  // ! edit

  async function readEdit(id){
    const { data } = await axios(`${API}/${id}`);
    setEdit(data)
    return data
  }

  async function editFunction(id,obj){
    await axios.patch(`${API}/${id}`, obj)
  }

  const values = {
    addContact,
    viewContact,
    contacts,
    deleteContact,
    editFunction,
    readEdit,
    edit
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
