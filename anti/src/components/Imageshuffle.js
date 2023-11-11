import axios from "axios";
import React, { useState } from "react";
import "../App.css";

export default function ImageShuffle(){

    const [imageData, setImageData] = useState({
        crop01:"",
        crop02:"",
        crop03:"",
        crop04:"",

        crop11:"",
        crop12:"",
        crop13:"",
        crop14:"",

        crop21:"",
        crop22:"",
        crop23:"",
        crop24:"",

        crop31:"",
        crop32:"",
        crop33:"",
        crop34:""
    })

    function getImage(event){
        event.preventDefault();
        const uri = `http:localhst:8080/images?imageId=1`
        axios.get(uri,imageData)
        .then((result)=>{
            console.log(result.data);
            setImageData(result);
        })
    }

    return(
        <>
        <a>asd</a>
        </>
    )
}