import React, { useState, useEffect } from 'react';
import carService from '../../../service/carService';
import { useNavigate, useLocation } from 'react-router-dom';

const newCars = () => {
    const [ cars, setCars ] = useState();
    const navigateTo = useNavigate();
    const location = useLocation();
    const params =  new URLSearchParams(location.search);
    const version = params.get('version');

    const navigateToMoreDetails = (name, id) => {
        navigateTo(`/cars/${name}/${id}?version=${version}`);
    }

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
        <div className='flex flex-row flex-wrap'>
            {
                cars && cars.map((e) => {
                    return (
                        <div className='p-1' key={e._id}>
                            <div>
                                <img src={e.photos[0]} style={{ width: "200px", height: "100px" }} alt="car_image" />
                            </div>
                            <div>
                                <h1 className='font-bold text-xl text-logoBlue'>{e.carname}</h1>
                                <h6 className='font-bold text-sm text-red'>Rs. {e.newcardetails.price}/-</h6>
                                <h6 className='font-medium text-sm'>Type : {e.bodytype}</h6>
                                <h6 className='font-medium text-sm'>Transmission : {e.newcardetails.transmission}</h6>
                                <h6 className='font-medium text-sm'> Fuel : {e.fuel}</h6>
                            </div>
                            <button className="w-auto mx-1 mb-6 text-white bg-red font-bold rounded-lg text-xs px-2 py-2 text-center hover:bg-hoverRed shadow shadow-red" onClick={() => navigateToMoreDetails(e.carname, e._id)}>More Details</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default newCars;
