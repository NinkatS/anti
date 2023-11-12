// Login.js

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [authorization, setAuthorization] = useState(""); // authorization¿¡ accessToken


  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (account.username && account.password) {
      axios
        .post("http://localhost:8080/login", account)
        .then((result) => {
          console.log(JSON.stringify(result.headers));
          if (result.headers) {
            setAccount({ username: account.username, password: account.password });
            localStorage.setItem("token", result.headers["authorization"])
            console.log(localStorage);
            console.log(result.headers);

            localStorage.setItem("account", JSON.stringify(account));
            navigate("/main", { state: { account } });
          
            console.log(account);
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            value={account.username}
            placeholder="Enter your username"
            onChange={(e) => setAccount({ ...account, username: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            value={account.password}
            placeholder="Enter your password"
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
        <div className="mt-4 text-center">
        <p className="text-gray-600">Don't have an account?</p>
        <button
          onClick={() => navigate("/join")}
          className="text-blue-500 underline cursor-pointer"
        >
          Sign Up
        </button>
      </div>
      </form>
    </div>
  );
}
