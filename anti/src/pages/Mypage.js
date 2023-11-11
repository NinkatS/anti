import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Mypage(){
    
    const [myFeed, setMyFeed] = useState({
        username:"",
        profile:"",
        role:""
    })

    useEffect(()=>{
        handleGet();
    }, [])

    function handleGet(){
        axios.get("http://localhost:8080/", myFeed)
        .then((result)=>{
            console.log(result.data)
        })
    }
    
    return(
        <div>
        <h2>{myFeed.username}</h2>
        {myFeed.profile && <img src={myFeed.profile} alt="Profile" />}
        <p>Role: {myFeed.role}</p>
      </div>
    )
}