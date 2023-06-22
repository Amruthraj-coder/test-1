const creatissuebutton =document.getElementById("creat-issue");
const box=document.getElementsByClassName("box")[0];

const newmodal=document.createElement("div")
newmodal.innerHTML=`<div class="modal" id="modal">
                        <div class="modal-body">
                            <form >
                                <span class="material-icons close" onclick="closemodal()">close</span>
                                <b style="color: #182A4D; font-size: 20px ;">Add Task</b>
                                <input required type="text" name="taskname" placeholder="Task Name">
                                <textarea required type="text" rows="3" style="resize: none;" name="description" placeholder="description"></textarea>
                            <input required type="text" name="assignee" placeholder="Assignee Name">
                                <select  name="status" id="">
                                <option value="TODO">TO DO</option>
                                <option value="IN_PROGRESS">IN_PROGRESS</option>
                                <option value="COMPLETED">COMPLETED</option>
                            </select>
                            <button type="submit">Creat</button>
                            </form>
                        </div>
                    </div>`

function addnewtask(task){
const card=document.createElement("div");
const words=task.name.split(" ");
const box=document.getElementById(task.status)
box.id=="COMPLETED"&&(box.style.cursor="default")
let nickname=words[0][0].toUpperCase();
if (words.length>1){
    nickname+=words[words.length-1][0];
}
const name=task.name;
const status=task.status;
const script=task.description;
const taskname=task.taskname;
card.className="card";

card.addEventListener("dragstart",()=> {
    draggedelement=card;
})

task.status!=='COMPLETED'&&(card.draggable='true')
card.innerHTML=`<div class="card-top">
                    <p class="taskname"  >${taskname}</p>
                    <p class="description">${script}</p>
                    </div>
                    <div class="status-container">
                    <p class="status">${status}</p>
                    <p data-short-name="${nickname}"  class="assignee">${name}</p>
                    </div>`

box.appendChild(card);

}

function submitform(event){
    
        event.preventDefault(); 
        // console.log(event.target);
        const formelement=event.target;
        // console.log(formelement["taskname"].value)
        const userdata={
            taskname:formelement["taskname"].value.trim(),
            name:formelement["assignee"].value.trim(),
            status:formelement["status"].value.trim(),
            description:formelement["description"].value.trim()
        }
        // console.log(userdata)
        closemodal();
    
        addnewtask(userdata);
    
}

creatissuebutton.addEventListener("click",(e)=>{

document.body.appendChild(newmodal)
const form=document.querySelector(".modal form");
form.removeEventListener("submit",submitform);
form.addEventListener("submit",submitform);


})






function closemodal(){
    
    newmodal.remove();
}



let boxes=document.getElementsByClassName("box");


for(let i=0;i<boxes.length;i++ ){
    
   
        
    

    boxes[i].addEventListener("dragleave",() => {
        
    })

    boxes[i].addEventListener("dragover",(e) => {
        e.preventDefault()
    })

    boxes[i].addEventListener("drop",(e)=>{
        e.preventDefault();
        
        boxes[i].appendChild(draggedelement);
        boxes[i].id==="COMPLETED"&&(draggedelement.draggable=false);
        boxes[i].id==="COMPLETED"&&(draggedelement.style.cursor="default");
    })
}