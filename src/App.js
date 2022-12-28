import {BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Login from "./pages/Login/LoginPage";
import CompProfile from "./pages/CompleteProfile/CompProfile";
import ResumeAdd from "./pages/UploadResume/ResumeAdd";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/complete-your-profile" element={<CompProfile/>}/>
      <Route path="/upload-resume-page" element={<ResumeAdd />}/>
      <Route path="/Landing-page" element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
