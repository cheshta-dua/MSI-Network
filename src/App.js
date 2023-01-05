import {BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Login from "./pages/Login/LoginPage";
import CompProfile from "./pages/CompleteProfile/CompProfile";
import LandingPage from "./pages/LandingPage/LandingPage";
import FacultyPage from "./pages/FacultyPage/FacultyPage";
// import CollegePage from "./pages/abtCollege/College";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/complete-your-profile" element={<CompProfile/>}/>
      <Route path="/Landing-page" element={<LandingPage />}/>
      <Route path="/faculty" element={< FacultyPage />}/>
      {/* <Route path="/college" element={<CollegePage />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
