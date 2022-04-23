import {Link } from 'react-router-dom';
const Error = () => {
    return ( 
        <div className="error-page">
            <p> <span>Error! Error!</span> The Page you are looking for can not be found.</p>
            <Link to="/">go back to the home page</Link>
        </div>
     );
}
 
export default Error;