import { Link } from "react-router-dom";

const Library = () => {
    return ( 
        <div className="library-home">
            <h1>Library</h1>
            <ul>
                <li><Link to="/poems">Poems</Link></li>
                <li><Link to="">Stories</Link></li>
                <li><Link to="">Blogs</Link></li>
            </ul>
        </div>
     );
}
 
export default Library;