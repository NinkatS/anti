import React, { useState,useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import axios from "axios"

export default function Mypage(){
    
    const [myFeed, setMyFeed] = useState({
        
    })

    function handleGet(event){
        event.preventDefault();
        axios.get("http://43.202.9.254:8080/join", myFeed)
        .then((result)=>{
            console.log(result.data)
        })
    }
    
    return(
        <>
        asd
        </>
    )
}