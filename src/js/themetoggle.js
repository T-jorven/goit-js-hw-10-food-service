import { theme } from './themelib'



const themeToggle = document.querySelector('#theme-switch-toggle');
const THEME_KEY = 'current-theme';



//LISTENERS
themeToggle.addEventListener("change", changeTheme);



//FUNCTIONS
const setLightTheme = () => {
  document.body.classList.remove(theme.DARK)
  document.body.classList.add(theme.LIGHT)
  localStorage.setItem(THEME_KEY, theme.LIGHT)
  themeToggle.checked = false
}

const setDarkTheme = () => {
  document.body.classList.remove(theme.LIGHT)
  document.body.classList.add(theme.DARK)
  localStorage.setItem(THEME_KEY, theme.DARK)
  themeToggle.checked = true
}

//on toggle state change
function changeTheme({target}) {
    if (target.checked) {
    setDarkTheme()
  } else {
    setLightTheme()
  }
}

//use localstorage item
const selectedTheme = ({ DARK }) => { 
    const defaultTheme = localStorage.getItem(THEME_KEY);

     switch (defaultTheme) {
    case DARK:
      setDarkTheme()
      break;

    default:
      setLightTheme();
  }
}

selectedTheme(theme);