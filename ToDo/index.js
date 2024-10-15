const todoInput=document.querySelector('#todo-input');
const container=document.querySelector('.container');
todoInput.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'&&todoInput.value.trim().length!=0){
        if(container.childElementCount===0){
            container.innerText=""
        }
        const todo=todoInput.value;
        const element=document.createElement('div');
        element.classList.add('todo')
        element.innerHTML='<h3>'+todo+"</h3>";
        const edit=document.createElement('button')
        edit.classList.add("edit")
        edit.innerHTML='<i class="fa-solid fa-pencil"></i>'
        element.appendChild(edit);
        const del=document.createElement('button')
        del.innerHTML='<i class="fa-solid fa-trash"></i>'
        del.classList.add("del");
        element.appendChild(del);
        container.appendChild(element);
        del.addEventListener('click',()=>{
            container.removeChild(del.parentElement)
            if(container.childElementCount==0){
                container.innerText="Oops"
            }
        })
        edit.addEventListener('click',()=>{
            console.log("hii");
            const parent=edit.parentElement;
            const todoValue=parent.firstChild;
            const editElement=document.createElement('input')
            editElement.value=todoValue.innerText;
            const children=parent.children;
            console.log(children)
            const child0=children[0]
            const child1=children[1]
            parent.replaceChild(editElement,children[0])
            const save=document.createElement('button')
            save.innerHTML='<i class="fa-solid fa-floppy-disk"></i>';
            save.classList.add('save');
            parent.replaceChild(save,children[1])
            console.log(children)
            save.addEventListener('click',()=>{
                child0.innerText=children[0].value;
                parent.replaceChild(child0,children[0])
                parent.replaceChild(child1,children[1])
            })

        })
    }
})
