import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewCars from './new-cars/newCars';
import OldCars from './old-cars/oldCars';


const index = () => {
    const location = useLocation();
    const params =  new URLSearchParams(location.search);
    const version = params.get('version');

    
    return (
        <>
            {
                (version === 'new') ? (version && <NewCars/>) : (version && <OldCars/>)
            }
        </>
  )
}

export default index;