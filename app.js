function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let idCount = 0;

  function createNewTodo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return;}
    idCount++;
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: idCount
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDos) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');
      checkbox.type = 'checkbox';
      deleteBtn.innerHTML = '<span>Delete</span>';
      newLi.textContent = toDos.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', function() {
        newLi.parentNode.removeChild(newLi);
      });
  //      const liId = this.id;
  //      let deleteToDo = toDos.filter.(function(toDo) {
  //        return todo.id === liId;
  //      toDos.splice(deleteToDo, 1);
      });

    }


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewTodo();
  });

  renderTheUI();
}

window.onload = function() {
   onReady();
 }
