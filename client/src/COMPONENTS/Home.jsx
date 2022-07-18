import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import crudContext from '../CRUD/context.js'

const Home = () => {

  const navigate = useNavigate();
  const { getAllUsers } = useContext(crudContext);
  const allUsers = () => {
    getAllUsers()
    navigate('/display')
  }

  function fun(){
    navigate('/create')
  }
  
  return (
    <div>
        <button onClick={fun}>CREATE</button>
        <button onClick={allUsers}>DISPLAY ALL</button>
    </div>
  )
}

export default Home;