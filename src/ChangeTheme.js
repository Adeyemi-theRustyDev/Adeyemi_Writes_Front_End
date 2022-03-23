const ChangeTheme = () => {
    return ( 
        <div className="theme-toggler">
            <label className="switch">
                <input id="theme-toggle" type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
     );
}
 
export default ChangeTheme;