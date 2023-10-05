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
          <button className="inline-flex mb-2 w-3/4 text-white font-bold bg-logoBlue border-0 py-2 px-6 shadow shadow-logoBlue focus:outline-none hover:bg-hoverBlue rounded-lg text-2xl">
            New Car
          </button>
          <button className="inline-flex w-3/4 mb-6 text-white font-bold bg-red border-0 py-2 px-6 shadow shadow-red focus:outline-none hover:bg-hoverRed rounded-lg text-2xl">
            Old Car
          </button>
        </div>
      </div>
    </div>
  )
}

export default index;