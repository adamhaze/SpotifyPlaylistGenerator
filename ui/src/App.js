import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./create_acct/CreateAccount";
import SplashPage from "./splash/SplashPage";
import Login from "./login/Login";
import UserHomePage from "./home/UserHomePage";

const App = () =>
  <Router>
  <div>
    <Routes>
      <Route exact path="/" element={<SplashPage/>} />
      <Route exact path="/register" element={<CreateAccount/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/home" element={<UserHomePage/>} />
      {/* <Route element={<CreateAccount/>} /> */}
    </Routes>
  </div>
  </Router>;

export default App;
