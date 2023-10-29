activateCalculator = () => {
    let appIcons = document.getElementsByClassName("btn-app");
    let calcArea = document.getElementsByClassName("container-calculator");
    let appTitle = document.getElementsByClassName("app-title")
    let appReturn = document.getElementsByClassName("app-return")
    for(let i = 0; i < appIcons.length; i++){
        appIcons[i].style.display = "none"
    }
    appTitle[0].style.display = "flex"
    appReturn[0].style.display = "flex"
    calcArea[0].style.display = "flex"
    
}

appReturn = () => {
    let appIcons = document.getElementsByClassName("btn-app");
    let calcArea = document.getElementsByClassName("container-calculator");
    let appTitle = document.getElementsByClassName("app-title")
    let appReturn = document.getElementsByClassName("app-return")
    for(let i = 0; i < appIcons.length; i++){
        appIcons[i].style.display = "flex"
    }
    calcArea[0].style.display = "none"
    appTitle[0].style.display = "none"
    appReturn[0].style.display = "none"
    
}
