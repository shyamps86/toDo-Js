function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText) {
      const taskList = document.getElementById('taskList');
  
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = () => li.remove();
  
      // Append to list item
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      // Clear input
      taskInput.value = '';
    }
  }
  