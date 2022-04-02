const ChangeTheme = () => {
    return ( 
        <div className="theme-toggler">
            <label className="switch">
                <input id="theme-toggle" type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <span id="theme-name" className="theme-togglertext" >Dark Mode</span>
        </div>
     );
}
 
export default ChangeTheme;