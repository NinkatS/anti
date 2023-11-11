import axios from "axios";
import React, { useState } from "react";
import "../App.css";

export default function Header(){

    const [uploadFeed, setUploadFeed] = useState({
        username:"",
        image: null,
        text:""
    })

    function UploadFeed() {
        // FormData ��ü�� ����Ͽ� �̹����� �ؽ�Ʈ �����͸� ������ ����
        const formData = new FormData();
        formData.append('username', uploadFeed.username);
        formData.append('image', uploadFeed.image);
        formData.append('text', uploadFeed.text);

        axios.post("http://localhost:8080/article/new", formData)
        .then((result)=>{
            console.log(result.data);
        })
        .catch((e)=>console.error(e));
    }

    function handleInputChange(e){
        const {name, value, type} = e.target;

        // ���� �Է��� ���
        if (type === 'file') {
          setUploadFeed((prevFeed) => ({ ...prevFeed, [name]: e.target.files[0] }));
        } else {
          // �Ϲ� �Է��� ���
          setUploadFeed((prevFeed) => ({ ...prevFeed, [name]: value }));
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        UploadFeed();
    }

    return(
        <>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="username"
          value={uploadFeed.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="file"
          name="image"
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <textarea
          name="text"
          value={uploadFeed.text}
          onChange={handleInputChange}
          placeholder="Text"
        ></textarea>
        <button type="submit">Upload Contents</button>
      </form>
        </>
    )
}
