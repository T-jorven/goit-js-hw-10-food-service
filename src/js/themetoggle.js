import { theme } from './themelib'



const themeToggle = document.querySelector('#theme-switch-toggle');
const THEME_KEY = 'current-theme';



//LISTENERS
themeToggle.addEventListener("change", changeTheme);



//FUNCTIONS

const themesChange = (prevTheme, newTheme, itemKey, status) => {
  document.body.classList.remove(prevTheme)
  document.body.classList.add(newTheme)
  localStorage.setItem(itemKey, newTheme)
  themeToggle.checked = status

}


const setLightTheme = () => {
 themesChange(theme.DARK, theme.LIGHT, THEME_KEY, false)
}


const setDarkTheme = () => {
 themesChange(theme.LIGHT, theme.DARK, THEME_KEY, true)
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