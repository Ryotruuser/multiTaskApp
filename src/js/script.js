var choice = 0
while(choice == 0){
    let gerChoice = prompt(`1 - calc\n2 - add user\n3 - list user \n4 - mult table \n5 - exit\ntype your choice:  `)
    if (gerChoice == 1){
        calc();
    }else if(gerChoice == 2){
        addUser()
    }else if(gerChoice == 5){
        choice = 1
    }else if(gerChoice == 3 ){
        showUsers()
    }else if(gerChoice == 4){
        multiTable()
    }
    
}