const todoInput = document.querySelector("#todo-input");
const container = document.querySelector(".container");

container.addEventListener('click',(e)=>{
  if(e.target.classList[0]=='del'){
    container.removeChild(e.target.parentElement);
      if (container.childElementCount == 0) {
        container.innerText = "Oops";
      }
  }
  else if(e.target.classList[0]=='edit'){
      const parent = e.target.parentElement;
      const todoValue = parent.firstChild;
      const editElement = document.createElement("input");
      editElement.value = todoValue.innerText;
      const children = parent.children;
      parent.replaceChild(editElement, children[0]);
      const save = document.createElement("button");
      save.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
      save.classList.add("save");
      parent.replaceChild(save, children[1]);
  }
  else if(e.target.classList[0]=='save'){
    const parent=e.target.parentElement;
    const children=e.target.parentElement.children;
    const todo = children[0].value;
    const element = document.createElement("h3");
    element.innerText = todo ;
    parent.replaceChild(element,children[0])
    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    parent.replaceChild(edit,children[1]);
  }
})

todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && todoInput.value.trim().length != 0) {
    if (container.childElementCount === 0) {
      container.innerText = "";
    }
    const todo = todoInput.value;
    const element = document.createElement("div");
    element.classList.add("todo");
    element.innerHTML = "<h3>" + todo + "</h3>";
    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    element.appendChild(edit);
    const del = document.createElement("button");
    del.innerHTML = '<i class="fa-solid fa-trash"></i>';
    del.classList.add("del");
    element.appendChild(del);
    container.appendChild(element);
  }
});
