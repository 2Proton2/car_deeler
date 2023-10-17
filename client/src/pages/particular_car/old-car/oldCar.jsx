import React from 'react';
import fuelIcon from '../../../assets/pages/shared/icons/fuel.png';
import airbagIcon from '../../../assets/pages/shared/icons/airbag.png';

const oldCar = (props) => {
    let data = props.data;
  return (
    <>
        <div className='head-parent flex flex-row items-start pt-20 px-20'> 
        <div className='head-child-slider rounded-md'>
          <img src={data.photos && data.photos[0]} className='rounded-md'/>
        </div>
        <div className='head-child-details pl-10 pt-5'>
          <h1 className='font-bold text-4xl text-logoBlue'>{data && data.carname}</h1>
          <h6 className='font-bold text-l text-red pt-1'>Rs. {data.customercardetails && data.customercardetails.expectedprice}*</h6>
          <button className="w-auto mx-1 mb-6 text-white bg-red font-bold text-l px-10 py-2 mt-5 text-center hover:bg-hoverRed shadow shadow-red">Apply</button>
        </div>
      </div>

      <div className='body pt-10 px-10 flex flex-row'>
        <div className='icon-section w-2/12 flex flex-col justify-between rounded-lg'>

          <div className='p-3  bg-lightBlue my-1 rounded-xl flex flex-row justify-between items-center'>
            <img src={fuelIcon} style={{width:'50px', height: '50px'}}/>
            <h6 className='font-medium pt-2 text-logoBlue text-sm'>{data && data.fuel}</h6>
          </div>

          <div className='p-3  bg-lightBlue my-1 rounded-xl flex flex-row justify-between items-center'>
            <img src={airbagIcon} style={{width:'50px', height: '50px'}}/>
            <h6 className='font-medium pt-2 text-logoBlue text-sm'>{data && data.airbags}</h6>
          </div>

        </div>
        <div className='bg-lightBlue mx-4 rounded-xl p-5'>
          <h6 className='font-medium text-sm'>Type : {data && data.bodytype}</h6>
          <h6 className='font-medium text-sm'> Description : {data && data.description}</h6>
        </div>
      </div>
    </>
  )
}

export default oldCar;