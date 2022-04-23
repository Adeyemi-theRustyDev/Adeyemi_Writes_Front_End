// Dark mode scripts
document.addEventListener('DOMContentLoaded', ()=>{
    const styleSheet = document.querySelector('#stylesheet');
    const themeName = document.querySelector('#theme-name');

    const storedTheme = localStorage.getItem('theme');
    const storedThemeName = localStorage.getItem('themename');

    if (storedTheme){
        styleSheet.href = storedTheme;
    }

    if(storedThemeName){
        themeName.innerText = storedThemeName;
    }
  
    const toggleTheme = document.querySelector('#theme-toggle');
    const slider = document.querySelector('.round');
    toggleTheme.addEventListener('change', ()=>{
      if (styleSheet.href.includes('light')){
            styleSheet.href = 'dark-theme.css';
            themeName.innerText = 'Dark Mode';
      }
      else{
          styleSheet.href = 'light-theme.css';
          themeName.innerText = 'Light Mode';
      }
  
      localStorage.setItem('theme', styleSheet.href);
      localStorage.setItem('themename', themeName.innerText);
  })
  })