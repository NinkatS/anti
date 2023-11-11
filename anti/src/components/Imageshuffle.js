import axios from "axios";
import React, { useState } from "react";
import "../App.css";

export default function ImageShuffle() {
  const [imageData, setImageData] = useState({
    crop01: "",
    crop02: "",
    crop03: "",
    crop04: "",

    crop11: "",
    crop12: "",
    crop13: "",
    crop14: "",

    crop21: "",
    crop22: "",
    crop23: "",
    crop24: "",

    crop31: "",
    crop32: "",
    crop33: "",
    crop34: "",
  });

  function getImage(event) {
    event.preventDefault();
    const uri = "http://localhost:8080/images?imageId=1";
    axios.get(uri, imageData)
      .then((result) => {
        console.log(result.data);
        setImageData(result.data); // 이미지 데이터 업데이트
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  }

  return (
    <div>

      {/* 여기서 이미지를 보여주는 로직 추가 */}
      <img src={imageData.crop01} alt="Crop 01" />
      <img src={imageData.crop02} alt="Crop 02" />
      <img src={imageData.crop03} alt="Crop 03"/>
      <img src={imageData.crop04} alt="Crop 04"/>

      <img src={imageData.crop11} alt="Crop 11"/>
      <img src={imageData.crop12} alt="Crop 12"/>
      <img src={imageData.crop13} alt="Crop 13"/>
      <img src={imageData.crop14} alt="Crop 14"/>

      <img src={imageData.crop21} alt="Crop 21"/>
      <img src={imageData.crop22} alt="Crop 22"/>
      <img src={imageData.crop23} alt="Crop 23"/>
      <img src={imageData.crop24} alt="Crop 24"/>

      <img src={imageData.crop31} alt="Crop 31"/>
      <img src={imageData.crop32} alt="Crop 32"/>
      <img src={imageData.crop33} alt="Crop 33"/>
      <img src={imageData.crop34} alt="Crop 34"/>

    <button onClick={getImage}>Get Image</button>
      {/* 나머지 crop 이미지도 동일하게 추가 */}
    </div>
  );
}
