import ChangeTheme from "./ChangeTheme";
import {Link} from 'react-router-dom';
const Navbar = () => {

    const handleToggle = () =>{
        let navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    return ( 
        <header>
            <nav>
                <div className="brand-name">Adeyemi Writes</div>
                <p  className="nav-toggler" onClick={handleToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </p>
                <div className="nav-links">
                    <ul>
                        <li><Link className="react-anchor" to="/">Home</Link></li>
                        <li><Link className="react-anchor" to="/">Library</Link></li>
                        <li><Link className="react-anchor" to="/interactivity">Interactivity</Link></li>
                        <li><Link className="react-anchor" to="/featured">Favourite Poets</Link></li>
                        <li><span><ChangeTheme/></span></li>
                    </ul>
                </div>
            </nav>
            <hr />
        </header>
     );
}
 
export default Navbar;