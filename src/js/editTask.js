let storageTaskLen = localStorage.length
let tasksAvaliables = []

let url = window.location.href
let pid = url.split("?")[1]

for(let i = 1; i < storageTaskLen + 1; i++ ){
    tasksAvaliables.push(JSON.parse(localStorage.getItem(i)))
}
let cancelEditTask = () =>{
    window.location.href = "../../index.html"
}
let editTask = () =>{
    console.log(pid)
    
}