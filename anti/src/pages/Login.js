import axios from "axios";
import React, { useState } from "react";

export default function Login(){

    const [account, setAccount] = useState({
        username:"",
        password:""
    })

    const [authorization, setAuthorization] = useState(""); // authorization¿¡ acessToken
    const setUserAuth = (token) => {
        setAuthorization(token);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(account.username && account.password) {
            axios.post("http://localhost:8080/join", account)
            .then((result)=>{
                console.log(JSON.stringify(result.data));
                if(result.data.status === "success") {
                    setAccount({ username: account.username, password: account.password });
                    setUserAuth(result.data);
                    console.log(result.data);
                }
            })
            .catch((error) => {
                console.error("Error during login:", error);
            });
        }
    }

    return(
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
    )
}





