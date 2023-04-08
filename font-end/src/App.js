import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Home from "./components/pages/Home/Home";
import Admin from './components/pages/admin/Admin';
import AccountManagement from './components/pages/admin/AccountManagement';
import NewsDetail from './components/pages/Home/newsDetail/NewsDetail';

import { dummyDataNews } from './components/dummyData/dummyData';
function App() {
  const newsList = [...dummyDataNews];
  const isLogin = !!localStorage.getItem('access-token');
  
  return (
    <Router className = "app">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path='/home' element={isLogin ? <Home/> : <Navigate to='/'/>}/>
          <Route path='/admin/news' element={isLogin ? <Admin/> : <Navigate to='/'/>}/>
          <Route path='/admin/users' element={isLogin ? <AccountManagement/> : <Navigate to='/'/>}/>
          {newsList.map((news, index) => 
            <Route key={index} path={`/news/${news.id}`} element={ 
              isLogin ? <NewsDetail news={news} /> : <Navigate to='/'/>
            }></Route>
          )}
        </Routes>
    </Router>
  );
}

export default App;
