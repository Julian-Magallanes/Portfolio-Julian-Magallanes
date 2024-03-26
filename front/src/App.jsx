import React from "react";
import './App.css'
import FormContact from './components/FormContact/FormContact'
import Navbar from './components/Navbar/Navbar'
import ScrollBars from './components/ScrollBars/ScrollBars'
import Home from "./views/Home/Home";
import AboutMe from "./views/AboutMe/AboutMe";
import Education from "./views/Education/Education";
import Jobs from "./views/Jobs/Jobs";
import Skills from "./views/Skills/Skills";
import { Route, Routes } from "react-router-dom";
import FullPage from '@fullpage/react-fullpage';
import ReactFullpage from '@fullpage/react-fullpage';
function App() {
  
  return (
    <div >
      <Navbar/>
      <ScrollBars/>
      <Routes>
        <Route path="/Contact" element={<FormContact/>}/>
      </Routes>
      
      <div className="container">
        <Home />
        <AboutMe />
        <Jobs/>

        <Education/>
        <Skills/>
      </div>
    </div>
  )
}

export default App

{/*import Fullpage, {FullPageSections, FullpageSection} from "@ap.cx/react-fullpage"
function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/Contact" element={<FormContact/>}/>
      </Routes>
      <Fullpage>
        <FullPageSections>
        <Navbar/>
        <ScrollBars/>
          <FullpageSection>
            <Home />
          </FullpageSection>
          <FullpageSection>
            <AboutMe />
          </FullpageSection>
          <FullpageSection>
            <Jobs/>
          </FullpageSection>
          <FullpageSection>
            <Education/>
          </FullpageSection>
          <FullpageSection>
          <Skills/>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  )
}*/}