import axiosInstance from "./axios/config/index";

const userService = {};

/**
 * 
 * @param {Object} obj - get the authentication details from the useState/redux store
 * @param {String} userType - Tell me your identity!! Dealer or Customer
 * @returns {Object} - typically consists of two field data and response
 */


userService.signup = async function(obj, userType){
    try{
        const response = await axiosInstance.post(`/user/signup?type=${userType}`, obj);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Not able to signup : ${err}`)
    }
}

userService.login = async function(obj, userType){
    try{
        const response = await axiosInstance.post(`http://localhost:4000/user/login?type=${userType}`, obj);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Not able to login : ${err}`);
    }
}

export default userService;