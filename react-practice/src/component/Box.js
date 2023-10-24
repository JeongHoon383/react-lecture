import React from 'react'

const Box = (props) => {

  return (
    <div className='box'>
      <h1>{props.name}</h1>
      <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fc1.neweggimages.com%2FProductImage%2FA4SR_1_20190112675283046.jpg&type=a340" alt="" />
      <h2>Win</h2>
    </div>
  )
}

export default Box
