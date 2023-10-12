import axiosInstance from "./axios/config/index";

const enquiryService = {};

/**
 * 
 * @param {Object} obj - get the state from the useState of the component/redux store
 * @param {queryParams} mode - purchase or sell
 * @returns {Object} - typically consists of two field data and response
 */
enquiryService.createEnquiry = async function(obj, mode){
    try{
        const response = await axiosInstance.post(`/cars/create-enquiry?mode=${mode}`, obj);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Not able to create an enquiry : ${err}`)
    }
}

/**
 * 
 * @returns {Object} - typically consists of two field data and response
 */
enquiryService.getAllEnquiry = async function(){
    try{
        const response = await axiosInstance.get(`/cars/get-enquiry`);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Error in getting all enquiries : ${err}`)
    }
}

/**
 * 
 * @param {queryParams} enquiryId - id of enquiry
 * @returns {Object} - typically consists of two field data and response
 */
enquiryService.getParticularEnquiry = async function(enquiryId){
    try{
        const response = await axiosInstance.get(`/cars/get-particular-enquiry?id=${enquiryId}`);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Error in getting a particular enquiry : ${err}`)
    }
}

/**
 * 
 * @param {Object} obj - get the state from the useState of the component/redux store
 * @param {variable} enquiryId - enquiryId
 * @param {String} response - is enquiry accepeted or rejected ? 
 * @returns {Object} - typically consists of two field data and response
 */
enquiryService.ackEnquiry = async function(obj, enquiryId, response){
    try{
        const response = await axiosInstance.post(`/cars/ack-enquiry?id=${enquiryId}&response=${response}`, obj);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Error in acknowledging a particular enquiry : ${err}`)
    }
}

/**
 * 
 * @param {variable} enquiryId - enquiryId
 * @param {String} response - response will be "delete" for deleting enquiry
 * @returns {Object} - typically consists of two field data and response
 */
enquiryService.deleteEnquiry = async function(enquiryId, response){
    try{
        const response = await axiosInstance.post(`/cars/delete-particular-enquiry?id=${enquiryId}&response=${response}`);
        return{
            response: response.status,
            data: response.data
        }
    }
    catch(err){
        console.error(`Error in deleting a particular enquiry : ${err}`)
    }
}

export default enquiryService;