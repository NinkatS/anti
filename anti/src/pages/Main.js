import React, { useState,useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import axios from "axios"

export default function Main(){
    
    const [Feed, SetFeed] = useState({
        userName:"",
        
    })

    function getUserFeed(event){
        event.preventDefault();
        axios.get("http://43.202.9.254:8080/join",Feed)
        .then((result)=>{
            console.log(result.data);
        })
    }

    return(
        <>
        asd
        </>
    )
}