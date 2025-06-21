import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null;

    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File is uploaded to Cloudinary.", result.url);

    return result;
  } catch (error) {
    // Remove the file from local storage after upload
    fs.unlinkSync(localFilePath);
    return null;
  }
}

export {uploadOnCloudinary};