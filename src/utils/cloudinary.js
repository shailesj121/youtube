import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDNAME, 
    api_key: process.env.APIKEY, 
    api_secret: process.env.API_SECRET 
  });

  const uploadOnCloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) return null

        const response = await cloudinary.v2.uploader.upload(localfilepath,{
             resource_type: "auto"
            });

        console.log("fileUploaded on cloudinary", response.url);
        return response;
        
    } catch (error) {
        fs.unlinksync(localfilepath) //removoe the local saved file as the upload operation got failed 
        return null;
        
    }
  }


  export {uploadOnCloudinary}