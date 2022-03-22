const ChangeTheme = () => {
    return ( 
        <div className="theme-toggler">
            <label class="switch">
                <input id="theme-toggle" type="checkbox"/>
                <span class="slider round"></span>
            </label>
        </div>
     );
}
 
export default ChangeTheme;