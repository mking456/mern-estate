import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Profile from "./pages/profile";
import About from "./pages/about";
import Home from "./pages/home";
import Sign from "./pages/sign";
import Header from "./components/Header";

export default function App() {
  return(
   <BrowserRouter>
   <Header/>
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/sign-in" element={<Sign />} /> 
    <Route path="/sign-up" element={<SignUp />} /> 
    <Route path="/about" element={<About />} /> 
    <Route path="/profile" element={<Profile />} />  
  </Routes>
  </BrowserRouter>
  )
}
