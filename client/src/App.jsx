import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/navbar.jsx"
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';
import NavLayout from './layout/navlayout.jsx';

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
             <Route path = "/" element={<NavLayout/>}>
              <Route index element={<Home/>}/>
             <Route path="login" element={<Login/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="about" element={<About/>}/>
             </Route>
          </Routes>
      </BrowserRouter>
  )
}
export default App