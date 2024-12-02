import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {

    const override = {
        display: 'block',
        margin: '100px auto'
    }

  return (
    <>
    <ClipLoader size={100} color='#2ECC71' cssOverride={override}/>
    </>
  )
}

export default Spinner