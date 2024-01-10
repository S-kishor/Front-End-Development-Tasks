let todo_list = [];
display_todo_items();




function add_todo(){
  let input_element = document.querySelector('#todo_input');
  let date_element = document.querySelector('#todo_date');
  let todo_item = input_element.value;
  let todo_date = date_element.value;
  todo_list.push({item: todo_item, due_date: todo_date});
  input_element.value = ''; 
  date_element.value = '';
  display_todo_items();
}

function display_todo_items(){
  localStorage.setItem('Todo List',JSON.stringify(todo_list));
  let Container_element = document.querySelector('.todo_container');
  let new_html = '';
  for(let i = 0; i < todo_list.length; i++){
    // let item = todo_list[i].item;
    // let due_date = todo_list[i].due_date; 
    let{item,due_date} = todo_list[i];
    new_html += `
    
     <span> ${item}</span>
     <span> ${due_date}</span>
     <button class="btn" onclick="todo_list.splice(${i},1); display_todo_items();"> Delete </button>
    
     
    `; 
  }
  Container_element.innerHTML = new_html;
}