import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';


import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from './pages/Mypage';

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
