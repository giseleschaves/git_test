const btnAdd = document.querySelector('#btn-add');
const list = document.querySelector('#list');
const activity = document.querySelector('#txt-activity');


btnAdd.addEventListener('click', addActivity);

function addActivity() {
  // creatting new list item
  const node = document.createElement("DIV");
  const check = document.createElement("SPAN");
  check.innerText = ' hi ';
  node.innerText = activity.value;
  //node.appendChild(document.createTextNode(activity.value));
  node.appendChild(check);
  list.appendChild(node);

  // cleaning input
  activity.value = "";
 
  //adding event to remove item
  node.addEventListener('click', () => {
      node.remove();
  })
  
}

