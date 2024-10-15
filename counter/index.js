const increment=document.querySelector('#increment');
const decrement=document.querySelector('#decrement');
const counter=document.querySelector('#counter');
const reset=document.querySelector('#reset');
const variable=document.querySelector("#increment-variable");

increment.addEventListener('click',()=>{
    let incrementor=  parseInt(variable.value);
    if(!incrementor)return
    incrementor+=parseInt(counter.innerText)
    counter.innerHTML=incrementor;
})
decrement.addEventListener('click',()=>{
    let decrementor=parseInt(variable.value);
    if(!decrementor)return
    decrementor=parseInt(counter.innerText)-decrementor;
    counter.innerText=decrementor;
})
reset.addEventListener('click',()=>{
    variable.value=0;
    counter.innerHTML=0;
})
