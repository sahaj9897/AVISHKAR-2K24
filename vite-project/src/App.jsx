
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/RegisterDoctor.jsx"

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/RegisterDoctor' element={<Register></Register>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  ) ;
}

export default App;
