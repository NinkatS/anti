import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";

function App() {


  return (
    <>
    <Header/>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/mypage" element={<Mypage/>} />
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>

  );
}

export default App;
