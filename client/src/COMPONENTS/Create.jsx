import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import crudContext from '../CRUD/context'

const Create = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const { sendUserDataFun } = useContext(crudContext)

    const sendFun = (e) => {
        e.preventDefault()
        sendUserDataFun(user)
        navigate('/display')
    }

  return (
    <>
        <form onSubmit={sendFun}>
                <label htmlFor='name'>Name :</label>
                <input 
                    type='text'
                    id='name'
                    placeholder='Enter your name here...'
                    onChange={(e) => setUser((prev) => ({...prev, name: e.target.value}))}
                /><br />
                <label htmlFor='email'>Email :</label>
                <input 
                    type='email'
                    id='email'
                    placeholder='Enter your email here...'
                    onChange={(e) => setUser((prev) => ({ ...prev,email: e.target.value }))}
                /><br />
                <label htmlFor='password'>Email :</label>
                <input 
                    type='password'
                    id='password'
                    placeholder='Enter your password here...'
                    onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                /><br />
                <button>SEND</button>
        </form>
        <br />
        <button onClick={() => navigate('/')}>BACK HOME</button>
    </>
  )
}

export default Create;