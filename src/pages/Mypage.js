// Mypage.js

import axios from "axios";
import { useEffect, useState } from "react";

export default function Mypage() {
  const [myFeed, setMyFeed] = useState({
    username: "", // Initialize with an empty string
    profile: null,
  });

  const [myInfo, setMyInfo] = useState("");

  useEffect(() => {
    // Read username from cookie when the component mounts
    const username = getCookie("username");
    handleGet(); // Fetch additional user information
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  // Function to get cookie value by name
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  function handleGet() {
    const uri = `http://localhost:8080/${myFeed.username}`;

    axios.get(uri, myFeed).then((result) => {
      console.log(result.data);
      setMyInfo(result.data);
    });
  }

  function handleUpload() {
    const formData = new FormData();
    formData.append("username", myFeed.username);
    formData.append("profile", myFeed.profile);

    axios.post("http://localhost:8080/profile", formData)
      .then((result) => {
        console.log(result.data);
        // 선택한 프로필 사진을 업로드 후에도 계속 표시하려면 아래 줄을 주석 처리하세요
        // setMyFeed((prevFeed) => ({ ...prevFeed, profile: null }));
        // 필요에 따라 업로드 후에 사용자 프로필 정보를 업데이트할 수 있습니다
        // handleGet();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleChange(event) {
    const file = event.target.files[0];

    // Display the selected image (optional)
    const reader = new FileReader();
    reader.onload = (e) => {
      const previewImage = document.getElementById("previewImage");
      if (previewImage) {
        previewImage.src = e.target.result;
      }
    };
    reader.readAsDataURL(file);

    setMyFeed((prevFeed) => ({ ...prevFeed, profile: file }));
  }

  return (
    <div className="mt-10 max-w-2xl mx-auto p-8 bg-white rounded shadow">
      <div className="flex items-center justify-center mb-8">
        {myFeed.profile ? (
          <img
            id="previewImage"
            src={URL.createObjectURL(myFeed.profile)}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">{myFeed.username}</h2>

      {/* Additional user information can be displayed here (e.g., bio, posts, followers, etc.) */}
      <p>{myInfo}</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="mt-4"
      />
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Change Profile Photo
      </button>
    </div>
  );
}
