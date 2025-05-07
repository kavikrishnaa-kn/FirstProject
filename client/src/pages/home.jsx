import bgi from '../assets/img/bbg.png';
import Nav from "../components/navbar.jsx";
import {Outlet} from "react-router-dom";
import NavLayout from '../layout/navlayout.jsx';

const Home = () => {
    return(
        <>
            <div className="h-screen w-full bg-cover bg-center bg-red-500 flex items-center justify-center " style={{backgroundImage: `url(${bgi})`, backgroundSize: 'cover'}}>
            </div>
        </>
    )
}

export default Home