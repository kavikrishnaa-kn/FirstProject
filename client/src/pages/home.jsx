import bgi from '../assets/img/bbg.png';
import Nav from "../components/navbar.jsx";

const Home = () => {
    return(
        <>
            <div className="h-screen w-screen flex flex-row justify-center " style={{backgroundImage: `url(${bgi})`, backgroundSize: 'cover'}}>
                <Nav />
            </div>
        </>
    )
}

export default Home