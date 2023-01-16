const screen=document.querySelector(".screen")
const one=document.querySelector(".one")
const two=document.querySelector(".two")
const three=document.querySelector(".three")
const four=document.querySelector(".four")
const five=document.querySelector(".five")
const six=document.querySelector(".six")
const seven=document.querySelector(".seven")
const eight=document.querySelector(".eight")
const nine=document.querySelector(".nine")
const zero=document.querySelector(".zero")
const dot=document.querySelector(".dot")
const mult=document.querySelector(".mult")
const div=document.querySelector(".div")
const plus=document.querySelector(".plus")
const less=document.querySelector(".less")
const ac=document.querySelector(".ac")
const equal=document.querySelector(".equal")
const del=document.querySelector(".del")


one.addEventListener("click",()=>{
    screen.value+=1
})

two.addEventListener("click",()=>{
    screen.value+=2
})

three.addEventListener("click",()=>{
    screen.value+=3
})

four.addEventListener("click",()=>{
    screen.value+=4
})

five.addEventListener("click",()=>{
    screen.value+=5
})

six.addEventListener("click",()=>{
    screen.value+=6
})

seven.addEventListener("click",()=>{
    screen.value+=7
})

eight.addEventListener("click",()=>{
    screen.value+=8
})

nine.addEventListener("click",()=>{
    screen.value+=9
})

zero.addEventListener("click",()=>{
    screen.value+=0
})

dot.addEventListener("click",()=>{
    screen.value+="."
})

plus.addEventListener("click",()=>{
    screen.value+="+"
})

less.addEventListener("click",()=>{
    screen.value+="-"
})

mult.addEventListener("click",()=>{
    screen.value+="*"
})

div.addEventListener("click",()=>{
    screen.value+="/"
})

ac.addEventListener("click",()=>{
    screen.value=""
})

equal.addEventListener("click",()=>{
    screen.value=eval(screen.value)
})

del.addEventListener("click",()=>{
    console.log(screen.value[-1])
})


del.addEventListener("click",()=>{
    screen.value = screen.value.slice(0,-1);
  });
  
  
  