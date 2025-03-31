function addTask() {
    let input = document.getElementById('todoInput');
    let taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    let ul = document.getElementById('taskList');
    let li = document.createElement('li');
    li.textContent = taskText;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        ul.removeChild(li);
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = ''; // Clear input field
    input.focus();    // Focus back on the input
}
