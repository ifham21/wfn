import React from 'react'

const Support = () => {
  return (
    <div>
      <h1 className='mt-6 px-12 flex justify-center'>Hi, What can we help you with?</h1>
      <h3 className='mt-6 px-12 flex justify-center'>We're here to make your experience smooth and 
        hassle-free. Whether you have questions, need support,
        or just want to learn more, feel free to reach out.
        Our team is ready to help woth anything you need, just let us know.
      </h3>

      <div className='flex justify-center mt-6'>
        <h1>Name*</h1> <br />
        <input type="text" className="border border-gray-300 rounded-md p-2 ml-2" placeholder='Please enter your name' />
      </div>
    </div>
  )
}

export default Support