import React from 'react'
import { useLocation } from 'react-router-dom';
import NewCar from './new-car/newCar';
import OldCar from './old-car/oldCar';

const index = () => {
    const location = useLocation();
    const queryParams =  new URLSearchParams(location.search);
    const version = queryParams.get('version');

  return (
    <div>
      {
        ( version && version === 'new' ) ? <NewCar /> : <OldCar />
      }
    </div>
  )
}

export default index;