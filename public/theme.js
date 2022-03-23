// Dark mode scripts
document.addEventListener('DOMContentLoaded', ()=>{
    const styleSheet = document.querySelector('#stylesheet');
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme){
        styleSheet.href = storedTheme;
    }
  
    const toggleTheme = document.querySelector('#theme-toggle');
    const slider = document.querySelector('.round');
    toggleTheme.addEventListener('change', ()=>{
      if (styleSheet.href.includes('light')){
            styleSheet.href = 'dark-theme.css';
      }
      else{
          styleSheet.href = 'light-theme.css';
      }
  
      localStorage.setItem('theme', styleSheet.href);
  })
  })