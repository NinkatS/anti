import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

export default function Header({ account }) {
  const [uploadFeed, setUploadFeed] = useState({
    image: null,
    text: "",
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(!!account?.username);
  const [accountData, setAccountData] = useState({
    username: "",
  });

  const [authorization, setAuthorization] = useState(""); 
  const setUserAuth = (token) => {
    setAuthorization(token);
  };

  useEffect(() => {
    // 페이지 로딩 시 로그인 여부 확인
    getUserLogin();
  }, []);




    function getUserLogin() {
            // 로그인된 사용자 정보를 가져오는 요청을 보내세요.
    axios
    .get("http://localhost:8080/login", {
      authorization: authorization,
    })
      .then((response) => {
      setAccountData({ username: response.data });
      setLoggedIn(true);
      })
      .catch((error) => {
      console.error("Error fetching user information:", error);
      });
    }




  function UploadFeed() {
    const formData = new FormData();
    formData.append("username", account.username);
    formData.append("image", uploadFeed.image);
    formData.append("text", uploadFeed.text);

    axios
      .post("http://localhost:8080/article/new", formData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((e) => console.error(e));
  }

  function handleInputChange(e) {
    const { name, value, type } = e.target;

    if (type === "file") {
      setUploadFeed((prevFeed) => ({ ...prevFeed, [name]: e.target.files[0] }));
    } else {
      setUploadFeed((prevFeed) => ({ ...prevFeed, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    UploadFeed();
  }

  function Modal({ isOpen, onClose, handleSubmit, handleInputChange, uploadFeed }) {
    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal mt-10 mb-10 flex justify-center items-center">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="text" name="username" value={account.username} readOnly />
          <input type="file" name="image" placeholder="Image URL" onChange={handleInputChange} />
          <textarea name="text" placeholder="Text" onChange={handleInputChange}></textarea>
          <button
            className="ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="submit"
          >
            Upload Contents
          </button>
        </form>
        <button
          className="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={onClose}
        >
          Close Modal
        </button>
      </div>
    );
  }

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Anti AI
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            {isLoggedIn ? (
              <>
                <span className="text-gray-800 dark:text-white mr-2">Welcome, {account.username}!</span>
                <button
                  onClick={() => {
                    setLoggedIn(false);
                  }}
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Log in
                </a>

                <a
                  href={isLoggedIn ? "#" : "/login"}
                  className={`text-white ${
                    isLoggedIn
                      ? "bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                      : "bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300"
                  } font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ${
                    isLoggedIn
                      ? "dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      : "dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  }`}
                  onClick={() => {
                    if (!isLoggedIn) {
                      window.location.href = "/login";
                    } else {
                      setModalOpen(!isModalOpen);
                    }
                  }}
                >
                  Get started
                </a>

                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </>
            )}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
              <a
                href={isLoggedIn ? "/mypage" : "/login"}
                className={`text-white ${
                  isLoggedIn
                    ? "bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                    : "bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300"
                } font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ${
                  isLoggedIn
                    ? "dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    : "dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                }`}
              >
                {isLoggedIn ? "Mypage" : "Mypage"}
              </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        uploadFeed={uploadFeed}
      />
    </header>
  );
}
