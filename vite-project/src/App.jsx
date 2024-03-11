
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/Register.jsx"

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  ) ;
}

export default App;
