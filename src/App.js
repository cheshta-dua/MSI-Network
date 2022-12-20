import {BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Login from "./pages/Login/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/complete-your-profile" element={<div>complete-your profile</div>}/>
      <Route path="/upload-resume-page" element={<div>upload resume</div>}/>
      <Route path="/Landing page" element={<div>landing page</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
