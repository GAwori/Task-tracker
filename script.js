//task elements
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');


//motivational elements
const motivationText = document.getElementById('motivation-text');
const msgs = [
    "Keep going, you're doing great!",
    "I'm so proud of you!",
    "Keep up the good work!",
    "You're making progress!",
    "Every step counts!",
    "You're unstoppable!",
    "Believe in yourself!",
    "You're on the right track!",
    "Keep pushing forward!"
]

//adds tasks to list
function addTask() {
    const task = taskInput.value.trim();

    //ensures task is not empty
    if(!task) {
        alert('You forgot to enter a task, silly!');
        return;
    }

    //list element
    const li = document.createElement('li');
    li.innerHTML = `
    <label class="task">
    <input type="checkbox">
    <span>${task}</span>
    </label>
    <span class="delete-btn">Delete</span>`;

    //adds task to list
    taskList.appendChild(li);

    //empty input field
    taskInput.value = '';
    
    //list elements
  const checkbox = li.querySelector("input");
  const taskSpan = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");


  //marks task as completed
  checkbox.addEventListener("click", function () {
    console.log("Click!");
    li.classList.toggle("completed", checkbox.checked);
    motivationText.textContent = msgs[Math.floor(Math.random() * msgs.length)];
});

  //deletes task from list
  deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
     li.remove();
    }
  });
}

//adds task on button click
addTaskBtn.addEventListener('click', addTask);

