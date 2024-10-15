const allLeft=document.querySelector('#all-left');
const allRight=document.querySelector('#all-right');
const selectedLeft=document.querySelector('#selected-left');
const selectedRight=document.querySelector('#selected-right');

const right=document.querySelector('.right')
const left=document.querySelector('.left')
const between=document.querySelector('.between')

let l=[]
let r=[]

const all=document.querySelectorAll('input');
all.forEach(checkbox=>{
    checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
            if(checkbox.parentElement.parentElement.classList.contains('left')){
                selectedRight.style.pointerEvents='auto';
                selectedRight.parentElement.style.cursor='pointer';
                l.push(checkbox.parentElement);
            }
            else{
                selectedLeft.style.pointerEvents='auto';
                selectedLeft.parentElement.style.cursor='pointer';
                r.push(checkbox.parentElement);
            }
            console.log(l)
            console.log(r)
        }
        else{
            if(checkbox.parentElement.parentElement.classList.contains('left')){
                l=l.filter(item=>item!=checkbox.parentElement);
                if(l.length==0){
                    selectedRight.style.pointerEvents='none'
                    selectedRight.parentElement.style.cursor='not-allowed'
                }
            }
            else{
                r=r.filter(item=>item!=checkbox.parentElement);
                if(r.length==0){
                    selectedLeft.style.pointerEvents='none'
                    selectedLeft.parentElement.style.cursor='not-allowed'
                }
            }
            console.log(l)
            console.log(r)
        }
    })
})

allRight.addEventListener('click',()=>{
    const children=left.children
    while(children.length!=0){
        right.appendChild(children[0])
    }
    r.push(...l);
    l=[]

    selectedRight.style.pointerEvents='none'
    selectedRight.parentElement.style.cursor='not-allowed'
    allRight.style.pointerEvents='none'
    allRight.parentElement.style.cursor='not-allowed'
    if(r.length>0){
    selectedLeft.style.pointerEvents='auto'
    selectedLeft.parentElement.style.cursor='pointer'
    }
    else{
    selectedLeft.style.pointerEvents='none'
    selectedLeft.parentElement.style.cursor='not-allowed'}
    allLeft.style.pointerEvents='auto'
    allLeft.parentElement.style.cursor='pointer'

})
allLeft.addEventListener('click',()=>{
    const children=right.children
    while(children.length!=0){
        left.appendChild(children[0])
    }
    l.push(...r);
    r=[]
    selectedLeft.style.pointerEvents='none'
    selectedLeft.parentElement.style.cursor='not-allowed'
    allLeft.style.pointerEvents='none'
    allLeft.parentElement.style.cursor='not-allowed'
    if(l.length==0){
        selectedRight.style.pointerEvents='none'
        selectedRight.parentElement.style.cursor='not-allowed'
    }
    else{
    selectedRight.style.pointerEvents='auto'
    selectedRight.parentElement.style.cursor='pointer'}
    allRight.style.pointerEvents='auto'
    allRight.parentElement.style.cursor='pointer'

})
selectedRight.addEventListener('click',()=>{
    const children=left.children
    let i=0;
    while(i<children.length){
        if(children[i].firstElementChild.checked){
            children[i].firstElementChild.checked=false
            right.appendChild(children[i])
        }
        else i++;
    }
    l=[]
    if(children.length==0){
    allRight.style.pointerEvents='none'
    allRight.parentElement.style.cursor='not-allowed'
    }
    selectedRight.style.pointerEvents='none'
    selectedRight.parentElement.style.cursor='not-allowed'
    allLeft.style.pointerEvents='auto'
    allLeft.parentElement.style.cursor='pointer'
})
selectedLeft.addEventListener('click',()=>{
    const children=right.children
    let i=0;
    while(i<children.length){
        if(children[i].firstElementChild.checked){
            children[i].firstElementChild.checked=false
            left.appendChild(children[i])
        }
        else i++;
    }
    r=[]
    if(children.length==0){
        allLeft.style.pointerEvents='none'
        allLeft.parentElement.style.cursor='not-allowed'
    }
    selectedLeft.style.pointerEvents='none'
    selectedLeft.parentElement.style.cursor='not-allowed'
    allRight.style.pointerEvents='auto'
    allRight.parentElement.style.cursor='pointer'
})

