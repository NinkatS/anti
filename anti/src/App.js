import React, { useEffect } from 'react';
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

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
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
                <Header />
                <Mypage />
                <Footer />
              </>
            }
          />
          <Route
            path="/imageshuffle"
            element={
              <>
                <ImageShuffle />
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
