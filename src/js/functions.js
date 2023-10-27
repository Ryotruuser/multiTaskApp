let calc = function(){

    let calcChoice = prompt(`1 - multiply\n2 - sum\n3 - divider\n4 - sub\n5 - pow\n6 - back\n7 - exit\ntype your choice for the calculator:  `)

    if(calcChoice == 1){
        let stNumber = prompt("type the first number: ")
        let ndNumber = prompt("type the second number: ")
        let exitOrNot = prompt(`the result for ${stNumber} X ${ndNumber} is ${parseInt(stNumber) * parseInt(ndNumber)}\nDo you want to continue ? Y[yes] or N[not] or B[back]`).toLowerCase()
        if(exitOrNot.includes('b')){
            calc()
        }else if(exitOrNot.includes('n')){
            return choice = 1
        } 
    }

    else if(calcChoice == 2){
        console.log("-------------------------------------------")
        let stNumber = prompt("type the first number: ")
        let ndNumber = prompt("type the second number: ")
        let exitOrNot = prompt(`the result for ${stNumber} + ${ndNumber} is ${parseInt(stNumber) + parseInt(ndNumber)}\nDo you want to continue ? Y[yes] or N[not] or B[back]`).toLowerCase()
        if(exitOrNot.includes('b')){
            calc()
        }else if(exitOrNot.includes('n')){
            return choice = 1
        } 
    }

    else if(calcChoice == 3){
        console.log("-------------------------------------------")
        let stNumber = prompt("type the first number: ")
        let ndNumber = prompt("type the second number: ")
        let exitOrNot = prompt(`the result for ${stNumber} ÷ ${ndNumber} is ${parseInt(stNumber) / parseInt(ndNumber)}\nDo you want to continue ? Y[yes] or N[not] or B[back]`).toLowerCase()
        if(exitOrNot.includes('b')){
            calc()
        }else if(exitOrNot.includes('n')){
            return choice = 1
        } 
    }

    else if(calcChoice == 4){
        console.log("-------------------------------------------")
        let stNumber = prompt("type the first number: ")
        let ndNumber = prompt("type the second number: ")
        let exitOrNot = prompt(`the result for ${stNumber} - ${ndNumber} is ${parseInt(stNumber) - parseInt(ndNumber)}\nDo you want to continue ? Y[yes] or N[not] or B[back]`).toLowerCase()
        if(exitOrNot.includes('b')){
            calc()
        }else if(exitOrNot.includes('n')){
            return choice = 1
        } 
    }

    else if(calcChoice == 5){
        console.log("-------------------------------------------")
        let stNumber = prompt("type the first number: ")
        let ndNumber = prompt("type the second number: ")
        let exitOrNot = prompt(`the result for ${stNumber} ^ ${ndNumber} is ${parseInt(stNumber) ** parseInt(ndNumber)}\nDo you want to continue ? Y[yes] or N[not] or B[back]`).toLowerCase()
        if(exitOrNot.includes('b')){
            calc()
        }else if(exitOrNot.includes('n')){
            return choice = 1
        }
    }

    else if(calcChoice == 6){
        return choice = 0
    }
    else if(calcChoice == 7){
        return  choice = 1
    }
}   
let peoples = []
let listUsers = []
let addUser = function(){
    peoples.shift()
    //stop using array and use storage browser for it <update required in the future>
    let people = {name: prompt("type the user name: "), 
    age: prompt("type the user age: "), login: prompt("add the user login: "), pass: prompt("add the user password: ")}
    peoples.push(people)
    for(let i = 0; i < peoples.length; i++){
        listUsers.push(JSON.stringify(peoples[i], null, 4))
    }
    let getAway = prompt("do you want do add another user? Y[yes] N[not] L[list users]").toLowerCase()
    if(getAway.includes("y")){
        addUser()
    }else if(getAway.includes("n")){
        return choice = 0
    }else if(getAway.includes("l")){
        let listUserChoice = prompt(`Users registered until now \n${listUsers}\n A[Add other user] or L[leave]`).toLowerCase()
        if(listUserChoice.includes('a')){
            addUser()
        }else if(listUserChoice.includes('l')){
            return choice = 0
        }
    }
}

let showUsers = () => {
    if(listUsers.length == 0){
        let empty = prompt(`There are current no users registered in this database.\n How do you want to proceed ? L[leave] [B]back`).toLowerCase()
        if(empty.includes('l')){
            return choice = 1
        }
    }else{
        alert(listUsers)
    }
    
}

let tables = []
let multiTable = () =>{
    let userChoice = prompt("do you want a single table or the whole table? S[single] W[whole] B[Back] L[leave]").toLowerCase()
    if(userChoice.includes('s')){
        let tableNumber = prompt("type the number of the table: ")
        for(let i = 1; i <= 10; i++){
             tables[i] = (`${tableNumber} X ${i} = ${parseInt(tableNumber) * i} \r\n` )
        }
        let showSTable = prompt(`${tables} \n how do you wanto to proceed ? B[back] L[leave] M[main menu]`).toLowerCase()
        if(showSTable.includes('b')){
            multiTable()
        }else if(showSTable.includes('m')){
            return choice = 0
        }else if(showSTable.includes('l')){
            alert("Thanks for using this application by Ryotruuser, cyaa!")
            return choice = 1
        }
    }else if(userChoice.includes('w')){
        for(let i = 1; i <= 10; i++){
            for(let y = 1; 10 >= y; y++){
                tables += (`${i} X ${y} = ${i*y} \r\n` )
            }
        }
        console.log(tables)
    }
}