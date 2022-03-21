import ChangeTheme from "./ChangeTheme";

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/library">Library</a></li>
                        <li><a href="/library">Prompts</a></li>
                        <li><a href="/interactivity">Interactivity</a></li>
                        <li><a href="#"><ChangeTheme/></a></li>
                    </ul>
                </div>
            </nav>
            <hr />
        </header>
     );
}
 
export default Navbar;