import logo from './logo.svg';
import React from "react";
import './App.css';
import CreateAccount from "./create_acct/CreateAccount";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const App = () =>
  <Router>
  <div>
    <Routes>
      <Route exact path="/" element={<CreateAccount/>} />
      <Route element={<CreateAccount/>} />
    </Routes>
  </div>
  </Router>;

export default App;
