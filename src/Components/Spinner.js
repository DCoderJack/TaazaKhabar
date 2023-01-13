import React from 'react'
// import LoadingSpinner from './LoadingSpinner.gif'
import LoadingSpinner from './Spin.gif'

const Spinner = () => {
  return (
    <div className='text-center mt-2'>
        <img src={LoadingSpinner} style = {{width : '91px'}} alt="" />
    </div>
  )
}

export default Spinner