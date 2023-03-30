let taskSerial = 0;

function addTask() {

//create checkbox:
    const check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "checkbox" + taskSerial);
    
    check.style.margin = "10px";

// getting input from user:
    const userInput = document.querySelector("#userInput");

// Create an "li" node:
    const node = document.createElement("li");
    node.innerHTML = userInput.value;
    list.append(node);
    
    clearTaskBtn.disabled = false;
    
// delete button disabled/enabled state code
    const deleteBtn = document.getElementById("dltSelected");
    deleteBtn.disabled = 1;

    check.addEventListener("click", enableDeleteBtn);

    function enableDeleteBtn(){
        if (check.checked == true) {
            deleteBtn.disabled = 0;
        } else if(check.checked == false){
            deleteBtn.disabled = 1;
        }
    }


// Append the text node to the "checkbox and delete button":
    node.appendChild(check);

 // Append the "li" node to the list:
    document.getElementById("list").appendChild(node);
    

// delete button to delete selected item from the added tasks
    // deleteBtn.addEventListener("click", deleteSelectedTask);

    // function deleteSelectedTask() {
    //     const allTaskItems = list;
    //     const allTask = allTaskItems.length;
    //     for(let i = 0; i <= allTask; i++){ 
    //         if (check.checked) {
    //             allTaskItems.removeChild(check);

    //         }
//if(check.checked){
//     list.removeChild(node);
// }
            
    //     clearTaskBtn.disabled = true;
    //     deleteBtn.disabled = true;
            
    //     } 
    // }
    taskSerial = taskSerial + 1;
}

//enable add task botton when user put data in input field
userInput.addEventListener("input", enableInputField);

function enableInputField() {
    document.getElementById("btnaddtask").disabled = false;
    document.getElementById("reset").disabled = false;
    
}

//deleting all the tasks at once using clearTasks function
const clearTaskBtn = document.querySelector("#clearTasks");
clearTaskBtn.addEventListener("click", clearTasks);

function clearTasks() {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstElementChild);
        clearTaskBtn.disabled = true;
    }
    
}

//clearing the data of input field using reset button
function resetInput() {
    document.getElementById("userInput").value = "";
    document.getElementById("reset").disabled = true;
    document.getElementById("btnaddtask").disabled = true;
    
}


document.getElementById("dltSelected").addEventListener("click", deleteSelectedTask);

    function deleteSelectedTask() {
        const list = document.getElementById("list");
        const listChildren = list.children;
        
        for(let i = 0; i < listChildren.length; i++) { 
            const liElement = listChildren[i];
            const checkboxElement = liElement.children[0];
            if (checkboxElement.checked) {
                    liElement.remove();
                    i--;
                    if (listChildren.length == 0) {
                        clearTaskBtn.disabled = true;
                    }
                    document.getElementById("dltSelected").disabled = true;
                 } 
                 
        }
    }
        
    
