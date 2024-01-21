var btn=document.getElementById('btn');
var inp=document.getElementById('inp');
var ulContent=document.getElementById('ulContent');
btn.addEventListener('click',()=>{
    
    var newItem=document.createElement("li");
    newItem.innerHTML=inp.value;
    ulContent.appendChild(newItem);

    let del=document.createElement("button");
    del.id='delete';
    del.innerHTML = `Delete`;
    newItem.appendChild(del);

    inp.value = "";
    del.addEventListener('click', () => {
        newItem.remove();
    });

    edit.addEventListener('click',()=>{
        let a =newItem.innerHTML;
        console.log(a);
    })
})


