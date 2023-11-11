import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [authorization, setAuthorization] = useState(""); // authorization¿¡ accessToken
  const setUserAuth = (token) => {
    setAuthorization(token);
  };

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (account.username && account.password) {
      axios
        .post("http://localhost:8080/join", account)
        .then((result) => {
          console.log(JSON.stringify(result.data));
          if (result.data.status === "success") {
            setAccount({ username: account.username, password: account.password });
            setUserAuth(result.data);
            console.log(result.data);

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className=""
          value={account.username}
          placeholder="userName"
          onChange={(e) => setAccount({ ...account, username: e.target.value })}
        />

        <input
          type="password"
          className=""
          value={account.password}
          placeholder="password"
          onChange={(e) => setAccount({ ...account, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    

//     <div className="w-96 h-96 relative bg-slate-50">
//   <div className="w-96 h-96 left-[736px] top-[180px] absolute">
//     <div className="w-48 h-20 left-[143.30px] top-[-0px] absolute text-sky-400 text-6xl font-semibold font-['Poppins']">Sign in</div>
//     <div className="w-52 h-5 left-[140.29px] top-[453.14px] absolute"><span className="text-black text-opacity-70 text-base font-normal font-['Poppins'] leading-snug tracking-wide">New to Our Site? </span><span className="text-sky-400 text-base font-normal font-['Poppins'] leading-snug tracking-wide">Register</span></div>
//     <div className="w-56 h-10 left-[130.27px] top-[366.48px] absolute bg-sky-400 rounded" />
//     <div className="w-32 h-5 left-[180.38px] top-[377.32px] absolute text-white text-base font-semibold font-['Poppins'] leading-snug">Create Account</div>
//     <div className="w-96 h-12 left-0 top-[158.87px] absolute bg-cyan-200 rounded" />
//     <div className="w-7 h-3.5 left-[18.04px] top-[166.09px] absolute text-black text-opacity-50 text-xs font-light font-['Poppins']">Email</div>
//     <div className="w-44 h-4 left-[18.04px] top-[184.15px] absolute text-black text-xs font-normal font-['Poppins']">farmanjaved2001@gmail.com</div>
//     <div className="w-96 h-12 left-0 top-[249.14px] absolute">
//       <div className="w-96 h-12 left-0 top-0 absolute bg-slate-200 rounded shadow border border-sky-300" />
//       <div className="w-12 h-3.5 left-[18.04px] top-[7.22px] absolute text-sky-400 text-xs font-light font-['Poppins']">Password</div>
//       <div className="w-20 h-4 left-[18.04px] top-[25.27px] absolute text-black text-xs font-normal font-['Poppins']">**************</div>
//     </div>
//   </div>
//   <img className="w-96 h-96 left-[-337px] top-[-25px] absolute" src="https://via.placeholder.com/952x1190" />
//   <div className="w-36 h-96 left-[540px] top-[74px] absolute">
//     <img className="w-36 h-96 left-0 top-[0.45px] absolute" src="https://via.placeholder.com/150x684" />
//     <img className="w-36 h-96 left-0 top-0 absolute" src="https://via.placeholder.com/150x684" />
//   </div>
// </div>

  );
}
