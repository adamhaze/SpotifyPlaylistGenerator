import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./create_acct/CreateAccount";
import SplashPage from "./splash/SplashPage";
import Login from "./login/Login";
import UserHomePage from "./home/UserHomePage";
import DisplayGeneratedPlaylist from "./home/DisplayGeneratedPlaylist";
import AccountInfo from "./home/AccountInfo";

const App = () =>
  <Router>
  <div>
    <Routes>
      <Route exact path="/" element={<SplashPage/>} />
      <Route exact path="/register" element={<CreateAccount/>} />
      <Route exact path="/userLogin" element={<Login/>} />
      <Route exact path="/home" element={<UserHomePage/>} />
      <Route exact path="/generated" element={<DisplayGeneratedPlaylist/>} />
      <Route exact path="/account" element={<AccountInfo/>} />
      {/* <Route element={<CreateAccount/>} /> */}
    </Routes>
  </div>
  </Router>;

export default App;
