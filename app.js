function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', function() {
    event.preventDefault();
    let title = newToDoText.value;
    let deleteBtn = document.createElement('button');
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    deleteBtn.innerHTML ='<span>Delete</span>';
    checkbox.type = 'checkbox';
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    toDoList.appendChild(newLi);
    newToDoText.value = '';

    deleteBtn.addEventListener('click', function() {
      newLi.parentNode.removeChild(newLi);
    });
  });
}

window.onload = function() {
   onReady();
 };
