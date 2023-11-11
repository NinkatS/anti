import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageShuffle from './components/Imageshuffle';
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from './pages/Mypage';

function App() {
  useEffect(() => {
    const disablePrint = () => {
      window.onbeforeprint = function() {
        return false;
      };
    };

    // ȣ��� �Ŀ� �� ���� �����ϵ���
    disablePrint();

    // unmount�� �� ����
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
