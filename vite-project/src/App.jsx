
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/login.jsx";
import RegisterDoctor from "./pages/RegisterDoctor.jsx"
import RegisterPatient from './pages/RegisterPatient.jsx';

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/RegisterDoctor' element={<RegisterDoctor></RegisterDoctor>}></Route>
      <Route path='/RegisterPatient' element={<RegisterPatient></RegisterPatient>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  ) ;
}

export default App;
