const Error = () => {
    return ( 
        <div className="error-page">
            <div className="errorImage">
            <img src="images/Logosmall.png" alt="" />
            </div>
            <p> <span>Error! Error!</span> The Page you are looking for can not be found.</p>
            <a href="/home">go back to the home page</a>
        </div>
     );
}
 
export default Error;