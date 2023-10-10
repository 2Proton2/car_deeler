import React from 'react';
import { useNavigate } from 'react-router-dom';
import userSlice, { setUserType } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/components/Nav/logo/logo.png';

const index = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (type) => {
    navigateTo(`/user/login/${type}`)
    dispatch(setUserType(type));
  };

  return (
    <section className="bg-customGray">
      <div className="flex flex-col items-center h-20 justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center mb-10 font-bold leading-tight tracking-tight text-logoBlue md:text-2xl dark:text-white">
              Login with
            </h1>
            <div className="flex flex-row justify-center">
              <button onClick={() => handleButtonClick('admin')} className="w-full mx-1 text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center">Admin</button>
              <button onClick={() => handleButtonClick('customer')} className="w-full mx-1 text-white bg-logoBlue font-medium rounded-lg text-sm px-5 py-2.5 text-center">Customer</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default index;