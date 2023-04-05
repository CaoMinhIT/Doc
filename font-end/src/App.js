import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Home from "./components/pages/Home/Home";
import Admin from './components/pages/admin/Admin';

function App() {
  return (
    <Router className = "app">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/admin/news' element={<Admin/>}/>
        </Routes>
    </Router>
  );
}

export default App;
