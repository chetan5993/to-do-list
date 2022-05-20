const input=document.querySelector(".input");
const add=document.querySelector(".add");
const tasks=document.querySelector(".tasks");
console.log(input,add,tasks);


let id=1;
function addtask(){
const data=input.value;
tasks.innerHTML=tasks.innerHTML+`<div class="innerTask">
<div class="task${id}">${data}</div>
<button class="deletebutton">Delete</button>
</div>`
input.value="";
id++;

const buttons=document.querySelectorAll(".deletebutton");

function del(btn)
{
    btn.parentNode.remove()
}
buttons.forEach((btn)=>btn.addEventListener('click',()=>del(btn)));

}

add.addEventListener("click",addtask);
