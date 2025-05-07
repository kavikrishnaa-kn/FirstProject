import Nav from '../components/navbar.jsx';
import {Outlet} from 'react-router-dom';

const NavLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav/>
            <main className='flex-1 w-full'>
                <Outlet/>
            </main>
        </div>
    )
}

export default NavLayout