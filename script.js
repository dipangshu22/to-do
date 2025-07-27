

let input_box=document.getElementById("input_box")
let list=document.querySelector(".class_list")

function add(){
    if(input_box.value==''){
        alert("enter task")
    }
    else{
        let li=document.createElement("li")
        li.innerText=input_box.value
        list.appendChild(li)
        let span=document.createElement("span")
        span.innerText="\u00d7"
        li.appendChild(span)

    }
    input_box.value=''
    save()
}

list.addEventListener('click',(e)=>{

    if(e.target.tagName=='LI'){
        e.target.classList.toggle("checked")
        save()
    }
    else if(e.target.tagName='SPAN'){
        e.target.parentElement.remove();
        save()
    }
    

},false)

function save(){
    localStorage.setItem("data",list.innerHTML)
}

function load(){
    list.innerHTML=localStorage.getItem("data")


}

load()