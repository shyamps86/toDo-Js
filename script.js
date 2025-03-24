function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText) {
      const taskList = document.getElementById('taskList');
  
      const li = document.createElement('li');
      li.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = () => li.remove();
  
    
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = '';
    }
  }
  