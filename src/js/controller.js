activateCalculator = () => {
    let appIcons = document.getElementsByClassName("btn-app");
    let calcArea = document.getElementsByClassName("container-calculator");
    let appReturn = document.getElementsByClassName("app-return")
    let calcDisplay = document.getElementById("calculator-d-value")
    let title = document.getElementsByClassName("main-title")
    for(let i = 0; i < appIcons.length; i++){
        appIcons[i].style.display = "none"
    }
    title[0].innerHTML = "Calculator"
    appReturn[0].style.display = "flex"
    calcArea[0].style.display = "flex"
    calcDisplay.style.display = "flex"
    
}

calculatorReturn = () => {
    let title = document.getElementsByClassName("main-title")
    //let exitCalc = prompt("All progress will be lost ? Continue Y[YES] or N[NO]").toLocaleLowerCase()
    let calcDisplay = document.getElementById("calculator-d-value")
    let appIcons = document.getElementsByClassName("btn-app");
    let calcArea = document.getElementsByClassName("container-calculator");
    let appReturn = document.getElementsByClassName("app-return")
    title[0].innerHTML = "Multi Task App"
    /*if(exitCalc.includes("y")){
        for(let i = 0; i < appIcons.length; i++){
            appIcons[i].style.display = "flex"
        }
        calcArea[0].style.display = "none"
        appReturn[0].style.display = "none"
        calcDisplay.value = "0"
    }*/
    
    for(let i = 0; i < appIcons.length; i++){
        appIcons[i].style.display = "flex"
    }
    calcArea[0].style.display = "none"
    appReturn[0].style.display = "none"
    calcDisplay.value = "0"
    calcDisplay.style.display = "none"
}

activateTaskManager = () => {
    let appReturn = document.getElementsByClassName("app-return")
    let appIcons = document.getElementsByClassName("btn-app");
    let taskArea = document.getElementsByClassName("task-manager-area")
    let title = document.getElementsByClassName("main-title")
    taskArea[0].style.display = "flex"
    for(let i = 0; i < appIcons.length; i++){
        appIcons[i].style.display = "none"
    }
    title[0].innerHTML = "Add task"
    appReturn[0].style.display = "flex"
}

