import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import carService from '../../service/carService';
import NewCar from './new-car/newCar';
import OldCar from './old-car/oldCar';

const index = () => {
    const params = useParams();
    const [ carDetails, setCarDetails ] = useState({});
    const { carname, id } = params;

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
    console.log('card => ', carDetails);

  return (
    <div>
      {
        ( carDetails.version === 'new' ) ? <NewCar data={ carDetails }/> : <OldCar data={ carDetails }/>
      }
    </div>
  )
}

export default index;