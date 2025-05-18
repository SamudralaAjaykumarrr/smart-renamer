function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  const ul = document.getElementById('taskList');
  const li = document.createElement('li');

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${task}</span>
    <button onclick="removeTask(this)">❌</button>
  `;

  ul.appendChild(li);
  input.value = '';
}
function toggleComplete(span) {
  span.classList.toggle('completed');
}
function removeTask(button) {
  button.parentElement.remove();
}
