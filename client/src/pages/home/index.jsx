import React from 'react'
import './css/index.css'

const index = () => {
  return (
    <div className='home-page bg-customGray h-screen'>
      <div className='flex flex-row justify-between flex-wrap px-24 pt-48'>
        <div className='title font-bold text-logoBlue'>
          <span className='text-2xl'>Buy new or old car</span>
          <br/>
          <span className='text-6xl'>FIND YOUR DREAM</span>
          <br/>
          <span className='text-6xl'>CAR</span>
          <br/>
          <span className='text-2xl'>Get the best deal</span>
        </div>
        <div className='button-section w-1/4 px-10 bg-white flex flex-col items-center text-center'>
          <span className='text-4xl pt-5 mb-3 font-bold text-black'>Search a car</span>
          <button className="w-3/4 mx-1  mb-2 text-white bg-logoBlue font-bold rounded-lg text-2xl px-5 py-2.5 text-center hover:bg-hoverBlue shadow shadow-logoBlue">New Car</button>
          <button className="w-3/4 mx-1 mb-6 text-white bg-red font-bold rounded-lg text-2xl px-5 py-2.5 text-center hover:bg-hoverRed shadow shadow-red">Old Car</button>
        </div>
      </div>
    </div>
  )
}

export default index;