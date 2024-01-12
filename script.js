var btn=document.getElementById('btn');
var inp=document.getElementById('inp');
var ulContent=document.getElementById('ulContent');
btn.addEventListener('click',()=>{
    
    var newItem=document.createElement("li");
    newItem.innerHTML=inp.value;
    ulContent.appendChild(newItem);

    let span=document.createElement("span");
    span.innerHTML = `<img class="cross" src='./close.png' alt='close' width=20px />`;
    newItem.appendChild(span);
    ulContent.appendChild(newItem);

    inp.value = "";
    span.querySelector('.cross').addEventListener('click', () => {
        newItem.remove();
    });
})


