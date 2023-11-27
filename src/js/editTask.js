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
let returnToMainApp = () =>{
    window.location.href = "../../index.html"
}
let editTask = () =>{
    let editAlert = document.getElementById("task-edit-alerts")
    if(taskInputName.value != "" && taskInputTime.value != "" && taskInputDate.value != ""){
        let task = {
            "taskName" : taskInputName.value,
            "taskTime" : taskInputTime.value,
            "taskDate" : taskInputDate.value,
            "taskDesc" : taskInputDesc.value
        }
        localStorage.setItem(pid + 1, JSON.stringify(task))
    }else{
        editAlert.style.color = "red"
        editAlert.innerHTML = "empty input detected"
        setTimeout(function() { editAlert.innerHTML = "" }, 2000);
    }
} 