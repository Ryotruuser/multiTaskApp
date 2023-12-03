//basic variables to get storage info
let storageTaskLen = localStorage.length
let tasksAvaliables = []

//variables to get the index of task inside url
let url = window.location.href
let pid = parseInt(url.split("?")[1])

//adding the task in the array
for(let i = 1; i < storageTaskLen + 1; i++ ){
    tasksAvaliables.push(JSON.parse(localStorage.getItem(i)))
}

//getting the inputs from html
let taskInputName = document.getElementById("task-name-edit")
let taskInputTime = document.getElementById("task-edit-time")
let taskInputDate = document.getElementById("task-edit-date")
let taskInputDesc = document.getElementById("task-edit-desc")
//fill the fields with the storage info
taskInputName.value = tasksAvaliables[pid].taskName
taskInputTime.value = tasksAvaliables[pid].taskTime
taskInputDate.value = tasksAvaliables[pid].taskDate
taskInputDesc.value = tasksAvaliables[pid].taskDesc

//test

//actions btn
returnToMainApp = () =>{
    window.location.href = "../../index.html"
}
editTask = () =>{
    let editAlert = document.getElementById("task-edit-alerts")
    if(taskInputName.value != "" && taskInputTime.value != "" && taskInputDate.value != ""){
        let task = {
            "taskName" : taskInputName.value,
            "taskTime" : taskInputTime.value,
            "taskDate" : taskInputDate.value,
            "taskDesc" : taskInputDesc.value
        }
        localStorage.setItem(pid + 1, JSON.stringify(task))
        editAlert.style.color = "green"
        editAlert.innerHTML = "Task details updated!!"
        setTimeout(function() { editAlert.innerHTML = "ㅤ" }, 2000);
    }else{
        editAlert.style.color = "red"
        editAlert.innerHTML = "Task details cant be empty!!"
        setTimeout(function() { editAlert.innerHTML = "ㅤ" }, 2000);
    }
} 

/* with bug to solve later
deletTask = () => {
    let userChoice = prompt("Delete task ?\n[Y]yes or [N]no").toLowerCase()
    let editAlert = document.getElementById("task-edit-alerts")
    if(userChoice.includes("y")){
        localStorage.removeItem(pid + 1)
        taskInputName.value = ""
        taskInputTime.value = ""
        taskInputDate.value = ""
        taskInputDesc.value = ""
        editAlert.style.color = "red"
        editAlert.innerHTML = "Task deleted, returning for the main menu"
        setTimeout(function() { window.location.href = "../../index.html" }, 3000);
    }
} */