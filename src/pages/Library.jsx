import { Link } from "react-router-dom";

const Library = () => {
    const blogs = 'Blogs...';
    return ( 
        <div className="library-home">
            <h1>Library</h1>
            <ul>
                <li><Link to="/poems">Poems</Link></li>
                <li><Link to="/stories">Stories</Link></li>
            </ul>
            <div className="library-blogs">
                {blogs}
            </div>
        </div>
     );
}
 
export default Library;