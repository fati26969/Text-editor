const selectinput=document.querySelector("#font-size")
const text=document.querySelector("#text")

const bold=document.querySelector("#bold")
const underLine=document.querySelector("#underline")
const italic=document.querySelector("#italic")

const color=document.querySelector("#color")

const counter=document.querySelector(".counter")

const left=document.querySelector("#left")
const center=document.querySelector("#center")
const right=document.querySelector("#right")
const justify=document.querySelector("#justify")

selectinput.addEventListener("change",changeFontsize)
function changeFontsize(e){
   const font=e.target.value

   switch (font) {
       case "10":
           text.style.fontSize = "10px"
           break;
       case "12":
           text.style.fontSize = "12px"
           break;
       case "14":
           text.style.fontSize = "14px"
           break;
       case "16":
           text.style.fontSize = "16px"
           break;
       case "18":
           text.style.fontSize = "18px"
           break;
       case "20":
           text.style.fontSize = "20px"
           break;
       case "22":
           text.style.fontSize = "22px"
           break;
       case "24":
           text.style.fontSize = "24px"
           break;
    default:
        text.style.fontSize="10px"
        break;
   }
}

bold.addEventListener("click",(e)=>{
    e.preventDefault()
    text.classList.toggle("bold")
})
italic.addEventListener("click",(e)=>{
    e.preventDefault()
    text.classList.toggle("italic")
})
underLine.addEventListener("click",(e)=>{
    e.preventDefault()
    text.classList.toggle("underline")
})
color.addEventListener("change",(e)=>{
    text.style.color=color.value
})


text.addEventListener("keypress",countString)
function countString(e){
  counter.innerHTML=text.value.length
  if(Number(counter.innerHTML) < 500){
    counter.style.color="green"
  }else if(Number(counter.innerHTML)==500){
    counter.style.color="red"
  }
}

left.addEventListener("click",(e)=>{
    e.preventDefault()
    text.style.textAlign="left"
})
center.addEventListener("click",(e)=>{
    e.preventDefault()
    text.style.textAlign="center"
})
right.addEventListener("click",(e)=>{
    e.preventDefault()
    text.style.textAlign="right"
})
justify.addEventListener("click",(e)=>{
    e.preventDefault()
    text.style.textAlign="justify"
})