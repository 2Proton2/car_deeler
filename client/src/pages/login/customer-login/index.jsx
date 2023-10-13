import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import userAPI from '../../../service/userService';
import { setAuth } from '../../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const index = () => {
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    let [input, setInput] = useState({
        emailid: "",
        password: "",
        type: 'customer'
    });

    function inputChangeMethod(ctxt){
        setInput((prevState) => {
            return {
                ...prevState,
                [ctxt.target.name]: ctxt.target.value
            };
        })
    }

    const anyEmptyInputs = (ctxt) => {
        let missingFields = Object.keys(ctxt).filter((e) => !(ctxt[e]));
        return (missingFields.length) ? true : false;
    }

    function getCookie(cookieName){
        const token = document.cookie.split('=')[1];
        return token;
    }

    async function fetchUserData(ctxt){
        let allFieldCheck = anyEmptyInputs(ctxt);
        if(!allFieldCheck){
            try{
                let result = await userAPI.login(ctxt, ctxt.type)
                if( result.response === 200 ){
                    const token = getCookie('token');
                    dispatch(setAuth(token));
                    navigateTo(`/profile`)
                }
            } catch(err) {
                console.log(err);
            }
            
        }
    }


    
    return (
        <section className="bg-customGray">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-logoBlue md:text-2xl dark:text-white">
                            Login to your customer account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="emailid" className="block mb-2 text-sm font-medium text-logoBlue dark:text-white">Your email</label>
                                <input type="emailid" name="emailid" id="emailid" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domain.com" value={input.emailid} onChange={inputChangeMethod} required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-logoBlue dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={input.password} onChange={inputChangeMethod} required={true} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-red hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-logoBlue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => fetchUserData(input)}>Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-logoBlue hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index;