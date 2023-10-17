let cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: import.meta.env.VITE_CLOUD_NAME,
    api_key: import.meta.env.VITE_CLOUD_NAME,
    api_secret: import.meta.env.VITE_API_SECRET
});

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
}


// module.exports = { opts, cloudinary }

export default cloudinary;
module.exports = {
    opts
}