import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full bg-transparent">
            <div className="h-[10vh] w-[90vw] mx-auto rounded-lg flex flex-row gap-10 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 mt-2">
                <div className="w-[55vw] text-5xl font-extrabold font-kaushan text-transparent bg-clip-text bg-gradient-to-r from-red-1000 via-pink-200 to-purple-400 rounded-l-lg flex flex-col items-center justify-center">
                    GAMESURF
                </div>
                <Link to="/" className="w-[5vw] bg-transparent text-white hover:text-lg hover:text-[#dedcff] hover:font-bold duration-100 flex items-center justify-center text-center">Home</Link>
                <Link to="/login" className="w-[5vw] bg-transparent text-white hover:text-lg hover:text-[#dedcff] hover:font-bold duration-100 flex items-center justify-center text-center">Login</Link>
                <Link to="/contact" className="w-[5vw] bg-transparent text-white hover:text-lg hover:text-[#dedcff] hover:font-bold duration-100 flex items-center justify-center text-center">Contact</Link>
                <Link to="/about" className="w-auto bg-transparent text-white hover:text-lg hover:text-[#dedcff] hover:font-bold duration-100 flex items-center justify-center text-center">About Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
