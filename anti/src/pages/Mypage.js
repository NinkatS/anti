// Mypage.js

import axios from "axios";
import { useState } from "react";

export default function Mypage() {
  const [myFeed, setMyFeed] = useState({
    username: "name", // Replace with the actual username
    profile: null,
  });

  const [myinfo, setMyInfo] = useState("");

  // useEffect(() => {
  //   handleGet();
  // }, []);

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

    axios.post("http://localhost:8080/upload", formData).then((result) => {
      console.log(result.data);
      // Optionally update the user profile info after successful upload
      // handleGet();
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
