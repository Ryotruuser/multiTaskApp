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
    let taskAddArea = document.getElementById("task-add-area")
    let appIcons = document.getElementsByClassName("btn-app")
    let appTitle = document.getElementsByClassName("main-title")
    for(let i = 0; i < appIcons.length; i++){
        appIcons[i].style.display = "none"
    }
    taskAddArea.style.display = "flex"
    appTitle[0].innerHTML = "Add task"
}
cancelTask = () => {
    let taskAddArea = document.getElementById("task-add-area")
    let appIcons = document.getElementsByClassName("btn-app")
    let appTitle = document.getElementsByClassName("main-title")
    for(let i = 0; i < appIcons.length; i++){
        appIcons[i].style.display = "flex"
    }
    taskAddArea.style.display = "none"
    appTitle[0].innerHTML = "Multi Task App"
}
//creating the tasklist
let tasks = []

addTask = () => {
    //get the value of html page
    let taskName = document.getElementById("task-name").value
    let taskTime = document.getElementById("task-time").value
    let taskDate = document.getElementById("task-date").value
    let taskDesc = document.getElementById("task-desc").value

    //Setting the object to be added to the tasklist
    let task = {
        "taskName" : taskName,
        "taskTime" : taskTime,
        "taskDate" : taskDate,
        "taskDesc" : taskDesc
    }
    tasks.push(task)

    for(let i = 0; i < tasks.length; i++){
        localStorage.setItem([i] ,JSON.stringify(tasks[i]));
    }
    
    //cleaning the fields
    document.getElementById("task-name").value = ""
    document.getElementById("task-time").value = ""
    document.getElementById("task-date").value = ""
    document.getElementById("task-desc").value = ""
    
}