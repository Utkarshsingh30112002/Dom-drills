const counter=document.querySelector('#counter');
const variable=document.querySelector("#increment-variable");

document.body.addEventListener('click',(e)=>{
    if(e.target.id=='increment'){
        let incrementor=  parseInt(variable.value);
        if(!incrementor)return
        incrementor+=parseInt(counter.innerText)
        counter.innerHTML=incrementor;
    }
    else if(e.target.id=='decrement'){
        let decrementor=parseInt(variable.value);
        if(!decrementor)return
        decrementor=parseInt(counter.innerText)-decrementor;
        counter.innerText=decrementor;
    }
    else if(e.target.id=='reset'){
        variable.value=0;
        counter.innerHTML=0;
    }
})