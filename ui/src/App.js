import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CreateAccount from "./create_acct/CreateAccount";
import SplashPage from "./splash/SplashPage"

const App = () =>
  <Router>
  <div>
    <Routes>
      <Route exact path="/" element={<SplashPage/>} />
      <Route exact path="/register" element={<CreateAccount/>} />
      <Route element={<CreateAccount/>} />
    </Routes>
  </div>
  </Router>;

export default App;
