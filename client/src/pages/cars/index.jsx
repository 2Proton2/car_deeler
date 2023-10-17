import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import carService from '../../service/carService';
import NewCars from './new-cars/newCars';
import OldCars from './old-cars/oldCars';


const index = () => {
    const [ cars, setCars ] = useState();
    const location = useLocation();
    const params =  new URLSearchParams(location.search);
    const version = params.get('version');

    async function fetchCarsData(carVersion){
        try {
            let result = await carService.getCars(carVersion);
            if( result.response === 200 ) setCars(result.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect( () => {
        fetchCarsData(version);
    }, [ version ] )

    return (
        <>
            {
                (version === 'new') ? (cars && <NewCars data={cars}/>) : (cars && <OldCars data={cars}/>)
            }
        </>
  )
}

export default index;