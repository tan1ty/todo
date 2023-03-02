window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const listElem = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = input.value;

    const taskElem = document.createElement('div');
    taskElem.classList.add('task');

    const taskContentElem = document.createElement('div');
    taskContentElem.classList.add('content');

    taskElem.appendChild(taskContentElem);

    const taskInputElem = document.createElement('input');
    taskInputElem.classList.add('text');
    taskInputElem.type = 'text';
    taskInputElem.value = task;
    taskInputElem.setAttribute('readonly', 'readonly');

    taskContentElem.appendChild(taskInputElem);

    const taskActionsElem = document.createElement('div');
    taskActionsElem.classList.add('actions');

    const taskEditElem = document.createElement('button');
    taskEditElem.classList.add('edit');
    taskEditElem.innerHTML = 'Edit';

    const taskDeleteElem = document.createElement('button');
    taskDeleteElem.classList.add('delete');
    taskDeleteElem.innerHTML = 'Delete';

    taskActionsElem.appendChild(taskEditElem);
    taskActionsElem.appendChild(taskDeleteElem);
    taskElem.appendChild(taskActionsElem);

    listElem.appendChild(taskElem);

    input.value = '';

    taskEditElem.addEventListener('click', () => {
      if (taskEditElem.innerText.toLowerCase() == 'edit') {
        taskInputElem.removeAttribute('readonly');
        taskInputElem.focus();
        taskEditElem.innerText = 'Save';
      } else {
        taskInputElem.setAttribute('readonly', 'readonly');
        taskEditElem.innerText = 'Edit';
      }
    });

    taskDeleteElem.addEventListener('click', () => {
      listElem.removeChild(taskElem);
    });
  });
});
