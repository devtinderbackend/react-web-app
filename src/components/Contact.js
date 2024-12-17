import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Contact Page</h1>
        <form>
            <input type='text' placeholder='name'  className='m-4 p-4'>
            </input>
            <input type='text' placeholder='message'  className='m-4 p-4'>
            </input>
            <button className='m-4 p-4'></button>
        </form>
    </div>
  )
}

export default Contact