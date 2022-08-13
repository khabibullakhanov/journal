import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Companenta/Navbar/Navbar";
import { Home } from './Pages/Home/Home'
import { AddStudents } from "./Pages/AddStudents/AddStudents";
import { Journal } from "./Pages/Journal/Journal";
import { Students } from "./Pages/Students/Students";
import { HeaderTop } from "./Companenta/HeaderTop/HeaderTop";
import { Login } from "./Pages/Login/Login";
import { useSelector } from "react-redux";
// import { Backdrop, CircularProgress } from "@mui/material";
// import { acLoading } from "./Redux/Loading";




const pass = { login: "asd", password: "asd" };
localStorage.setItem("server", JSON.stringify(pass));


function App() {
  const loading = useSelector((state) => state.reLoading);
  const [login, setLogin] = useState(false);
  const server = JSON.parse(localStorage.getItem("server"));
  const auth = JSON.parse(localStorage.getItem("auth")) || {};

  useEffect(() => {
    if (server.login === auth.login && server.password === auth.password) {
      setLogin(true);
    }
    return ;
  }, []);

  return (
    <>
      {
        login ?
          <div className="App" >
            <Router>
              <div className="left-bar">
                <Navbar />
              </div>
              <div className="right-bar">
                <div>
                  <HeaderTop />
                </div>
                <div>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addStudents" element={<AddStudents />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </div>
              </div>
            </Router>
          </div>
          :
          <Login setLogin={setLogin} />
      }
      {/* <Backdrop sx={{ color: "#fff", zIndex: "99999999999999" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop> */}
    </>
  );
}

export default App;
