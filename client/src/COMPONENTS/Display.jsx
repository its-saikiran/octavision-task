import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import crudContext from '../CRUD/context';

const Display = () => {

    const { userData, deleteUser } = useContext(crudContext);
    const navigate = useNavigate();
    const deleteUserFun = (id) => {
      deleteUser(id)
    }
    
  return (
    <>
        <ol>
            {
                userData.length !== 0 ? userData.map((user, index) => (
                  <li key={`list${user.id}`}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <button key={user.id} onClick={() => deleteUserFun(user.id)}>DELETE</button>
                    <hr />
                  </li>)
                ) : "There is no data..."
            }
        </ol>
        <button onClick={() => navigate('/')}>BACK TO HOME</button>
    </>
  )
}

export default Display;