const taskinput = document.getElementById('taskinput');
const tasklist = document.getElementById('tasklist');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function addtask() {
    const tasktext = taskinput.value.trim();
    if(tasktext === '') return;

    const task = {text : tasktext};
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskinput.value = '';
    displaytasks();
}
function deletetask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displaytasks();
}
function editTask(index) {
    const newTask = prompt('Edit task', tasks[index].text);
    if(newTask !== null) {
    tasks[index].text = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displaytasks();
    }
}
function displaytasks() {
    tasklist.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <p>${task.text}</p>
        <button onclick="deletetask(${index})">Delete</button>
        <button onclick="editTask(${index})">Edit</button>
        `;
        tasklist.appendChild(li);
    });
}
displaytasks();