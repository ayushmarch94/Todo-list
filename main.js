var btn=document.getElementById('btn');
var inp=document.getElementById('inp');
var ulContent=document.getElementById('ulContent');
btn.addEventListener('click',()=>{
    var newItem=document.createElement("li");
    newItem.innerHTML=inp.value;
    ulContent.appendChild(newItem);
})