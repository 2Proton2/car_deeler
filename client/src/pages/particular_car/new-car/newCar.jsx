import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import engineIcon from '../../../assets/pages/shared/icons/engine.png';
import powerIcon from '../../../assets/pages/shared/icons/power.png';
import transmissionIcon from '../../../assets/pages/shared/icons/transmission.png';
import speedometerIcon from '../../../assets/pages/shared/icons/speedometer.png';
import fuelIcon from '../../../assets/pages/shared/icons/fuel.png';
import airbagIcon from '../../../assets/pages/shared/icons/airbag.png';
import carService from '../../../service/carService';

const newCar = () => {
  const params = useParams();
  const { carname, id } = params;
  const [ carDetails, setCarDetails ] = useState({});

  const getParticularCarDetails = async (name, _id) => {
    try{
      const result = await carService.getParticularCar(name, _id);
      if(result.response === 200) {
        setCarDetails(result.data[0]);
      };
      return null;
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getParticularCarDetails(carname, id)
  }, [carname, id]);


  return (
    <>
        <div className='head-parent flex flex-row items-start pt-20 px-20'> 
        <div className='head-child-slider rounded-md'>
          <img src={carDetails.photos && carDetails.photos[0]} className='rounded-md'/>
        </div>
        <div className='head-child-details pl-10 pt-5'>
          <h1 className='font-bold text-4xl text-logoBlue'>{carDetails && carDetails.carname}</h1>
          <h6 className='font-bold text-l text-red pt-1'>Rs. {carDetails.newcardetails && carDetails.newcardetails.price}*</h6>
          <button className="w-auto mx-1 mb-6 text-white bg-red font-bold text-l px-10 py-2 mt-5 text-center hover:bg-hoverRed shadow shadow-red">Apply</button>
        </div>
      </div>

      <div className='body pt-10 px-10 flex flex-row'>
        <div className='icon-section w-2/12 flex flex-col justify-between rounded-lg'>
          <div className='p-3  bg-lightBlue my-1 rounded-xl flex flex-row justify-between items-center'>
            <img src={engineIcon} style={{width:'50px', height: '50px'}}/>
            <h6 className='font-medium pt-2 text-logoBlue text-sm'>{carDetails.newcardetails && carDetails.newcardetails.engine}</h6>
          </div>

          <div className='p-3  bg-lightBlue my-1 rounded-xl flex flex-row justify-between items-center'>
            <img src={powerIcon} style={{width:'50px', height: '50px'}}/>
            <h6 className='font-medium pt-2 text-logoBlue text-sm'>{carDetails.newcardetails && carDetails.newcardetails.power}</h6>
          </div>

          <div className='p-3  bg-lightBlue my-1 rounded-xl flex flex-row justify-between items-center'>
            <img src={transmissionIcon} style={{width:'50px', height: '50px'}}/>
            <h6 className='font-medium pt-2 text-logoBlue text-sm'>{carDetails.newcardetails && carDetails.newcardetails.transmission}</h6>
          </div>

          <div className='p-3  bg-lightBlue my-1 rounded-xl flex flex-row justify-between items-center'>
            <img src={speedometerIcon} style={{width:'50px', height: '50px'}}/>
            <h6 className='font-medium pt-2 text-logoBlue text-sm'>{carDetails.newcardetails && carDetails.newcardetails.mileage}</h6>
          </div>

          <div className='p-3  bg-lightBlue my-1 rounded-xl flex flex-row justify-between items-center'>
            <img src={fuelIcon} style={{width:'50px', height: '50px'}}/>
            <h6 className='font-medium pt-2 text-logoBlue text-sm'>{carDetails && carDetails.fuel}</h6>
          </div>

          <div className='p-3  bg-lightBlue my-1 rounded-xl flex flex-row justify-between items-center'>
            <img src={airbagIcon} style={{width:'50px', height: '50px'}}/>
            <h6 className='font-medium pt-2 text-logoBlue text-sm'>{carDetails && carDetails.airbags}</h6>
          </div>

        </div>
        <div className='bg-lightBlue mx-4 rounded-xl p-5'>
          <h6 className='font-medium text-sm'>Type : {carDetails && carDetails.bodytype}</h6>
          <h6 className='font-medium text-sm'>Transmission : {carDetails.newcardetails && carDetails.newcardetails.transmission}</h6>
          <h6 className='font-medium text-sm'> Description : {carDetails && carDetails.description}</h6>
        </div>
      </div>
    </>
  )
}

export default newCar;