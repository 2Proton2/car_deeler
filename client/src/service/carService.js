import axiosInstance from "./axios/config/index";

const carService = {};

/**
 * 
 * @param {Object} obj - get the state from the useState of the component/redux store
 * @param {queryParams} userType - tell me your identity!! Dealer or Customer
 * @returns {Object} - typically consists of two field data and response
 */


carService.addCar = async function(obj, userType){
    try{
        const response = await axiosInstance.post(`http://localhost:4000/cars/add-car?type=${userType}`, obj);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Not able to signup : ${err}`)
    }
}