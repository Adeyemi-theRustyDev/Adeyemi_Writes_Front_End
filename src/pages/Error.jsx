import {Link } from 'react-router-dom';
const Error = () => {
    return ( 
        <div className="error-page">
            <div className="errorImage">
            <img src="images/Logosmall.png" alt="" />
            </div>
            <p> <span>Error! Error!</span> The Page you are looking for can not be found.</p>
            <Link to="/">go back to the home page</Link>
        </div>
     );
}
 
export default Error;