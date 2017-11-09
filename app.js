function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const toDoIndex = document.getElementById(liIndex);
  var toDoCount = 0;
  var liIndex = 1;

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    toDoCount++;
    var addId = function() {
      liIndex = toDoId;
    }
    let toDoId = toDoCount;
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    let removeLi = document.createElement('input');
    checkbox.type = 'checkbox';
    removeLi.type = 'button';
    removeLi.value ='remove';
    removeLi.innerHTML = onmousedown=addId();
    newLi.id = toDoId;
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(removeLi);
    toDoList.appendChild(newLi);
    newToDoText.value = '';
  });

  toDolist.addEventListener('click', () => {
    toDoList.removeChild(toDoList[liIndex]);
  });


//  $("ul").on("click", "button", function(e) {
//      e.preventDefault();
//      $(this).parent().remove();
//  });
}

window.onload = function() {
   onReady();
 };
