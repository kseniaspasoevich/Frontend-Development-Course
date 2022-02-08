const addTaskButton=document.getElementById("add-task-button");
const newTaskInput=document.getElementById("input-task");
const tasksWrapper=document.getElementById("task-list"); //<ul>

let tasks;
!localStorage.tasks ? tasks=[] : tasks=JSON.parse(localStorage.getItem('tasks'));

let todoItemElems=[];

function Task(description){ //constructor function
    this.description=description;
    this.completed=false;
}

function createTemplate(task, index){
    return `
        <ul id="task-list">
    <li>
       <input onclick="completeTask(${index})" class=checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
        <span class="task">${task.description}</span>
        <button onclick="deleteTask(${index})" class="delete-btn">X</button>
    </li>
    </ul>
    `
}

function fillHtmlFile(){
    tasksWrapper.innerHTML="";
    if(tasks.length > 0){
        tasks.forEach((item, index)=>{
            tasksWrapper.innerHTML+=createTemplate(item, index);
        });
        todoItemElems=document.querySelectorAll(".todo-item");
    }
}

fillHtmlFile();

function updateLocalStorage(){
     localStorage.setItem('tasks', JSON.stringify(tasks));
}

function completeTask(index){
    console.log(index);
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed){
     todoItemElems[index].classList.add('checked');
    }
    else {
        todoItemElems[index].classList.remove('checked');
    }
    updateLocalStorage();
    fillHtmlFile();
}

function deleteTask(index){
    tasks.splice(index, 1);
    updateLocalStorage();
    fillHtmlFile();
}

addTaskButton.addEventListener("click", ()=>{
    tasks.push(new Task(newTaskInput.value));
    updateLocalStorage();
    fillHtmlFile();

})





//------------------ручное добавление, без сохранения в LocalStorage----------------
/*function deleteTask(){
    this.parentElement.remove();
}

function addNewTask(){
    let newTask=document.getElementById('input-task');
    let list=document.getElementById('task-list'); //ul

    //creation of new elements
    let myLi=document.createElement('li'); //creation of new <li>
    let myButton=document.createElement('button'); //creation of new <button>
    let mySpan=document.createElement('span'); //creation of new <span>
    let myCheckbox=document.createElement('input'); //creation of new <input>
    let x=document.createTextNode('X'); //creation of new text node on the delete-btn
    let taskText=document.createTextNode(newTask.value); //creation of new text node with the task text

    //properties
    myButton.className="delete-btn";
    mySpan.className="task"
    myCheckbox.type='checkbox';
    myCheckbox.checked=false;
    myButton.onclick=deleteTask;

    //appending children
    myButton.appendChild(x);
    mySpan.appendChild(taskText);
    myLi.appendChild(myCheckbox);
    myLi.appendChild(mySpan);
    myLi.appendChild(myButton);
    list.appendChild(myLi);
}

for(let b of document.getElementsByClassName("delete-btn")){
    b.onclick=deleteTask;
}*/
