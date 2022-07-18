import axios from 'axios';
import React, { useState } from 'react'
import crudContext from '../CRUD/context'

const CrudState = ({ children }) => {

  const [error, setError] = useState();
  const [userData, setUserData] = useState([]);

  
  const sendUserDataFun = async(userdata) => {
    try {
      const result = await axios.post('/api/create', userdata)
      setUserData([result.data])
    } catch (error) {
      setError(error)
    }
  } 


  const getAllUsers = async() => {
    try {
      const result = await axios.get('/api/all')
      setUserData(result.data)
    } catch (error) {
      setError(error)
    }
  }


  const deleteUser = async(id) => {
    try {
      await axios.delete(`/api/delete/${id}`)
      getAllUsers()
    } catch (error) {
      setError(error)
    }
  }


  const providers = {
    error,
    setError,
    userData,
    setUserData,
    sendUserDataFun,
    getAllUsers,
    deleteUser
  }

  return (
    <crudContext.Provider
      value={providers}
    >
      {children}
    </crudContext.Provider>
  )
}

export default CrudState;