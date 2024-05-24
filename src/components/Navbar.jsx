import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav className="navbar">
            <div className='kalvium'>
                <Link to="/" className="nav-link">Kalvium</Link>
            </div>
            <div className='links'>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contacts" className="nav-link">Contacts</Link>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;