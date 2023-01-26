import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import { ToastContainer } from 'react-toastify';
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
// import Secure from "./components/Secure/Secure";
import Nav from "./components/Navbar/Nav";
import ChatPage from "./pages/Chat/Chat.js";
// import CollegePage from "./pages/abtCollege/College";
import Secure from "./components/secure";
function App() {
  const [data, setData] = useState(undefined);
  const [loading,setLoading]=useState(false);
  const apicall=async()=>{
    const apiToCall = "http://localhost:5000/user/user";
    const resp = await fetch(`${apiToCall}`);
    const res = await resp.json();  
    // console.log("app=>",res);
    setLoading(false);
    setData(res);
  }
  useEffect(() => {
    setLoading(true);
    apicall();
  }, []);

  return (
    <BrowserRouter>
      {!loading? <Nav dataChangefunc={setData} data={data}/>:null}
      <Routes>
        {!loading?
        <Route path="/chat" element={ <Secure component = {ChatPage} />} />:null} 
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete-your-profile" element={< Secure component = {CompProfile} />} />
        
        <Route path="/Landing-page" element={< Secure component = {LandingPage} dat={data} />} />
        <Route path="/faculty" element={< Secure component = {FacultyPage} />} />
        <Route path="/support" element={< Secure component = {SupportPage} />} />
        <Route path="/Achievers" element={< Secure component = {AchieversPage} />} />
        <Route path="/Societies" element={< Secure component = {SocietiesPage} />} />
        <Route path="/profile" element={<Secure component = {Profile} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
