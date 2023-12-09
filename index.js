document.addEventListener('DOMContentLoaded', function() {
    function handleDoneButtonClick(event) {
        const taskDiv = event.target.parentElement;
        const inputs = taskDiv.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.backgroundColor = 'green';
        });
    }

    function handleDeleteButtonClick(event) {
        const taskDiv = event.target.parentElement;
        if (taskDiv.classList.contains('new-task')) {
            taskDiv.remove();
        }
    }

    const addButton = document.getElementById('add');
    addButton.addEventListener('click', function() {
        const tasksDiv = document.querySelector('.new');
        
        const newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('new-task');

        const newTaskInput = document.createElement('input');
        newTaskInput.type = 'text';
        newTaskInput.placeholder = 'Enter task';
        newTaskInput.classList.add('task-input');

        const newFromTime = document.createElement('input');
        newFromTime.type = 'time';
        newFromTime.classList.add('from-time');

        const newToTime = document.createElement('input');
        newToTime.type = 'time';
        newToTime.classList.add('to-time');

        const newDoneButton = document.createElement('button');
        newDoneButton.textContent = 'Done';
        newDoneButton.style.backgroundColor = 'green';
        newDoneButton.type = 'button';
        newDoneButton.classList.add('done');

        const newDeleteButton = document.createElement('button');
        newDeleteButton.textContent = 'Delete';
        newDeleteButton.style.backgroundColor = 'red';
        newDeleteButton.type = 'button';
        newDeleteButton.classList.add('delete');

        newTaskDiv.appendChild(newTaskInput);
        newTaskDiv.appendChild(document.createTextNode('from'));
        newTaskDiv.appendChild(newFromTime);
        newTaskDiv.appendChild(document.createTextNode('to'));
        newTaskDiv.appendChild(newToTime);
        newTaskDiv.appendChild(newDoneButton);
        newTaskDiv.appendChild(newDeleteButton);

        tasksDiv.appendChild(newTaskDiv);

        newDoneButton.addEventListener('click', handleDoneButtonClick);
        newDeleteButton.addEventListener('click', handleDeleteButtonClick);
    });
});
