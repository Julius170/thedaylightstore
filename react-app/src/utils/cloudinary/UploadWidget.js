import { Button } from "@mui/material";
import React, { useEffect, useRef } from "react";

function UploadWidget() {

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
        // get the url from the cloudinary api response
        console.log(result.event, 'this is the result');
        if(result.event === "success"){
            console.log(result.info.url, 'we got the url')
        }
      }
    );
    // console.log(cloudinaryRef.current, "checking return value");
  }, []);
  return (
    <Button onClick={() => widgetRef.current.open()}> Upload Image</Button>
  );
}

export default UploadWidget;
