import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Main() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getUserFeeds();
  }, []);

  function getUserFeeds() {
    axios.get("http://localhost:8080/")
      .then((result) => {
        console.log(result.data);
        setFeeds(result.data);
      })
      .catch((error) => {
        console.error("Error getting user feeds:", error);
      });
  }

  return (
    <div>
        <div className="card">
          {feeds.username && <p>User ID: {feeds.username}</p>}
          {feeds.BlurImage && <img src={feeds.BlurImage} alt="Blurred" />}
          {feeds.text && <p>{feeds.text}</p>}
        </div>
    </div>
  );
}
