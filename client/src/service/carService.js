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
        console.error(`Not able to add car : ${err}`)
    }
}

/**
 * 
 * @param {variables} carType - which car ? old or new ?
 * @returns {Object} - typically consists of two field data and response
 */
carService.getCars = async function(carType){
    try{
        const response = await axiosInstance.get(`http://localhost:4000/cars/${carType}`);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Error in getting the cars : ${err}`)
    }
}

/**
 * 
 * @param {queryParams} carId - car Id
 * @param {variables} carName - car Name
 * @returns {Object} - typically consists of two field data and response
 */
carService.getParticularCar = async function(carName, carId){
    try{
        const response = await axiosInstance.get(`http://localhost:4000/cars/particular/${carName}?id=${carId}`);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Not able to get a particular car : ${err}`)
    }
}

export default carService;