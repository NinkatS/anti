import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Mypage(){
    
    const [myFeed, setMyFeed] = useState({
        username:"",
        profile:"",
    })

    const [myinfo, setMyInfo] = useState("")

    useEffect(()=>{
        handleGet();
    }, [])

    function handleGet(){
        axios.get("http://localhost:8080/", myFeed)
        .then((result)=>{
            console.log(result.data);
            setMyInfo(result.data);
        })
    }

    function handleUpload() {
        const formData = new FormData();
        formData.append("username", myFeed.username);
        formData.append("profile", myFeed.profile);
    
        axios.post("http://localhost:8080/upload", formData).then((result) => {
          console.log(result.data);
        });
      }

    function handleChange(event) {
        const file = event.target.files[0];
    
        // Display the selected image (optional)
        const reader = new FileReader();
        reader.onload = (e) => {
          // Assuming you have an image element to display the preview
          const previewImage = document.getElementById("previewImage");
          previewImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    
        // Set the selected image in the state
        setMyFeed((prevFeed) => ({ ...prevFeed, profile: file }));
      }
    
    return(
        <div>
        <h2>{myFeed.username}</h2>
        {myFeed.profile && <img src={myFeed.profile} alt="Profile" />}
        <input type="file" accept="image/*" onChange={handleChange} />
        <button onClick={handleUpload}>Upload Image</button>
      </div>
    )
}