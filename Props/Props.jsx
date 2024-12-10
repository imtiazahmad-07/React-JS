import React from 'react'

const Props = (props) => {
  return (
    <div className='border border-black p-5 m-3 '>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Props