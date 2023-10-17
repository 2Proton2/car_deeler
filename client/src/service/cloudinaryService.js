import cloudinary from "../config/cloudinary";

const upload = async (image) => {
    try{
        let result = await cloudinary.uploader.upload(image);
        console.log('result => ', result);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    upload
}