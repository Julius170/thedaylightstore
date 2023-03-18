import { Button } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { ImageContext } from "../../contexts/image.context";
import { styleButton } from "../../routes/authentication/authentication.component";

function UploadWidget() {
    const { setImageUrl} = useContext(ImageContext)
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "amazonreactjs",
        uploadPreset: "ffgl8puy",
      },
      (error, result) => {
        
        console.log(result.event, 'this is the result');
        if(result.event === "success"){
            console.log(result.info.url, 'we got the url')
          
            setImageUrl(result.info.url)
        }
      }
    );
   
  }, []);
  return (
    <Button onClick={() => widgetRef.current.open()} style={{...styleButton, backgroundColor: 'black'}}> Upload Image</Button>
  );
}

export default UploadWidget;
