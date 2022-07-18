import React, { useContext } from 'react'
import crudContext from '../CRUD/context';

const Error = () => {

  const { error } = useContext(crudContext);

  return (
    <>
        { error? error : '' }
    </>
  )
}

export default Error;