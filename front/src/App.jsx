import React from "react";
import './App.css'
import FormContact from './components/FormContact/FormContact'
import MainHome from './components/MainHome/MainHome'
import Navbar from './components/Navbar/Navbar'
import ScrollBars from './components/ScrollBars/ScrollBars'
import Home from "./views/Home/Home";
import AboutMe from "./views/AboutMe/AboutMe";
import Education from "./views/Education/Education";
import Jobs from "./views/Jobs/Jobs";
import Skills from "./views/Skills/Skills";
import { Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <div>
      <Navbar/>
      <ScrollBars/>
      <Routes>
        <Route path="/Contact" element={<FormContact/>}/>
      </Routes>
        <Home/>
        <AboutMe/>
        <Jobs/>
        <Education/>
        <Skills/>
    </div>
  )
}

export default App
