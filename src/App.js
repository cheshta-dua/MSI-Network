import { useState,useEffect } from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import { ToastContainer} from 'react-toastify';
import About from "./pages/AboutUs/About";
import Login from "./pages/Login/LoginPage";
import CompProfile from "./pages/CompleteProfile/CompProfile";
import LandingPage from "./pages/LandingPage/LandingPage";
import FacultyPage from "./pages/FacultyPage/FacultyPage";
import SupportPage from "./pages/SupportPage/SupportPage";
import AchieversPage from "./pages/AchieversPage/AchieversPage";
import SocietiesPage from "./pages/SocietiesPage/SocietiesPage";
import Profile from "./pages/UserProfile/Profile";
import { alumniData } from "./Resorce/data";
import Secure from "./components/Secure/Secure";
import Nav from "./components/Navbar/Nav";
import ChatPage from "./pages/ChatPage/ChatPage";
// import CollegePage from "./pages/abtCollege/College";
function App() {
  const [data,setData]=useState(alumniData);
    useEffect(()=>{
        setData(alumniData);
    },[]);
    
  return (
    <BrowserRouter>
    <Nav dataChangefunc={setData}/>
      <Routes>
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/complete-your-profile" element={ <CompProfile/>}/>
      <Route path="/Landing-page" element={ <LandingPage data={data}/>}/>
      <Route path="/faculty" element={ < FacultyPage />}/>
      <Route path="/support" element={< SupportPage />}/>
      <Route path="/Achievers" element={< AchieversPage />}/>
      <Route path="/Societies" element={< SocietiesPage />}/>
      <Route path="/profile" element={<Profile />}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
