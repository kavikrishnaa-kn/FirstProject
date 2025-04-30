import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/navbar.jsx"
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';

const App = () => {
  return (
    <>
        <div className="h-screen w-screen flex flex-col items-center justify-center">
      <BrowserRouter>
          <Routes>
             <Route path = "/" element={<Home/>} />
             <Route path="/login" element={<Login/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/about" element={<About/>}/>
          </Routes>
      </BrowserRouter>
        </div>
    </>
  )
}
export default App