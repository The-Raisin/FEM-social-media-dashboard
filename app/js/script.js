const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');


const setColorMode = () => {
    if (localStorage.getItem("colorMode") == "dark"){
        setDarkMode();
        darkBtn.click();
    } else if (localStorage.getItem("colorMode") == "light"){
        setLightMode();
        lightBtn.click();
    }
};

const setDarkMode = () => {
    (document.querySelector("body").classList = "dark");
}

const setLightMode = () => {
    (document.querySelector("body").classList = "light");
}

setColorMode()

const radioBtn = document.querySelectorAll(".toggle__wrapper input");

for (let i = 0; i < radioBtn.length; i++){
    radioBtn[i].addEventListener("click", event => {
        if (darkBtn.checked) {
            localStorage.setItem("colorMode", "dark");
            setDarkMode();
        } else {
            localStorage.setItem("colorMode", "light");
            setLightMode();
        }
    })
}

