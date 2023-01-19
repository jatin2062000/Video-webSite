import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import React from 'react'
import Headers from "./components/Header"
import Home from "./components/Home"
import Footer from './components/Footer';
import Video from './components/Videod';
import Upload from './components/Upload';
import Signup from './components/SignUp';
import Login from './components/Login';
function App() {
  return (
    <Router>
 <Headers/>
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/video" element={<Video/>}/>
  <Route path="/upload" element={<Upload/>}/>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Routes>
<Footer/>
    </Router>
  )
}

export default App