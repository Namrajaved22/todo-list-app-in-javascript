
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (!taskInput.value.trim()) {
        return alert("Todo can't be empty!")
    }

    // Create a new list item
    var li = document.createElement('li');
    li.textContent = taskInput.value;

    
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Add click event to mark as completed
    li.onclick = function () {
        li.classList.toggle('completed');
    };

    
    li.appendChild(removeButton);

    
    taskList.appendChild(li);

    taskInput.value = '';
}
