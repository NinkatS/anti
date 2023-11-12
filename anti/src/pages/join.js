// Join.js

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (account.username && account.password) {
      axios
        .post("http://localhost:8080/join", account)
        .then((result) => {
          console.log(JSON.stringify(result.data));
          if (result.data.status === "success") {
            // Assuming you want to redirect to "/main" after successful registration
            navigate("/main");
          }
        })
        .catch((error) => {
          console.error("Error during registration:", error);
        });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
