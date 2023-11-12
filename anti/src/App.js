import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageShuffle from './components/Imageshuffle';
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from './pages/Mypage';
import Join from './pages/join';

function App() {
  useEffect(() => {
    const disablePrint = () => {
      window.onbeforeprint = function() {
        return false;
      };
    };

    // 호출된 후에 한 번만 실행하도록
    disablePrint();

    // unmount될 때 리셋
    return () => {
      window.onbeforeprint = null;
    };
  }, []);

  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [authorization, setAuthorization] = useState(""); // authorization¿¡ accessToken
  const setUserAuth = (token) => {
    setAuthorization(token);
  };

  function getLogin(){
    axios.get("http://localhost:8080/login", account)
    .then((res)=>{
      console.log(JSON.stringify(res.data));
      if(res.data.status === "success"){
        setAccount({username: account.username, password:account.password});
        setAccount({ username: account.username, password: account.password });
        setUserAuth(res.data);
        console.log(res.data);
      }
    })
    return(
      <></>
    )
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header account={account} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/mypage"
            element={
              <>
                <Header account={account} />
                <Mypage />
                <Footer />
              </>
            }
          />
          <Route
            path="/imageshuffle"
            element={
              <>
                <ImageShuffle account={account} />
                <Footer />
              </>
            }
          />
          <Route path='/join' element={ <Join />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
