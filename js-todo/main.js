let listForm = document.getElementById("createForm")
        
listForm.addEventListener("submit",(event) =>{ 
    event.preventDefault();
    
    const titleInput = document.getElementById("title").value
    const taskInput = document.getElementById("task").value

    console.log("Task: "+ taskInput)

   

    let taskList = document.querySelector("#hoes")
    let title = document.createElement("h1")
    title.textContent = titleInput

    let task = document.createElement("ui")
    task.textContent = taskInput
    taskList.append(title, task)

    
}) 

function myFunction(){
    let form = document.querySelector("#createForm");

    // Avoid adding multiple task inputs
    
        let taskInput = document.createElement("input");
        taskInput.setAttribute("id", "task");
        taskInput.setAttribute("type", "text");
        taskInput.setAttribute("placeholder", "Enter your task");

        let lineBreak = document.createElement("br");

        form.appendChild(taskInput);
        form.appendChild(lineBreak);
   
}

