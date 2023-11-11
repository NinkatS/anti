import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Main(){
    
    const [feed, SetFeed] = useState({
        userid:"",
        BlurImage:"",
        text:""
    })

    useEffect(()=>{
        getUserFeed();
    }, [])


    function getUserFeed(event){
        event.preventDefault();
        axios.get("http://localhost:8080/",feed)
        .then((result)=>{
            console.log(result.data);
        })
        .catch((e)=>console.log(e))
    }

    return(
        <div>
        {feed.map((feed, index) => (
          <div key={index} className="card">
            {feed.userid && <p>User ID: {feed.userid}</p>}
            {feed.BlurImage && <img src={feed.BlurImage} alt="Blurred" />}
            {feed.text && <p>{feed.text}</p>}
          </div>
        ))}
      </div>
    )
}