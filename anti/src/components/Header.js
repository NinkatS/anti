import axios from "axios";
import React, { useState } from "react";
import "../App.css";


export default function Header(){

    const [uploadFeed, setUploadFeed] = useState({
        userid:"",
        image:"",
        text:""
    })

    function UploadFeed() {
        axios.post("http://localhost:8080/")
        .then((result)=>{
            console.log(result.data)
        })
    }

    return(
        <>
        <a className="text-2xl text-blue-400">
        asd
        </a>
        </>
    )
}