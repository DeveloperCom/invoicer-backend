import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});



const uploadFile= async (filePath)=>{
    try{
        if(filePath){
            const res= await cloudinary.uploader.upload(filePath,{ resource_type:"image"})
            fs.unlinkSync(filePath)
            return res.url
        }
        else{
            return null
        }
    }
    catch(err){
        fs.unlinkSync(filePath)
        return null
    }
}

export {uploadFile}